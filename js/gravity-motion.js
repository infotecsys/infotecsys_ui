/**
 * Scroll-Driven Gravity Physics & Ambient Motion System
 * 
 * Features:
 * - Real-time gravity field responding to scroll velocity & direction (down = gravity, up = anti-gravity)
 * - Directional motion streaks with vertical elongation
 * - Left & Right edge gravity warp streamers ("side effect")
 * - Boundary fade, destroy, and seamless recycling
 * - Zero-allocation object pooling for 60fps hardware-accelerated performance
 * - Controlled by Motion Controller (pauses loop & clears canvas when animations are toggled OFF)
 */

import { isMotionEnabled } from './motion-controller.js';

export function initGravityMotion() {
  // Respect reduced motion preference if user hasn't explicitly enabled motion
  if (!isMotionEnabled() && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Create or retrieve canvases
  // 1. Background Sun Canvas (Light Mode background atmosphere at z-0)
  let sunCanvas = document.getElementById('daylight-sun-canvas');
  if (!sunCanvas) {
    sunCanvas = document.createElement('canvas');
    sunCanvas.id = 'daylight-sun-canvas';
    sunCanvas.className = 'fixed inset-0 pointer-events-none z-0 w-full h-full';
    document.body.insertBefore(sunCanvas, document.body.firstChild);
  }
  const sunCtx = sunCanvas ? sunCanvas.getContext('2d') : null;

  // 2. Foreground Kinetic Motion Canvas (z-20: dark mode stars & light mode rainbow streams)
  let canvas = document.getElementById('gravity-bg-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'gravity-bg-canvas';
    canvas.className = 'fixed inset-0 pointer-events-none z-20 w-full h-full';
    canvas.style.mixBlendMode = 'screen';
    canvas.style.opacity = '0.9';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  let daylightEngine = null;

  // Resize handler
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    if (sunCanvas && sunCtx) {
      sunCanvas.width = Math.floor(width * dpr);
      sunCanvas.height = Math.floor(height * dpr);
      sunCanvas.style.width = `${width}px`;
      sunCanvas.style.height = `${height}px`;
      sunCtx.setTransform(1, 0, 0, 1, 0, 0);
      sunCtx.scale(dpr, dpr);
    }

    if (daylightEngine) {
      daylightEngine.onResize();
    }
  }

  // Physics State
  const physics = {
    targetVelocityY: 0,
    currentVelocityY: 0,
    idleDrift: 0.35, // Ambient resting downward drift
    lastScrollY: window.scrollY || window.pageYOffset || 0,
    lastScrollTime: performance.now(),
    isScrolling: false,
    idleTimeout: null,
    direction: 1 // 1 for down, -1 for up
  };

  // Color palettes for Dark vs Light mode
  const darkPalette = [
    { r: 6, g: 182, b: 212 },   // Cyber Cyan
    { r: 59, g: 130, b: 246 },  // Electric Blue
    { r: 99, g: 102, b: 241 },  // Indigo
    { r: 168, g: 85, b: 247 },  // Violet
  ];

  const lightPalette = [
    { r: 2, g: 132, b: 199 },   // Luminous Sky Cyan
    { r: 37, g: 99, b: 235 },   // Royal Sapphire
    { r: 79, g: 70, b: 229 },   // Deep Indigo
    { r: 124, g: 58, b: 237 },  // Electric Purple
    { r: 5, g: 150, b: 105 },   // Emerald Prism
  ];

  let isLightMode = document.documentElement.classList.contains('light');
  let currentPalette = isLightMode ? lightPalette : darkPalette;

  canvas.style.zIndex = '20';
  canvas.style.pointerEvents = 'none';

  if (isLightMode) {
    canvas.style.mixBlendMode = 'normal';
    canvas.style.opacity = '1';
    if (sunCanvas) sunCanvas.style.display = 'block';
  } else {
    canvas.style.mixBlendMode = 'screen';
    canvas.style.opacity = '0.9';
    if (sunCanvas) sunCanvas.style.display = 'none';
  }

  const isMobile = window.innerWidth < 768;
  const STAR_COUNT = isMobile ? 45 : 90;
  const SIDE_STREAMER_COUNT = isMobile ? 8 : 16;

  // Particle Pools
  class GravityStar {
    constructor() {
      this.reset(true);
    }

    updateColor() {
      const col = currentPalette[Math.floor(Math.random() * currentPalette.length)];
      this.colorStr = `${col.r}, ${col.g}, ${col.b}`;
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.depth = Math.random() * 0.8 + 0.4; // 0.4 (slow background) to 1.2 (fast foreground)
      this.radius = (Math.random() * 1.6 + 0.9) * this.depth;
      
      this.updateColor();
      this.baseAlpha = isLightMode ? (Math.random() * 0.35 + 0.25) : (Math.random() * 0.5 + 0.35);
      this.alpha = this.baseAlpha;

      if (initial) {
        this.y = Math.random() * height;
      } else {
        // Spawn from top if moving down, or bottom if moving up
        if (physics.currentVelocityY >= 0) {
          this.y = -15 - Math.random() * 40;
        } else {
          this.y = height + 15 + Math.random() * 40;
        }
      }
    }

    update(vy) {
      // Effective speed depends on depth and global gravity velocity
      const effectiveVy = vy * this.depth;
      this.y += effectiveVy;

      // Calculate edge proximity for boundary fade & destruction
      const fadeDist = 60;
      if (vy >= 0) {
        // Falling down: fade as it reaches bottom
        if (this.y > height - fadeDist) {
          const progress = Math.max(0, (height - this.y) / fadeDist);
          this.alpha = this.baseAlpha * progress;
        } else if (this.y < fadeDist) {
          // Fade in at top
          const progress = Math.max(0, this.y / fadeDist);
          this.alpha = this.baseAlpha * Math.min(1, progress);
        } else {
          this.alpha = this.baseAlpha;
        }

        // Destroy at bottom and recycle to top
        if (this.y > height + 20) {
          this.reset(false);
          this.y = -10;
        }
      } else {
        // Rising up (Anti-gravity): fade as it reaches top
        if (this.y < fadeDist) {
          const progress = Math.max(0, this.y / fadeDist);
          this.alpha = this.baseAlpha * progress;
        } else if (this.y > height - fadeDist) {
          // Fade in at bottom
          const progress = Math.max(0, (height - this.y) / fadeDist);
          this.alpha = this.baseAlpha * Math.min(1, progress);
        } else {
          this.alpha = this.baseAlpha;
        }

        // Destroy at top and recycle to bottom
        if (this.y < -20) {
          this.reset(false);
          this.y = height + 10;
        }
      }
    }

    draw(ctx, vy) {
      if (this.alpha <= 0.01) return;

      const streakLength = Math.min(70, Math.abs(vy) * 4.2 * this.depth);

      if (streakLength > 4) {
        // Motion Streak / Warp Line
        ctx.beginPath();
        const startY = this.y;
        const endY = vy > 0 ? this.y - streakLength : this.y + streakLength;

        const grad = ctx.createLinearGradient(this.x, startY, this.x, endY);
        grad.addColorStop(0, `rgba(${this.colorStr}, ${this.alpha * 0.95})`);
        grad.addColorStop(1, `rgba(${this.colorStr}, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = Math.max(1, this.radius * 1.1);
        ctx.lineCap = 'round';
        ctx.moveTo(this.x, startY);
        ctx.lineTo(this.x, endY);
        ctx.stroke();

        // Bright leading head node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = isLightMode 
          ? `rgba(${this.colorStr}, ${this.alpha * 0.95})` 
          : `rgba(255, 255, 255, ${this.alpha * 0.8})`;
        ctx.fill();
      } else {
        // Ambient resting node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.colorStr}, ${this.alpha})`;
        ctx.fill();
      }
    }
  }

  // Side Gravity Warp Streamers (Left & Right Screen Margins)
  class SideStreamer {
    constructor(side) {
      this.side = side; // 'left' or 'right'
      this.reset(true);
    }

    updateColor() {
      const isCyan = Math.random() > 0.45;
      if (isLightMode) {
        this.colorStr = isCyan ? '8, 145, 178' : '126, 34, 206';
      } else {
        this.colorStr = isCyan ? '6, 182, 212' : '168, 85, 247';
      }
    }

    reset(initial = false) {
      const margin = isMobile ? 40 : 85;
      if (this.side === 'left') {
        this.x = Math.random() * margin + 6;
      } else {
        this.x = width - (Math.random() * margin + 6);
      }

      this.speedMult = Math.random() * 0.7 + 0.8;
      this.length = Math.random() * 80 + 70;
      this.width = Math.random() * 1.8 + 1.2;

      this.updateColor();
      this.baseAlpha = isLightMode ? (Math.random() * 0.35 + 0.2) : (Math.random() * 0.4 + 0.25);
      this.alpha = 0;

      if (initial) {
        this.y = Math.random() * height;
      } else {
        if (physics.currentVelocityY >= 0) {
          this.y = -this.length - Math.random() * 50;
        } else {
          this.y = height + this.length + Math.random() * 50;
        }
      }
    }

    update(vy) {
      const activeSpeed = Math.abs(vy);
      // Fade in prominently only when active motion occurs
      const targetAlpha = activeSpeed > 1.2 ? Math.min(0.7, (activeSpeed / 8) * this.baseAlpha) : 0.05;
      this.alpha += (targetAlpha - this.alpha) * 0.15;

      const effectiveVy = vy * this.speedMult * 1.25;
      this.y += effectiveVy;

      // Recycle at boundaries
      if (vy >= 0 && this.y > height + this.length) {
        this.reset(false);
      } else if (vy < 0 && this.y < -this.length) {
        this.reset(false);
      }
    }

    draw(ctx, vy) {
      if (this.alpha <= 0.01) return;

      const dynamicLength = this.length * (1 + Math.min(1.8, Math.abs(vy) * 0.1));
      const startY = this.y;
      const endY = vy >= 0 ? this.y - dynamicLength : this.y + dynamicLength;

      ctx.beginPath();
      const grad = ctx.createLinearGradient(this.x, startY, this.x, endY);
      grad.addColorStop(0, `rgba(${this.colorStr}, ${this.alpha})`);
      grad.addColorStop(0.6, `rgba(${this.colorStr}, ${this.alpha * 0.4})`);
      grad.addColorStop(1, `rgba(${this.colorStr}, 0)`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = this.width;
      ctx.lineCap = 'round';
      ctx.moveTo(this.x, startY);
      ctx.lineTo(this.x, endY);
      ctx.stroke();
    }
  }

  // ========================================================
  // LIGHT MODE: DAYLIGHT SUN (BACKGROUND) & PRISMATIC RAINBOW (FOREGROUND)
  // ========================================================
  class DaylightSunEngine {
    constructor() {
      this.time = 0;
      this.mouseX = null;
      this.mouseY = null;
      this.kineticAlpha = 0; // Starts at 0 (idle - no rainbow until scroll)
      this.init();
    }

    setMouse(x, y) {
      this.mouseX = x;
      this.mouseY = y;
    }

    init() {
      // Sun Source positioned at upper-right corner
      this.sunX = width * 0.82;
      this.sunY = -25;
      this.sunRadius = Math.max(160, Math.min(width * 0.25, 260));

      // 8 Volumetric God Ray Shafts with rich golden-yellow daylight intensity
      this.rays = [
        { angleOffset: 0.08, widthScale: 0.95, speed: 0.0006, phase: 0.0, alpha: 0.14, lengthMult: 1.6 },
        { angleOffset: 0.20, widthScale: 1.35, speed: 0.0009, phase: 1.2, alpha: 0.18, lengthMult: 1.7 },
        { angleOffset: 0.35, widthScale: 0.80, speed: 0.0007, phase: 2.5, alpha: 0.12, lengthMult: 1.5 },
        { angleOffset: 0.50, widthScale: 1.55, speed: 0.0011, phase: 3.8, alpha: 0.22, lengthMult: 1.9 },
        { angleOffset: 0.65, widthScale: 1.05, speed: 0.0008, phase: 4.9, alpha: 0.15, lengthMult: 1.6 },
        { angleOffset: 0.80, widthScale: 1.30, speed: 0.0010, phase: 0.7, alpha: 0.18, lengthMult: 1.8 },
        { angleOffset: 0.96, widthScale: 0.75, speed: 0.0005, phase: 2.1, alpha: 0.12, lengthMult: 1.4 },
        { angleOffset: 1.12, widthScale: 1.15, speed: 0.0009, phase: 5.3, alpha: 0.15, lengthMult: 1.6 }
      ];

      // Saturated Prismatic Rainbow Palette
      const spectralPalette = [
        '239, 68, 68',   // Ruby Crimson
        '249, 115, 22',  // Amber Orange
        '234, 179, 8',   // Solar Gold
        '16, 185, 129',  // Spring Emerald
        '6, 182, 212',   // Electric Cyan
        '37, 99, 235',   // Royal Sapphire
        '139, 92, 246'   // Iris Violet
      ];

      // Dual-Edge Prismatic Rainbow Streamers (shoot during scroll down/up along left/right borders)
      const sideCount = isMobile ? 8 : 16;
      this.sideStreamers = [];
      for (let i = 0; i < sideCount; i++) {
        this.sideStreamers.push({
          side: i % 2 === 0 ? 'left' : 'right',
          colorStr: spectralPalette[i % spectralPalette.length],
          x: 0,
          y: Math.random() * height,
          speedMult: Math.random() * 0.7 + 0.85,
          length: Math.random() * 85 + 75,
          width: Math.random() * 2.4 + 1.4,
          alpha: 0
        });
      }

      // Pool of 85 Spectral Rainbow Energy Particles across the screen
      const streakCount = isMobile ? 45 : 85;
      this.streaks = [];
      for (let i = 0; i < streakCount; i++) {
        this.streaks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          colorStr: spectralPalette[i % spectralPalette.length],
          depth: Math.random() * 0.8 + 0.45,
          width: Math.random() * 2.2 + 1.2,
          length: Math.random() * 65 + 40,
          alpha: 0
        });
      }

      // Floating Golden Sun Dust Motes
      const moteCount = isMobile ? 30 : 60;
      this.motes = [];
      for (let i = 0; i < moteCount; i++) {
        this.motes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(Math.random() * 0.4 + 0.12), // Gentle buoyant upward rise
          radius: Math.random() * 1.8 + 0.8,
          baseAlpha: Math.random() * 0.3 + 0.18,
          alpha: 0.25,
          phase: Math.random() * Math.PI * 2,
          isWarm: Math.random() > 0.35 // Rich amber gold vs solar yellow
        });
      }
    }

    onResize() {
      this.sunX = width * 0.82;
      this.sunY = -25;
      this.sunRadius = Math.max(160, Math.min(width * 0.25, 260));
    }

    // Rendered on sunCanvas at Z-0 (Peaceful Background Atmosphere behind all content)
    drawSunAndRays(ctx, vy) {
      // Background sun is rendered via the unified Burning Sun (Sol Centralis) system
      return;
    }

    // Rendered on canvas at Z-20 (Foreground Kinetic Rainbow Streaks - Activated on scroll)
    updateAndDraw(ctx, vy, physics) {
      this.time += 1;
      const t = this.time;
      const scrollSpeed = Math.abs(vy);
      const isMovingDown = vy >= 0;

      // Kinetic Scroll Energy: ignited when scrolling down or up, fading when idle
      const isActivelyScrolling = (physics && physics.isScrolling) || scrollSpeed > 0.5;
      const targetKinetic = isActivelyScrolling ? 1.0 : 0.0;
      const smoothing = isActivelyScrolling ? 0.25 : 0.12;
      this.kineticAlpha += (targetKinetic - this.kineticAlpha) * smoothing;

      ctx.save();

      // 1. Prismatic Rainbow Kinetic Motion Streaks (DOWN on scroll-down, UP on scroll-up)
      if (this.kineticAlpha > 0.01) {
        for (let i = 0; i < this.streaks.length; i++) {
          const s = this.streaks[i];

          // Move strictly in direction of scroll velocity
          const effectiveSpeed = vy * s.depth * 1.65;
          s.y += effectiveSpeed;

          // Boundary wrap & recycling
          if (isMovingDown) {
            // Scrolling DOWN: spawn at top, cascade down
            if (s.y > height + 40) {
              s.y = -25 - Math.random() * 40;
              s.x = Math.random() * width;
            }
          } else {
            // Scrolling UP: spawn at bottom, shoot up
            if (s.y < -40) {
              s.y = height + 25 + Math.random() * 40;
              s.x = Math.random() * width;
            }
          }

          // Streak elongation along velocity
          const dynamicLen = Math.min(115, Math.max(16, scrollSpeed * 4.8 * s.depth + s.length * 0.35));
          const startY = s.y;
          const endY = isMovingDown ? s.y - dynamicLen : s.y + dynamicLen;

          const targetAlpha = Math.min(0.92, this.kineticAlpha * (s.depth * 0.55 + 0.45));
          s.alpha += (targetAlpha - s.alpha) * 0.25;

          if (s.alpha > 0.01) {
            ctx.beginPath();
            const grad = ctx.createLinearGradient(s.x, startY, s.x, endY);
            // Solar white leading spark
            grad.addColorStop(0, `rgba(255, 255, 255, ${s.alpha * 0.98})`);
            // Spectral rainbow core
            grad.addColorStop(0.32, `rgba(${s.colorStr}, ${s.alpha * 0.92})`);
            // Transparent trailing tail
            grad.addColorStop(1, `rgba(${s.colorStr}, 0)`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = s.width;
            ctx.lineCap = 'round';
            ctx.moveTo(s.x, startY);
            ctx.lineTo(s.x, endY);
            ctx.stroke();

            // Head glint spark
            ctx.beginPath();
            ctx.arc(s.x, startY, s.width * 1.1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
            ctx.fill();
          }
        }

        // 2. Dual-Edge Rainbow Streamers (shoot down/up along left & right margins)
        for (let s = 0; s < this.sideStreamers.length; s++) {
          const str = this.sideStreamers[s];
          const margin = isMobile ? 45 : 95;
          if (str.x === 0) {
            str.x = str.side === 'left' ? Math.random() * margin + 8 : width - (Math.random() * margin + 8);
          }

          str.y += vy * str.speedMult * 1.4;

          if (isMovingDown && str.y > height + str.length) {
            str.y = -str.length - Math.random() * 40;
            str.x = str.side === 'left' ? Math.random() * margin + 8 : width - (Math.random() * margin + 8);
          } else if (!isMovingDown && str.y < -str.length) {
            str.y = height + str.length + Math.random() * 40;
            str.x = str.side === 'left' ? Math.random() * margin + 8 : width - (Math.random() * margin + 8);
          }

          const dynamicLen = str.length * (1 + Math.min(2.5, scrollSpeed * 0.18));
          const startY = str.y;
          const endY = isMovingDown ? str.y - dynamicLen : str.y + dynamicLen;

          const targetAlpha = Math.min(0.8, this.kineticAlpha * 0.85);
          str.alpha += (targetAlpha - str.alpha) * 0.2;

          if (str.alpha > 0.01) {
            ctx.beginPath();
            const grad = ctx.createLinearGradient(str.x, startY, str.x, endY);
            grad.addColorStop(0, `rgba(${str.colorStr}, ${str.alpha})`);
            grad.addColorStop(0.45, `rgba(${str.colorStr}, ${str.alpha * 0.5})`);
            grad.addColorStop(1, `rgba(${str.colorStr}, 0)`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = str.width;
            ctx.lineCap = 'round';
            ctx.moveTo(str.x, startY);
            ctx.lineTo(str.x, endY);
            ctx.stroke();
          }
        }
      }

      // 3. Floating Golden Sun Dust Motes with Mouse Interaction
      for (let m = 0; m < this.motes.length; m++) {
        const mote = this.motes[m];

        mote.y += mote.vy - (vy * 0.18);
        mote.x += mote.vx + Math.sin(t * 0.02 + mote.phase) * 0.35;

        // Interactive Cursor Swirl when mouse is active in Light Mode
        if (this.mouseX !== null && this.mouseY !== null) {
          const cdx = this.mouseX - mote.x;
          const cdy = this.mouseY - mote.y;
          const cdist = Math.hypot(cdx, cdy);
          if (cdist < 140 && cdist > 6) {
            const force = (140 - cdist) / 140;
            mote.x -= (cdx / cdist) * force * 1.4;
            mote.y -= (cdy / cdist) * force * 1.4;
            mote.alpha = Math.min(0.85, mote.alpha + 0.2 * force);
          }
        }

        if (mote.y < -15) {
          mote.y = height + 10;
          mote.x = Math.random() * width;
        } else if (mote.y > height + 15) {
          mote.y = -10;
          mote.x = Math.random() * width;
        }
        if (mote.x < -15) mote.x = width + 10;
        if (mote.x > width + 15) mote.x = -10;

        ctx.beginPath();
        ctx.arc(mote.x, mote.y, mote.radius, 0, Math.PI * 2);
        
        if (mote.isWarm) {
          ctx.fillStyle = `rgba(245, 158, 11, ${mote.alpha})`; // Rich amber gold
        } else {
          ctx.fillStyle = `rgba(234, 179, 8, ${mote.alpha * 1.1})`; // Solar canary gold
        }
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // Initialize Pools
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new GravityStar());
  }

  const streamers = [];
  for (let i = 0; i < SIDE_STREAMER_COUNT; i++) {
    streamers.push(new SideStreamer(i % 2 === 0 ? 'left' : 'right'));
  }

  // Initialize Light Mode Daylight Sun Engine
  daylightEngine = new DaylightSunEngine();
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Track Mouse Pointer for Light Mode Sunlight Refraction & Mote Swirl
  window.addEventListener('mousemove', (e) => {
    if (!motionActive || isPaused) return;
    if (daylightEngine && isLightMode) {
      daylightEngine.setMouse(e.clientX, e.clientY);
    }
  }, { passive: true });

  // Handle Dynamic Theme Change
  window.addEventListener('infotecsys-theme-change', (e) => {
    isLightMode = e.detail.isLight;
    currentPalette = isLightMode ? lightPalette : darkPalette;
    canvas.style.zIndex = '20';
    canvas.style.mixBlendMode = isLightMode ? 'normal' : 'screen';
    if (motionActive) {
      canvas.style.opacity = isLightMode ? '1' : '0.9';
    }

    if (sunCanvas) {
      sunCanvas.style.display = isLightMode ? 'block' : 'none';
      if ((!isLightMode || !motionActive) && sunCtx) {
        sunCtx.clearRect(0, 0, width, height);
      }
    }

    if (!isLightMode) {
      for (let i = 0; i < stars.length; i++) {
        stars[i].updateColor();
      }
      for (let i = 0; i < streamers.length; i++) {
        streamers[i].updateColor();
      }
    }
  });

  // Handle Scroll & Wheel Events
  function triggerMotion(deltaY) {
    if (!motionActive || isPaused) return;
    physics.isScrolling = true;
    clearTimeout(physics.idleTimeout);

    // Give a clear, healthy kinetic velocity impulse
    const direction = deltaY >= 0 ? 1 : -1;
    const magnitude = Math.min(32, Math.max(9, Math.abs(deltaY) * 0.28));
    physics.targetVelocityY = direction * magnitude;
    physics.direction = direction;

    // Reset back to idle drift after user stops scrolling (300ms window)
    physics.idleTimeout = setTimeout(() => {
      physics.isScrolling = false;
    }, 300);
  }

  // Mouse wheel listener (high sensitivity)
  window.addEventListener('wheel', (e) => {
    triggerMotion(e.deltaY);
  }, { passive: true });

  // Page scroll listener (scrollbar & touch drag support)
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY || window.pageYOffset || 0;
    const deltaY = currentScrollY - physics.lastScrollY;
    physics.lastScrollY = currentScrollY;

    if (Math.abs(deltaY) > 0.5) {
      triggerMotion(deltaY);
    }
  }, { passive: true });

  // Touch listener for mobile devices
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const currentTouchY = e.touches[0].clientY;
      const deltaY = touchStartY - currentTouchY;
      touchStartY = currentTouchY;
      triggerMotion(deltaY * 0.7);
    }
  }, { passive: true });

  // Animation Loop (60 FPS Hardware-Accelerated)
  let animationId = null;
  let motionActive = isMotionEnabled();
  let isPaused = !motionActive;

  // Handle Interactive Motion Toggle (ON / OFF)
  window.addEventListener('infotecsys-motion-change', (e) => {
    motionActive = !!e.detail.enabled;
    if (!motionActive) {
      isPaused = true;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      if (ctx) ctx.clearRect(0, 0, width, height);
      if (sunCtx) sunCtx.clearRect(0, 0, width, height);
      if (canvas) canvas.style.opacity = '0';
      if (sunCanvas) sunCanvas.style.opacity = '0';
    } else {
      isPaused = false;
      if (canvas) canvas.style.opacity = isLightMode ? '1' : '0.9';
      if (sunCanvas) sunCanvas.style.opacity = isLightMode ? '1' : '0';
      physics.lastScrollY = window.scrollY || window.pageYOffset || 0;
      if (animationId) cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(animate);
    }
  });

  function animate() {
    if (isPaused || !motionActive) return;

    // Smooth physics damping (Spring-like interpolation)
    const baseTarget = physics.isScrolling ? physics.targetVelocityY : physics.idleDrift;
    physics.currentVelocityY += (baseTarget - physics.currentVelocityY) * 0.14;

    // Smooth deceleration when scrolling
    if (physics.isScrolling) {
      physics.targetVelocityY *= 0.94;
    }

    // Clear Foreground Canvas
    ctx.clearRect(0, 0, width, height);

    const vy = physics.currentVelocityY;

    if (!isLightMode) {
      // ----------------------------------------------------
      // DARK MODE: UNTOUCHED Cosmic Gravity Stars & Streamers
      // ----------------------------------------------------
      for (let i = 0; i < stars.length; i++) {
        stars[i].update(vy);
        stars[i].draw(ctx, vy);
      }

      for (let i = 0; i < streamers.length; i++) {
        streamers[i].update(vy);
        streamers[i].draw(ctx, vy);
      }
    } else {
      // ----------------------------------------------------
      // LIGHT MODE: Background Sun & Foreground Rainbow Motion
      // ----------------------------------------------------
      if (daylightEngine) {
        if (sunCtx) {
          sunCtx.clearRect(0, 0, width, height);
          daylightEngine.drawSunAndRays(sunCtx, vy);
        }
        daylightEngine.updateAndDraw(ctx, vy, physics);
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  // Visibility state pausing (saves 100% CPU when tab is inactive)
  document.addEventListener('visibilitychange', () => {
    if (!motionActive) return;
    if (document.hidden) {
      isPaused = true;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    } else {
      isPaused = false;
      physics.lastScrollY = window.scrollY || window.pageYOffset || 0;
      if (animationId) cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(animate);
    }
  });

  // Start Animation if motion is enabled
  if (motionActive) {
    if (canvas) canvas.style.opacity = isLightMode ? '1' : '0.9';
    if (sunCanvas) sunCanvas.style.opacity = isLightMode ? '1' : '0';
    animationId = requestAnimationFrame(animate);
  } else {
    if (canvas) canvas.style.opacity = '0';
    if (sunCanvas) sunCanvas.style.opacity = '0';
  }
}

