/**
 * Consultation & Live Product Demo Booking Modal Logic
 * Dynamic prefill, slot selection, form validation & instant feedback
 */

export function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const backdrop = document.getElementById('booking-modal-backdrop');
  const closeBtn = document.getElementById('close-booking-modal');
  const form = document.getElementById('booking-form');
  const formState = document.getElementById('booking-form-state');
  const successState = document.getElementById('booking-success-state');
  const productSelect = document.getElementById('booking-product-select');
  const successDetails = document.getElementById('booking-success-details');

  if (!modal) return;

  window.openBookingModal = function(prefillData = null) {
    if (modal && backdrop) {
      modal.classList.remove('hidden', 'opacity-0', 'scale-95');
      backdrop.classList.remove('hidden', 'opacity-0');
      document.body.style.overflow = 'hidden';

      // Reset states
      if (formState) formState.classList.remove('hidden');
      if (successState) successState.classList.add('hidden');

      // Handle prefill
      if (prefillData && productSelect) {
        if (typeof prefillData === 'string') {
          // Find matching option
          for (let opt of productSelect.options) {
            if (opt.text.toLowerCase().includes(prefillData.toLowerCase())) {
              productSelect.value = opt.value;
              break;
            }
          }
        }
      }
    }
  };

  window.closeBookingModal = function() {
    if (modal && backdrop) {
      modal.classList.add('opacity-0', 'scale-95');
      backdrop.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
        document.body.style.overflow = '';
      }, 150);
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeBookingModal);
  if (backdrop) backdrop.addEventListener('click', window.closeBookingModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      window.closeBookingModal();
    }
  });

  // Attach click to all trigger buttons across the page
  document.querySelectorAll('[data-open-modal="booking"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const prefill = btn.getAttribute('data-prefill-product') || btn.getAttribute('data-scope-info');
      window.openBookingModal(prefill);
    });
  });

  // Time slot selection pills
  const slotButtons = modal.querySelectorAll('[data-time-slot]');
  slotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      slotButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'border-blue-500');
        b.classList.add('bg-slate-900', 'text-slate-300', 'border-slate-800');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'border-blue-500');
      btn.classList.remove('bg-slate-900', 'text-slate-300', 'border-slate-800');
    });
  });

  // Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('booking-name')?.value || 'Valued Client';
      const email = document.getElementById('booking-email')?.value || '';
      const phone = document.getElementById('booking-phone')?.value || '';
      const selectedProduct = productSelect?.options[productSelect.selectedIndex]?.text || 'General Consultation';

      // Switch to success state
      if (formState) formState.classList.add('hidden');
      if (successState) {
        successState.classList.remove('hidden');
        if (successDetails) {
          successDetails.innerHTML = `
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left text-xs space-y-2 mt-4">
              <div class="flex justify-between"><span class="text-slate-400">Representative:</span> <span class="text-white font-medium">Senior Solutions Architect</span></div>
              <div class="flex justify-between"><span class="text-slate-400">Subject:</span> <span class="text-cyan-400 font-medium">${selectedProduct}</span></div>
              <div class="flex justify-between"><span class="text-slate-400">Confirmation Sent To:</span> <span class="text-white font-medium">${email}</span></div>
              <div class="flex justify-between"><span class="text-slate-400">Direct WhatsApp:</span> <span class="text-emerald-400 font-medium">${phone || 'Scheduled on Calendar'}</span></div>
            </div>
          `;
        }
      }
    });
  }
}

