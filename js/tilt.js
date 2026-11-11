/**
 * 3D Interactive Card & Mockup Tilt Effect
 * Smooth physics, resets gracefully on leave, touch-safe
 */
export function initTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // Skip touch screens

  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach((el) => {
    const maxTilt = parseFloat(el.getAttribute('data-tilt-max') || '8');
    const perspective = el.getAttribute('data-tilt-perspective') || '1000px';

    el.style.transformStyle = 'preserve-3d';
    el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

    let cachedRect = null;

    el.addEventListener('mouseenter', () => {
      cachedRect = el.getBoundingClientRect();
    }, { passive: true });

    el.addEventListener('mousemove', (e) => {
      if (!cachedRect) {
        cachedRect = el.getBoundingClientRect();
      }
      const x = e.clientX - cachedRect.left;
      const y = e.clientY - cachedRect.top;

      const centerX = cachedRect.width / 2;
      const centerY = cachedRect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(${perspective}) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
    }, { passive: true });

    el.addEventListener('mouseleave', () => {
      cachedRect = null;
      el.style.transform = `perspective(${perspective}) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

