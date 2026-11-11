/**
 * Main Application Orchestrator for Infotecsys
 * Lean, high-performance progressive engine with dynamic code-splitting
 */

import { initTheme } from './theme.js';
import { initMotionController } from './motion-controller.js';
import { initParticleCanvas } from './particles.js';
import { initNav } from './nav.js';
import { initTilt } from './tilt.js';
import { initHeroSwitcher } from './hero-switcher.js';
import { initCursorEffects } from './cursor-effects.js';
import { initGravityMotion } from './gravity-motion.js';
import { initBookingModal } from './booking-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Initialize theme manager & motion controller first
  initTheme();
  initMotionController();

  // 1. Initialize core visual, physics & navigation modules (Critical Tier)
  initParticleCanvas('hero-canvas');
  initNav();
  initTilt();
  initHeroSwitcher();
  initCursorEffects();
  initGravityMotion();
  initBookingModal();

  // 2. Progressive Tier: Conditionally load deep tools & showcase modules on-demand
  const scheduleIdleTask = (typeof window.requestIdleCallback === 'function')
    ? (cb) => window.requestIdleCallback(cb, { timeout: 150 })
    : (cb) => setTimeout(cb, 20);

  scheduleIdleTask(() => {
    // Dynamic import: Software Dashboards PPT Studio (73 KB)
    if (document.getElementById('products-section') || document.getElementById('dashboard-preview-content')) {
      import('./dashboard-preview.js').then(m => m.initDashboardPreview());
    }

    // Dynamic import: Interactive Solution Finder (16 KB)
    if (document.getElementById('solution-finder-section') || document.getElementById('raycast-window')) {
      import('./solution-finder.js').then(m => m.initSolutionFinder());
    }

    // Dynamic import: Excel Comparison Matrix (4 KB)
    if (document.getElementById('excel-workbook-container')) {
      import('./excel-matrix.js').then(m => m.initExcelMatrix());
    }

    // Dynamic import: Cost & Timeline Estimator (5 KB)
    if (document.getElementById('cost-estimator-section') || document.getElementById('estimator-card')) {
      import('./estimator.js').then(m => m.initEstimator());
    }

    // Dynamic import: AI Solutions Assistant (7 KB)
    if (document.getElementById('ai-assistant-drawer')) {
      import('./ai-assistant.js').then(m => m.initAIAssistant());
    }

    // Dynamic import: Blog Article Reader (16 KB)
    if (document.getElementById('article-modal') || document.getElementById('blog-modal')) {
      import('./blog-modal.js').then(m => m.initBlogSystem());
    }

    // Dynamic import: Contact Card & Form (8 KB)
    if (document.getElementById('contact-section') || document.getElementById('contact-form')) {
      import('./contact-card.js').then(m => m.initContactCard());
    }

    // 3. Smooth animated numbers counter with IntersectionObserver
    initAnimatedCounters();

    // 4. Portfolio category filter
    initPortfolioFilters();

    // 5. Accordion FAQs
    initFaqAccordions();
  });
});

function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = easeProgress * target;

          el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => observer.observe(el));
}

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('[data-portfolio-filter]');
  const items = document.querySelectorAll('[data-portfolio-item]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-portfolio-filter');

      filterBtns.forEach(b => {
        b.classList.remove('tab-active');
        b.classList.add('tab-inactive');
      });
      btn.classList.add('tab-active');
      btn.classList.remove('tab-inactive');

      items.forEach(item => {
        const itemCategories = item.getAttribute('data-portfolio-item').split(' ');
        if (category === 'all' || itemCategories.includes(category)) {
          item.classList.remove('hidden');
          setTimeout(() => item.classList.remove('opacity-0', 'scale-95'), 10);
        } else {
          item.classList.add('opacity-0', 'scale-95');
          setTimeout(() => item.classList.add('hidden'), 200);
        }
      });
    });
  });
}

function initFaqAccordions() {
  const faqTriggers = document.querySelectorAll('[data-faq-toggle]');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('.faq-icon');
      const isExpanded = !content.classList.contains('hidden');

      // Close all others
      document.querySelectorAll('[data-faq-content]').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (!isExpanded) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}
