/**
 * Enterprise Mouse Interaction System
 * Dual-ring physics cursor, ambient spotlight illumination, hover magnetics & click shockwave
 * Fully controlled by the Motion Controller (disabled when user toggles animations OFF).
 */

import { isMotionEnabled } from './motion-controller.js';

export function initCursorEffects() {
  // Gracefully disable on touch screens (phones / tablets)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Check reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Create cursor elements dynamically
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';

  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';

  document.body.appendChild(spotlight);
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let ringX = mouseX;
  let ringY = mouseY;

  let spotX = mouseX;
  let spotY = mouseY;

  let isHovering = false;
  let isMouseDown = false;
  let isVisible = false;
  let motionActive = isMotionEnabled();
  let rafId = null;

  // If initially disabled, hide immediately
  if (!motionActive) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    spotlight.style.display = 'none';
  }

  // Track mouse coordinates
  function startLoop() {
    if (!rafId && motionActive) {
      rafId = requestAnimationFrame(render);
    }
  }

  window.addEventListener('mousemove', (e) => {
    if (!motionActive) return;
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      spotlight.style.opacity = '1';
    }

    // Direct 1:1 translation for inner precision dot (zero latency)
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    startLoop();
  });

  // Physics animation loop using LERP (Linear Interpolation)
  function render() {
    if (!motionActive) {
      rafId = null;
      return;
    }

    // Easing factor: 0.18 for smooth natural glide
    const dxR = mouseX - ringX;
    const dyR = mouseY - ringY;
    const dxS = mouseX - spotX;
    const dyS = mouseY - spotY;

    // Idle sleep check: when cursor and spotlight have settled, pause RAF to save CPU
    if (Math.abs(dxR) < 0.1 && Math.abs(dyR) < 0.1 && Math.abs(dxS) < 0.1 && Math.abs(dyS) < 0.1) {
      ringX = mouseX;
      ringY = mouseY;
      spotX = mouseX;
      spotY = mouseY;
      ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%) ${isMouseDown ? 'scale(0.85)' : ''}`;
      spotlight.style.transform = `translate3d(${spotX.toFixed(2)}px, ${spotY.toFixed(2)}px, 0) translate(-50%, -50%)`;
      rafId = null;
      return;
    }

    ringX += dxR * 0.18;
    ringY += dyR * 0.18;

    // Slower, softer easing for ambient spotlight (0.08)
    spotX += dxS * 0.08;
    spotY += dyS * 0.08;

    ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%) ${isMouseDown ? 'scale(0.85)' : ''}`;
    spotlight.style.transform = `translate3d(${spotX.toFixed(2)}px, ${spotY.toFixed(2)}px, 0) translate(-50%, -50%)`;

    rafId = requestAnimationFrame(render);
  }

  if (motionActive) {
    startLoop();
  }

  // Listen to motion toggle changes
  window.addEventListener('infotecsys-motion-change', (e) => {
    motionActive = !!e.detail.enabled;
    if (!motionActive) {
      dot.style.display = 'none';
      ring.style.display = 'none';
      spotlight.style.display = 'none';
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else {
      dot.style.display = 'block';
      ring.style.display = 'block';
      spotlight.style.display = 'block';
      isVisible = false;
      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    if (!motionActive) return;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    spotlight.style.opacity = '0';
    isVisible = false;
  });

  // Re-show when re-entering
  document.addEventListener('mouseenter', () => {
    if (!motionActive) return;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    spotlight.style.opacity = '1';
    isVisible = true;
    startLoop();
  });

  // Magnetic hover states on interactive elements
  function attachHoverListeners() {
    const interactiveSelectors = 'a, button, [role="button"], input, select, textarea, [data-hero-pill], [data-product-tab], [data-industry], [data-portfolio-filter]';
    
    document.addEventListener('mouseover', (e) => {
      if (!motionActive) return;
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        ring.classList.add('cursor-hover');
        isHovering = true;
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (!motionActive) return;
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        ring.classList.remove('cursor-hover');
        isHovering = false;
      }
    });
  }

  attachHoverListeners();

  // Mouse down & up effects
  window.addEventListener('mousedown', (e) => {
    if (!motionActive) return;
    isMouseDown = true;
    ring.classList.add('cursor-active');
    triggerClickShockwave(e.clientX, e.clientY);
    startLoop();
  });

  window.addEventListener('mouseup', () => {
    if (!motionActive) return;
    isMouseDown = false;
    ring.classList.remove('cursor-active');
    startLoop();
  });

  // Click shockwave & energy micro-particles
  function triggerClickShockwave(x, y) {
    if (!motionActive) return;
    // 1. Expanding shockwave ring
    const wave = document.createElement('div');
    wave.className = 'click-shockwave';
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    document.body.appendChild(wave);

    setTimeout(() => {
      wave.remove();
    }, 450);

    // 2. Radiating energy particles (5 particles)
    const particleCount = 5;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'click-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const distance = Math.random() * 28 + 22; // 22px to 50px
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance;

      document.body.appendChild(particle);

      // Trigger animation on next frame
      requestAnimationFrame(() => {
        particle.style.transform = `translate3d(${destX}px, ${destY}px, 0) scale(0)`;
        particle.style.opacity = '0';
      });

      setTimeout(() => {
        particle.remove();
      }, 400);
    }
  }
}

