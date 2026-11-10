/**
 * Hero Interactive Command Center Switcher
 * Powers the immediate above-the-fold live software showcase
 */

const heroShowcaseData = {
  school: {
    title: "EduNova AI ERP",
    badge: "School & Coaching Suite",
    statusText: "RFID & WhatsApp Synced",
    metric1: { label: "Active Students", value: "2,840", note: "+14% Enrollment" },
    metric2: { label: "Term Fees Collected", value: "$64,250", note: "92% On-Time" },
    metric3: { label: "Attendance", value: "96.8%", note: "2,749 Present" },
    activeFeature: "Automated WhatsApp Fee Receipts & Defaulter Schedules",
    chartColor: "#38bdf8",
    chartPoints: "M0,70 Q60,50 120,40 T240,20 T360,5 L360,90 L0,90 Z"
  },
  hospital: {
    title: "CarePulse Health HMS",
    badge: "Hospital & Clinic Suite",
    statusText: "NABH Audit Ready",
    metric1: { label: "Bed Occupancy", value: "176 / 200", note: "88% Utilization" },
    metric2: { label: "OPD Patients Today", value: "142", note: "18 in Queue" },
    metric3: { label: "Cashless Claims", value: "$32,800", note: "100% Pre-Auth" },
    activeFeature: "Electronic Medical Records (EMR) & Digital Doctor Prescription Pads",
    chartColor: "#10b981",
    chartPoints: "M0,60 Q60,40 120,55 T240,15 T360,8 L360,90 L0,90 Z"
  },
  salon: {
    title: "GlowSuite Salon POS",
    badge: "Salon & Spa Suite",
    statusText: "12 Chairs Active",
    metric1: { label: "Today's Bookings", value: "42 Slots", note: "95% Booked" },
    metric2: { label: "Gross Billing", value: "$4,850", note: "+24% vs Target" },
    metric3: { label: "Stylist Payouts", value: "$1,210", note: "Commission Auto-calc" },
    activeFeature: "Live Stylist Station Scheduler & VIP Membership Wallet",
    chartColor: "#ec4899",
    chartPoints: "M0,80 Q60,65 120,35 T240,25 T360,10 L360,90 L0,90 Z"
  },
  retail: {
    title: "Vyora Suite (GST ERP)",
    badge: "GST & Warehouse ERP",
    statusText: "NIC Portal Live",
    metric1: { label: "Monthly Sales", value: "$148,920", note: "↑ 22% MoM" },
    metric2: { label: "E-Way Bills IRN", value: "482 Signed", note: "0 Reconcile Errors" },
    metric3: { label: "Stock Ledger", value: "18k SKUs", note: "3 Warehouses" },
    activeFeature: "One-Click E-Way Bill Generation & Multi-Warehouse Stock Transfer",
    chartColor: "#06b6d4",
    chartPoints: "M0,75 Q60,55 120,45 T240,18 T360,4 L360,90 L0,90 Z"
  },
  hostel: {
    title: "NestDash PG & Hostel PMS",
    badge: "Co-Living & Hostel PMS",
    statusText: "303 / 320 Beds",
    metric1: { label: "Live Occupancy", value: "94.6%", note: "17 Beds Vacant" },
    metric2: { label: "Rent Collected", value: "$36,400", note: "Automated UPI" },
    metric3: { label: "Digital KYC", value: "100%", note: "Police Verified" },
    activeFeature: "Visual Interactive Bed Matrix & WhatsApp Rent Reminder Links",
    chartColor: "#8b5cf6",
    chartPoints: "M0,65 Q60,45 120,30 T240,22 T360,6 L360,90 L0,90 Z"
  }
};

export function initHeroSwitcher() {
  const container = document.getElementById('hero-quick-pills');
  if (!container) return;

  const pillButtons = container.querySelectorAll('[data-hero-pill]');
  const titleEl = document.getElementById('hero-mock-title');
  const badgeEl = document.getElementById('hero-mock-badge');
  const statusEl = document.getElementById('hero-mock-status');
  const m1Label = document.getElementById('hero-mock-m1-label');
  const m1Val = document.getElementById('hero-mock-m1-val');
  const m1Note = document.getElementById('hero-mock-m1-note');
  const m2Label = document.getElementById('hero-mock-m2-label');
  const m2Val = document.getElementById('hero-mock-m2-val');
  const m2Note = document.getElementById('hero-mock-m2-note');
  const m3Label = document.getElementById('hero-mock-m3-label');
  const m3Val = document.getElementById('hero-mock-m3-val');
  const m3Note = document.getElementById('hero-mock-m3-note');
  const featureEl = document.getElementById('hero-mock-feature');
  const chartPath = document.getElementById('hero-chart-path');
  const chartFill = document.getElementById('hero-chart-fill');

  function updateHeroMockup(key) {
    const data = heroShowcaseData[key] || heroShowcaseData.school;

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (statusEl) statusEl.textContent = data.statusText;

    if (m1Label) m1Label.textContent = data.metric1.label;
    if (m1Val) m1Val.textContent = data.metric1.value;
    if (m1Note) m1Note.textContent = data.metric1.note;

    if (m2Label) m2Label.textContent = data.metric2.label;
    if (m2Val) m2Val.textContent = data.metric2.value;
    if (m2Note) m2Note.textContent = data.metric2.note;

    if (m3Label) m3Label.textContent = data.metric3.label;
    if (m3Val) m3Val.textContent = data.metric3.value;
    if (m3Note) m3Note.textContent = data.metric3.note;

    if (featureEl) featureEl.textContent = data.activeFeature;

    if (chartPath) {
      chartPath.setAttribute('stroke', data.chartColor);
      chartPath.setAttribute('d', data.chartPoints);
    }
    if (chartFill) {
      chartFill.setAttribute('d', data.chartPoints);
    }
  }

  pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-hero-pill');
      pillButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'border-blue-400', 'shadow-lg');
        b.classList.add('bg-white/80', 'dark:bg-slate-900/80', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-800');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'border-blue-400', 'shadow-lg');
      btn.classList.remove('bg-white/80', 'dark:bg-slate-900/80', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-800');
      updateHeroMockup(key);
    });

    btn.addEventListener('mouseenter', () => {
      const key = btn.getAttribute('data-hero-pill');
      updateHeroMockup(key);
    });
  });

  // Default selection
  updateHeroMockup('school');
}

