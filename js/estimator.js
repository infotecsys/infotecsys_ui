/**
 * Interactive Project Cost & Timeline Estimator
 * Real-time calculation with currency toggle (USD/INR), add-on features & prefilled booking modal
 */

export function initEstimator() {
  const container = document.getElementById('cost-estimator-section');
  if (!container) return;

  let currency = 'USD'; // 'USD' or 'INR'
  const exchangeRate = 85; // 1 USD ~ 85 INR

  const baseProjects = {
    saas: { name: 'Custom SaaS Platform', usd: 4800, inr: 390000, weeks: 8 },
    mobile: { name: 'Cross-Platform Mobile App', usd: 3800, inr: 310000, weeks: 6 },
    erp: { name: 'Enterprise ERP / CRM Solution', usd: 5400, inr: 440000, weeks: 10 },
    web: { name: 'Modern Web Portal / Platform', usd: 2600, inr: 210000, weeks: 4 }
  };

  const addOnModules = {
    ai: { name: 'AI & LLM Intelligent Automation', usd: 1400, inr: 115000, weeks: 2 },
    multitenant: { name: 'Multi-Tenant Architecture', usd: 900, inr: 75000, weeks: 1.5 },
    payments: { name: 'Payment Gateways & Subscriptions', usd: 450, inr: 38000, weeks: 1 },
    whatsapp: { name: 'WhatsApp & SMS Notification Engine', usd: 350, inr: 28000, weeks: 0.5 },
    rbac: { name: 'Enterprise RBAC & Security Audit', usd: 400, inr: 32000, weeks: 0.5 },
    hardware: { name: 'Hardware & Barcode / RFID Interfacing', usd: 750, inr: 60000, weeks: 1 }
  };

  const projectRadios = container.querySelectorAll('input[name="project-scope"]');
  const featureCheckboxes = container.querySelectorAll('input[name="addon-feature"]');
  const speedRadios = container.querySelectorAll('input[name="delivery-speed"]');
  const currencyBtns = container.querySelectorAll('[data-currency]');

  const priceMinEl = document.getElementById('est-price-min');
  const priceMaxEl = document.getElementById('est-price-max');
  const timelineEl = document.getElementById('est-timeline');
  const scopeSummaryEl = document.getElementById('est-scope-summary');
  const lockScopeBtn = document.getElementById('est-lock-scope-btn');

  function calculateEstimate() {
    let selectedScope = 'saas';
    projectRadios.forEach(r => {
      if (r.checked) selectedScope = r.value;
    });

    const base = baseProjects[selectedScope] || baseProjects.saas;
    let totalUsd = base.usd;
    let totalInr = base.inr;
    let totalWeeks = base.weeks;
    const selectedFeatures = [];

    featureCheckboxes.forEach(cb => {
      if (cb.checked && addOnModules[cb.value]) {
        totalUsd += addOnModules[cb.value].usd;
        totalInr += addOnModules[cb.value].inr;
        totalWeeks += addOnModules[cb.value].weeks;
        selectedFeatures.push(addOnModules[cb.value].name);
      }
    });

    let isExpress = false;
    speedRadios.forEach(sr => {
      if (sr.checked && sr.value === 'express') isExpress = true;
    });

    if (isExpress) {
      totalUsd *= 1.2;
      totalInr *= 1.2;
      totalWeeks = Math.max(3, Math.round(totalWeeks * 0.65));
    }

    const minUsd = Math.round(totalUsd * 0.9);
    const maxUsd = Math.round(totalUsd * 1.15);
    const minInr = Math.round(totalInr * 0.9);
    const maxInr = Math.round(totalInr * 1.15);

    // Render formatted numbers
    if (currency === 'USD') {
      if (priceMinEl) priceMinEl.textContent = `$${minUsd.toLocaleString()}`;
      if (priceMaxEl) priceMaxEl.textContent = `$${maxUsd.toLocaleString()}`;
    } else {
      if (priceMinEl) priceMinEl.textContent = `₹${minInr.toLocaleString()}`;
      if (priceMaxEl) priceMaxEl.textContent = `₹${maxInr.toLocaleString()}`;
    }

    if (timelineEl) {
      timelineEl.textContent = `${Math.floor(totalWeeks)} - ${Math.ceil(totalWeeks + 2)} Weeks`;
    }

    if (scopeSummaryEl) {
      scopeSummaryEl.innerHTML = `
        <div class="text-xs text-slate-300 font-semibold mb-1">${base.name}</div>
        <div class="text-[11px] text-slate-400">
          ${selectedFeatures.length > 0 ? selectedFeatures.join(' • ') : 'Standard core configuration'}
          ${isExpress ? ' • <span class="text-cyan-400 font-semibold">Priority Sprint Delivery</span>' : ''}
        </div>
      `;
    }

    if (lockScopeBtn) {
      lockScopeBtn.setAttribute('data-scope-info', `${base.name} with ${selectedFeatures.length} addons`);
    }
  }

  projectRadios.forEach(r => r.addEventListener('change', calculateEstimate));
  featureCheckboxes.forEach(cb => cb.addEventListener('change', calculateEstimate));
  speedRadios.forEach(sr => sr.addEventListener('change', calculateEstimate));

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currency = btn.getAttribute('data-currency');
      currencyBtns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-400');
      });
      btn.classList.add('bg-blue-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-400');
      calculateEstimate();
    });
  });

  calculateEstimate();
}

