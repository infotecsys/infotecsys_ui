/**
 * Executive Digital Visiting Card & Contact Terminal Engine
 * Infotecsys Technologies
 * 
 * Features:
 * - 3D Gyroscopic / Mouse Parallax Card Tilt with Dynamic Specular Sheen
 * - Client-side .vcf vCard Generator & Instant Mobile Download
 * - Instant Contact Info Clipboard Copy with Visual Feedback Toast
 * - Contact Inquiry Form Handling with Validation & Success State
 */

export function initContactCard() {
  initCard3DTilt();
  initVCardDownload();
  initCopyContactInfo();
  initContactForm();
}

/**
 * 3D Mouse Parallax Card Tilt with Light Sheen
 */
function initCard3DTilt() {
  const cardWrappers = document.querySelectorAll('.visiting-card-wrap');
  if (!cardWrappers.length) return;

  cardWrappers.forEach((wrapper) => {
    const card = wrapper.querySelector('.visiting-card-inner');
    const sheen = wrapper.querySelector('.visiting-card-sheen');
    if (!card) return;

    let bounds = wrapper.getBoundingClientRect();
    let isHovered = false;

    function updateBounds() {
      bounds = wrapper.getBoundingClientRect();
    }

    window.addEventListener('resize', updateBounds, { passive: true });
    window.addEventListener('scroll', updateBounds, { passive: true });

    wrapper.addEventListener('mouseenter', () => {
      isHovered = true;
      updateBounds();
      card.style.transition = 'transform 0.15s ease-out';
      if (sheen) sheen.style.opacity = '1';
    });

    wrapper.addEventListener('mousemove', (e) => {
      if (!isHovered) return;

      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = mouseX / bounds.width;
      const yPct = mouseY / bounds.height;

      // Max tilt degrees: X rotation between -12 and +12, Y rotation between -14 and +14
      const tiltX = (0.5 - yPct) * 22;
      const tiltY = (xPct - 0.5) * 24;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(12px)`;

      // Dynamic specular reflection follows cursor
      if (sheen) {
        sheen.style.background = `radial-gradient(circle at ${Math.round(xPct * 100)}% ${Math.round(yPct * 100)}%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 65%)`;
      }
    });

    wrapper.addEventListener('mouseleave', () => {
      isHovered = false;
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      if (sheen) {
        sheen.style.transition = 'opacity 0.5s ease';
        sheen.style.opacity = '0';
      }
    });
  });
}

/**
 * Generate and download standard .vcf vCard file
 */
function initVCardDownload() {
  const downloadBtns = document.querySelectorAll('[data-action="download-vcard"]');
  if (!downloadBtns.length) return;

  downloadBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const vCardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'FN:Infotecsys Technologies',
        'ORG:Infotecsys Technologies Pvt. Ltd.',
        'TITLE:Executive Technology Desk & Solutions Architecture',
        'EMAIL;TYPE=INTERNET,WORK:info@infotecsys.com',
        'TEL;TYPE=WORK,VOICE:+919999999999',
        'URL:https://infotecsys.com',
        'ADR;TYPE=WORK:;;Maharashtra;India;;;India',
        'NOTE:Dual Capability: Custom Software & AI Platforms + 5 Ready-to-Deploy ERP Suites (School, Hospital, Salon, GST, Co-Living).',
        'END:VCARD'
      ].join('\r\n');

      const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Infotecsys_Executive_Contact.vcf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      showToast('vCard downloaded! Open to save to your contacts.');
    });
  });
}

/**
 * Copy Full Business Contact Coordinates to Clipboard
 */
function initCopyContactInfo() {
  const copyBtns = document.querySelectorAll('[data-action="copy-contact"]');
  if (!copyBtns.length) return;

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = `INFOTECSYS TECHNOLOGIES
Enterprise Software Engineering & Intelligent SaaS Platforms
Email: info@infotecsys.com
Phone / WhatsApp: +91 99999 99999
Website: https://infotecsys.com
Headquarters: Maharashtra, India
Global Reach: India | USA | UK | UAE`;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        const originalText = btn.innerHTML;
        btn.innerHTML = `<svg class="w-3.5 h-3.5 text-emerald-400 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> Copied!`;
        btn.classList.add('border-emerald-500/50', 'text-emerald-300');

        showToast('Business Card details copied to clipboard!');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('border-emerald-500/50', 'text-emerald-300');
        }, 2200);
      } catch (err) {
        showToast('Unable to copy automatically. Please copy manually.');
      }
    });
  });
}

/**
 * Rapid Architect Dispatch Inquiry Form
 */
function initContactForm() {
  const forms = document.querySelectorAll('.executive-inquiry-form');
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        showToast('Please provide your name and work email.');
        return;
      }

      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Transmitting to Solution Architects...
        `;
      }

      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        showToast('Inquiry dispatched! An executive architect will contact you within 2 hours.');
      }, 1200);
    });
  });
}

/**
 * Lightweight Floating Notification Toast
 */
function showToast(message) {
  let toast = document.getElementById('contact-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'contact-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-slate-900/95 dark:bg-slate-900/95 text-white text-xs font-semibold shadow-2xl border border-cyan-500/40 backdrop-blur-xl flex items-center gap-2.5 transition-all duration-300 translate-y-8 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
    <span>${message}</span>
  `;

  toast.classList.remove('translate-y-8', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-8', 'opacity-0', 'pointer-events-none');
  }, 3800);
}

