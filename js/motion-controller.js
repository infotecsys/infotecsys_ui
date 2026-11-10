/**
 * Production-Grade Interactive Animation & Motion Controller for Infotecsys
 * Manages user preference for mouse pointer effects, scroll-driven canvas physics,
 * and background kinetic shaders. Handles persistence, cross-tab sync, and UI state.
 */

const MOTION_STORAGE_KEY = 'infotecsys-motion';

export function isMotionEnabled() {
  const saved = localStorage.getItem(MOTION_STORAGE_KEY);
  if (saved !== null) {
    return saved !== 'disabled';
  }
  // Default to enabled unless user explicitly set reduced motion at OS level
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function setMotion(enabled, showToast = false) {
  const html = document.documentElement;
  
  if (enabled) {
    html.classList.add('motion-enabled');
    html.classList.remove('motion-disabled');
    localStorage.setItem(MOTION_STORAGE_KEY, 'enabled');
  } else {
    html.classList.add('motion-disabled');
    html.classList.remove('motion-enabled');
    localStorage.setItem(MOTION_STORAGE_KEY, 'disabled');
  }

  // Update all motion toggle buttons on page (desktop & mobile)
  updateMotionButtons(enabled);

  // Show visual feedback toast if triggered by user interaction
  if (showToast) {
    showMotionToast(enabled);
  }

  // Dispatch custom event for canvas and cursor engines
  window.dispatchEvent(new CustomEvent('infotecsys-motion-change', {
    detail: { enabled }
  }));
}

function updateMotionButtons(enabled) {
  const buttons = document.querySelectorAll('[data-motion-toggle]');
  buttons.forEach(btn => {
    const iconOn = btn.querySelector('.motion-icon-on');
    const iconOff = btn.querySelector('.motion-icon-off');

    if (enabled) {
      if (iconOn) {
        iconOn.classList.remove('hidden');
        iconOn.classList.add('flex');
      }
      if (iconOff) {
        iconOff.classList.add('hidden');
        iconOff.classList.remove('flex');
      }
      btn.setAttribute('aria-label', 'Interactive Animations: Active (Click to Turn OFF)');
      btn.setAttribute('title', 'Animations: ON (Click to disable pointer & scroll effects)');
      btn.classList.remove('border-amber-500/50', 'text-amber-400');
    } else {
      if (iconOn) {
        iconOn.classList.add('hidden');
        iconOn.classList.remove('flex');
      }
      if (iconOff) {
        iconOff.classList.remove('hidden');
        iconOff.classList.add('flex');
      }
      btn.setAttribute('aria-label', 'Interactive Animations: Paused (Click to Turn ON)');
      btn.setAttribute('title', 'Animations: OFF (Click to enable pointer & scroll effects)');
      btn.classList.add('border-amber-500/50', 'text-amber-400');
    }
  });
}

function showMotionToast(enabled) {
  let toast = document.getElementById('motion-hud-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'motion-hud-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 pointer-events-none transition-all duration-300 transform translate-y-4 opacity-0';
    document.body.appendChild(toast);
  }

  const message = enabled
    ? `<div class="px-4 py-2.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 border border-cyan-500/40 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 text-xs font-semibold text-white">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>✨ Motion &amp; Pointer Effects: <strong class="text-cyan-400 font-bold">Enabled</strong></span>
      </div>`
    : `<div class="px-4 py-2.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 border border-amber-500/40 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 text-xs font-semibold text-white">
        <span class="w-2 h-2 rounded-full bg-amber-400"></span>
        <span>⏸️ Motion &amp; Pointer Effects: <strong class="text-amber-400 font-bold">Disabled</strong></span>
      </div>`;

  toast.innerHTML = message;

  // Reveal toast
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto-dismiss after 1.8 seconds
  if (toast._timer) clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
  }, 1800);
}

export function toggleMotion() {
  const current = isMotionEnabled();
  setMotion(!current, true);
}

export function initMotionController() {
  const initial = isMotionEnabled();
  setMotion(initial, false);

  // Bind click event listeners to all motion toggle buttons
  const buttons = document.querySelectorAll('[data-motion-toggle]');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMotion();
    });
  });

  // Listen to cross-window storage events
  window.addEventListener('storage', (e) => {
    if (e.key === MOTION_STORAGE_KEY) {
      const enabled = e.newValue !== 'disabled';
      setMotion(enabled, false);
    }
  });
}

