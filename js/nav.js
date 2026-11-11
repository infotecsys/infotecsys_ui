/**
 * Navigation logic: Sticky glass header, mega-menus, mobile slide drawer, smooth scroll
 */
export function initNav() {
  const header = document.getElementById('main-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const closeMobileDrawer = document.getElementById('close-mobile-drawer');

  // Sticky header blur on scroll with state latch to eliminate redundant DOM class mutations
  let isScrolled = null;
  function updateHeaderOnScroll() {
    if (!header) return;
    const shouldBeScrolled = window.scrollY > 20;
    if (shouldBeScrolled === isScrolled) return;
    isScrolled = shouldBeScrolled;

    if (isScrolled) {
      header.classList.add('glass-nav', 'py-3.5', 'shadow-2xl', 'shadow-slate-950/50');
      header.classList.remove('py-5', 'bg-transparent');
    } else {
      header.classList.remove('glass-nav', 'py-3.5', 'shadow-2xl', 'shadow-slate-950/50');
      header.classList.add('py-5', 'bg-transparent');
    }
  }

  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  // Mobile drawer controls
  function openDrawer() {
    if (!mobileDrawer || !mobileDrawerBackdrop) return;
    mobileDrawer.classList.remove('translate-x-full');
    mobileDrawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer || !mobileDrawerBackdrop) return;
    mobileDrawer.classList.add('translate-x-full');
    mobileDrawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeMobileDrawer) closeMobileDrawer.addEventListener('click', closeDrawer);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeDrawer);

  // Close drawer on link clicks
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');
  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Mobile accordion toggles inside drawer
  const accordionBtns = document.querySelectorAll('.mobile-accordion-btn');
  accordionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const content = btn.parentElement.querySelector('.mobile-accordion-content');
      const chevron = btn.querySelector('.mobile-chevron');
      if (!content) return;

      const isClosed = content.classList.contains('hidden');
      if (isClosed) {
        content.classList.remove('hidden');
        if (chevron) chevron.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
      }
    });
  });

  // Mega-menu hover & click handling
  const megaTriggers = document.querySelectorAll('[data-mega-trigger]');
  megaTriggers.forEach((trigger) => {
    const targetId = trigger.getAttribute('data-mega-trigger');
    const dropdown = document.getElementById(targetId);
    if (!dropdown) return;

    let timeoutId;

    const showDropdown = () => {
      clearTimeout(timeoutId);
      // Close other dropdowns first
      document.querySelectorAll('.mega-dropdown').forEach((d) => {
        if (d !== dropdown) d.classList.add('hidden', 'opacity-0', 'scale-95');
      });
      dropdown.classList.remove('hidden');
      setTimeout(() => {
        dropdown.classList.remove('opacity-0', 'scale-95');
        dropdown.classList.add('opacity-100', 'scale-100');
      }, 10);
    };

    const hideDropdown = () => {
      timeoutId = setTimeout(() => {
        dropdown.classList.remove('opacity-100', 'scale-100');
        dropdown.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
          dropdown.classList.add('hidden');
        }, 180);
      }, 120);
    };

    trigger.addEventListener('mouseenter', showDropdown);
    trigger.parentElement.addEventListener('mouseleave', hideDropdown);
    dropdown.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    dropdown.addEventListener('mouseleave', hideDropdown);
  });

  // Close mega dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-mega-trigger]') && !e.target.closest('.mega-dropdown')) {
      document.querySelectorAll('.mega-dropdown').forEach((d) => {
        d.classList.add('hidden', 'opacity-0', 'scale-95');
      });
    }
  });
}

