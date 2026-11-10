/**
 * Enterprise Dark / Light Mode Theme System for Infotecsys
 * Handles theme toggling, localStorage persistence, FOUC prevention,
 * dynamic logo swapping, and event dispatching for canvas shaders.
 */

const THEME_STORAGE_KEY = 'infotecsys-theme';

export function getPreferredTheme() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('theme')) {
    return urlParams.get('theme');
  }
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved) return saved;
  // Default to dark as preferred by Infotecsys branding
  return 'dark';
}

export function setTheme(theme) {
  const html = document.documentElement;
  const isLight = theme === 'light';

  if (isLight) {
    html.classList.add('light');
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
    html.classList.remove('light');
  }

  localStorage.setItem(THEME_STORAGE_KEY, theme);

  // Update Brand Logos
  updateBrandLogos(isLight);

  // Update Theme Toggle Buttons
  updateToggleButtons(isLight);

  // Dispatch custom event for canvas and other modules
  window.dispatchEvent(new CustomEvent('infotecsys-theme-change', {
    detail: { theme, isLight }
  }));
}

function updateBrandLogos(isLight) {
  const logos = document.querySelectorAll('.brand-logo-img');
  logos.forEach(logo => {
    // In light mode, use transparent high-contrast logo-light.png; in dark mode, use cyber neon logo.png
    const targetSrc = isLight ? './assets/images/logo-light.png' : './assets/images/logo.png';
    if (!logo.getAttribute('src').endsWith(targetSrc.replace('./', ''))) {
      logo.src = targetSrc;
    }
  });
}

function updateToggleButtons(isLight) {
  const buttons = document.querySelectorAll('[data-theme-toggle]');
  buttons.forEach(btn => {
    const sunIcon = btn.querySelector('.theme-sun-icon');
    const moonIcon = btn.querySelector('.theme-moon-icon');
    const label = btn.querySelector('.theme-toggle-label');

    if (isLight) {
      // In light mode, button offers to switch to Dark
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
      if (label) label.textContent = 'Dark Mode';
      btn.setAttribute('aria-label', 'Switch to Dark Mode');
      btn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      // In dark mode, button offers to switch to Light
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
      if (label) label.textContent = 'Light Mode';
      btn.setAttribute('aria-label', 'Switch to Light Mode');
      btn.setAttribute('title', 'Switch to Light Mode');
    }
  });
}

export function toggleTheme() {
  const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

export function initTheme() {
  const initialTheme = getPreferredTheme();
  setTheme(initialTheme);

  // Bind all toggle buttons
  const buttons = document.querySelectorAll('[data-theme-toggle]');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  // Listen to system preference changes if user hasn't explicitly set one
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

