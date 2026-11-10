/**
 * Interactive Software Solution Finder Engine
 * Matches visitor industry with tailored software products, KPI metrics & feature breakdown
 */

const solutionsData = {
  school: {
    title: "EduNova AI ERP",
    badge: "99.4% Match for Schools & Coaching Institutes",
    tagline: "Comprehensive Academic, Administrative & Student Lifecycle Management",
    description: "An end-to-end cloud ERP designed for schools, colleges, and coaching chains. Automates the entire academic calendar from paperless admissions and RFID attendance to multi-branch fees and automated parent WhatsApp notifications.",
    features: [
      { title: "Smart Fee & Automated Invoicing", desc: "Online gateway integration, automated receipt generation, installment schedules & defaulter alerts." },
      { title: "RFID & Biometric Attendance", desc: "Real-time attendance tracking with instant parent SMS/WhatsApp push notifications." },
      { title: "Examination & Report Cards", desc: "CBSE/ICSE compliant automated grade calculation, report card designer & progress analytics." },
      { title: "Dedicated Parent & Teacher Portal", desc: "Native iOS/Android apps for homework submissions, circulars, and teacher-parent messaging." }
    ],
    kpis: [
      { value: "85%", label: "Reduction in Admin Workload", progress: "85%", icon: "⚡" },
      { value: "99.2%", label: "On-time Fee Recovery", progress: "99%", icon: "💰" },
      { value: "100%", label: "Paperless Campus Operations", progress: "100%", icon: "🌱" }
    ],
    demoProduct: "EduNova ERP",
    dashboardTabKey: "school"
  },
  hospital: {
    title: "CarePulse Health HMS",
    badge: "98.9% Match for Hospitals & Multi-Specialty Clinics",
    tagline: "Integrated Clinical, IPD/OPD, Diagnostic & Revenue Cycle Architecture",
    description: "Enterprise-grade Hospital Management System that streamlines patient journeys from appointment scheduling to pharmacy dispatch, pathology reporting, bed occupancy management, and cashless insurance claims.",
    features: [
      { title: "OPD/IPD Electronic Medical Records (EMR)", desc: "Quick doctor prescription pads, patient history timeline, ICD-10 coding & digital consents." },
      { title: "Bed & OT Management System", desc: "Interactive bed occupancy matrix, ICU monitoring queue, and operating theatre scheduling." },
      { title: "Integrated Pathology & Radiology", desc: "Automated lab equipment interfacing, barcode sample tracking & instant WhatsApp test reports." },
      { title: "NABH-Compliant Billing & TPA", desc: "Multi-tier corporate tariff masters, cashless insurance claims processing & pharmacy POS." }
    ],
    kpis: [
      { value: "65%", label: "Shorter Patient Wait Times", progress: "65%", icon: "⏱" },
      { value: "100%", label: "NABH Audit Readiness", progress: "100%", icon: "🏥" },
      { value: "3.5x", label: "Faster Discharge Summaries", progress: "90%", icon: "🚀" }
    ],
    demoProduct: "CarePulse HMS",
    dashboardTabKey: "hospital"
  },
  salon: {
    title: "GlowSuite Salon POS & CRM",
    badge: "99.1% Match for Salons, Spas & Aesthetic Clinics",
    tagline: "Appointment Scheduling, Stylist Commission Ledger & Client Retention Engine",
    description: "Modern cloud POS engineered specifically for luxury salons, wellness spas, and beauty chains. Handles calendar booking, stylist chair management, commission payouts, inventory consumption, and personalized client WhatsApp marketing.",
    features: [
      { title: "Smart Calendar & Walk-in Queue", desc: "Drag-and-drop stylist appointment book with automated client SMS reminders & booking links." },
      { title: "Automated Stylist Commission Engine", desc: "Multi-slab service and retail product commission calculation with instant daily payroll logs." },
      { title: "Client Retention & VIP Memberships", desc: "Service packages, wallet balances, reward points, and personalized birthday/anniversary offers." },
      { title: "Backbar Inventory & Stock Tracking", desc: "Track exact bottle and milliliter product usage during treatments to prevent shrinkage." }
    ],
    kpis: [
      { value: "40%", label: "Increase in Repeat Bookings", progress: "40%", icon: "📈" },
      { value: "0", label: "No-Show Booking Losses", progress: "95%", icon: "🎯" },
      { value: "100%", label: "Commission Calculation Accuracy", progress: "100%", icon: "✂️" }
    ],
    demoProduct: "GlowSuite Salon",
    dashboardTabKey: "salon"
  },
  retail: {
    title: "Vyora Suite (GST & Inventory ERP)",
    badge: "99.6% Match for Traders, Wholesalers & Manufacturers",
    tagline: "Multi-Warehouse Inventory, Fast POS, E-Way Bill & E-Invoicing Cloud ERP",
    description: "Robust enterprise billing and warehouse management software designed for Indian SMEs and distribution networks. Direct GSTN integration for instant GSTR-1, GSTR-3B filing, barcode scanning, purchase orders, and multi-branch accounting.",
    features: [
      { title: "One-Click E-Way Bill & E-Invoicing", desc: "Direct GST portal API integration for instantaneous IRN generation and compliant tax invoices." },
      { title: "Multi-Warehouse Stock Ledger", desc: "Batch tracking, expiry management, serialized inventory, and inter-branch stock transfers." },
      { title: "B2B Credit & Ledger Management", desc: "Automated payment reminders via WhatsApp, credit limit enforcement, and interest accounting." },
      { title: "Superfast Retail & Wholesale POS", desc: "Keyboard-first thermal printing, barcode scanning, item variants, and offline-ready billing." }
    ],
    kpis: [
      { value: "99.9%", label: "GST Compliance & IRN Accuracy", progress: "99%", icon: "📑" },
      { value: "4x", label: "Faster Counter POS Checkout", progress: "88%", icon: "⚡" },
      { value: "35%", label: "Reduction in Expiry & Stock Loss", progress: "35%", icon: "📦" }
    ],
    demoProduct: "Vyora ERP",
    dashboardTabKey: "retail"
  },
  hostel: {
    title: "NestDash PG & Hostel PMS",
    badge: "99.2% Match for Co-Living, Hostels & Student PGs",
    tagline: "Automated Rent Collection, Digital Tenant KYC & Room Allocation Engine",
    description: "All-in-one management suite for PG operators, student hostel chains, and co-living companies. Manage bed allocations, automated monthly rent invoicing, utility sub-metering, tenant digital police verification, and gate pass management.",
    features: [
      { title: "Visual Bed Matrix & Room Allocation", desc: "Real-time floor map showing vacant, occupied, and reserved beds with customized pricing." },
      { title: "Automated UPI Rent Links", desc: "Automatic WhatsApp payment links on the 1st of every month with auto-reconciliation." },
      { title: "Digital KYC & Police Verification", desc: "Tenant Aadhaar verification, digital agreements, emergency contacts, and move-in logs." },
      { title: "Tenant Mobile App & Complaint Desk", desc: "Tenants can lodge maintenance tickets, food attendance, Wi-Fi requests, and view receipts." }
    ],
    kpis: [
      { value: "98%", label: "On-Time Monthly Rent Recovery", progress: "98%", icon: "💳" },
      { value: "100%", label: "Digital KYC Police Records", progress: "100%", icon: "🪪" },
      { value: "0", label: "Sub-meter & Electricity Disputes", progress: "95%", icon: "⚡" }
    ],
    demoProduct: "NestDash PG",
    dashboardTabKey: "hostel"
  },
  custom: {
    title: "Custom SaaS & Enterprise Engineering",
    badge: "100% Tailored for Disruptive Tech Startups & Enterprises",
    tagline: "From Architectural Blueprint to Scalable Production SaaS Platforms",
    description: "Do you have a unique business model or proprietary workflow? Infotecsys crafts custom software solutions, multi-tenant SaaS platforms, modern mobile applications, and AI integrations with dedicated engineering teams and full source code ownership.",
    features: [
      { title: "Cloud-Native Multi-Tenant Architecture", desc: "Built with microservices, Docker, Kubernetes, AWS/Azure for infinite horizontal scaling." },
      { title: "AI & LLM Intelligent Automation", desc: "Custom fine-tuned AI agents, document processing models, and intelligent predictive algorithms." },
      { title: "Cross-Platform Web & Mobile Apps", desc: "High-performance React/Vue web applications paired with native-feel Flutter/React Native mobile apps." },
      { title: "100% IP & Source Code Ownership", desc: "Enterprise agreements with complete source code handover, zero vendor lock-in, and full documentation." }
    ],
    kpis: [
      { value: "100%", label: "Source Code & IP Handover", progress: "100%", icon: "🔒" },
      { value: "99.98%", label: "Guaranteed SLA Platform Uptime", progress: "99%", icon: "☁️" },
      { value: "4-8 Wks", label: "Fast-Track Production MVP Launch", progress: "80%", icon: "🚀" }
    ],
    demoProduct: "Custom SaaS Engineering",
    dashboardTabKey: "custom"
  }
};

export function initSolutionFinder() {
  const container = document.getElementById('solution-finder-section');
  if (!container) return;

  const buttons = container.querySelectorAll('[data-industry]');
  const titleEl = document.getElementById('finder-title');
  const badgeEl = document.getElementById('finder-badge');
  const taglineEl = document.getElementById('finder-tagline');
  const descEl = document.getElementById('finder-desc');
  const featuresContainer = document.getElementById('finder-features');
  const kpisContainer = document.getElementById('finder-kpis');
  const demoBtn = document.getElementById('finder-demo-btn');
  const jumpLiveBtn = document.getElementById('finder-jump-live-btn');
  const cardContainer = document.getElementById('finder-card-content');

  function renderSolution(industryKey) {
    const data = solutionsData[industryKey] || solutionsData.school;

    // Smooth fade effect
    if (cardContainer) {
      cardContainer.classList.add('opacity-0', 'scale-[0.98]');
    }

    setTimeout(() => {
      if (titleEl) titleEl.textContent = data.title;
      if (badgeEl) badgeEl.textContent = data.badge;
      if (taglineEl) taglineEl.textContent = data.tagline;
      if (descEl) descEl.textContent = data.description;

      if (featuresContainer) {
        featuresContainer.innerHTML = data.features.map(f => `
          <div class="flex items-start gap-3.5 p-4 rounded-2xl bg-white/85 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/40 transition-all hover:bg-white dark:hover:bg-slate-900 group shadow-sm shadow-slate-900/5">
            <div class="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <h5 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">${f.title}</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">${f.desc}</p>
            </div>
          </div>
        `).join('');
      }

      if (kpisContainer) {
        kpisContainer.innerHTML = data.kpis.map(k => `
          <div class="atm-kpi-card relative overflow-hidden rounded-2xl p-5 flex flex-col justify-between group cursor-default transition-all duration-300">
            <!-- Gloss Sweeping Sheen -->
            <div class="atm-gloss-overlay"></div>
            
            <!-- Security Watermark Background Pattern -->
            <div class="atm-card-watermark absolute inset-0 pointer-events-none"></div>

            <!-- Top Row: EMV Microchip + NFC Contactless Wave + Verified Impact Badge -->
            <div class="flex items-center justify-between mb-4 relative z-10">
              <div class="flex items-center gap-2.5">
                <!-- Golden / Chrome EMV Smart Chip -->
                <div class="atm-emv-chip" title="EMV Smart Security Chip">
                  <div class="atm-chip-inner">
                    <div class="atm-chip-core"></div>
                  </div>
                </div>
                <!-- Contactless NFC Wave Symbol -->
                <div class="atm-nfc-icon" title="Contactless Sync">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <path d="M7 16a5 5 0 0 1 0-8" />
                    <path d="M11 19a9 9 0 0 0 0-14" />
                    <path d="M15 22a13 13 0 0 0 0-20" />
                  </svg>
                </div>
              </div>
              
              <!-- Verified Impact Hologram Pill -->
              <div class="atm-badge flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase border shadow-sm">
                <span class="atm-badge-dot w-1.5 h-1.5 rounded-full"></span>
                <span>Verified Impact</span>
              </div>
            </div>

            <!-- Card Center: High-Impact Embossed Metric & Label -->
            <div class="relative z-10 my-1 space-y-1">
              <div class="atm-metric-val font-heading font-black tracking-tight text-3xl sm:text-4xl flex items-baseline gap-1">
                ${k.value}
              </div>
              <div class="atm-metric-label font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest leading-tight">
                ${k.label}
              </div>
            </div>

            <!-- Card Bottom: Security Thread & Progress Bar -->
            <div class="relative z-10 mt-4 pt-3.5 border-t atm-security-thread">
              <div class="flex items-center justify-between text-[9px] font-mono font-semibold tracking-wider uppercase mb-1.5 atm-thread-meta">
                <span class="flex items-center gap-1.5">
                  <span class="atm-thread-indicator"></span>
                  SECURITY THREAD
                </span>
                <span class="atm-thread-percentage font-bold">${k.progress} PROVEN</span>
              </div>
              <div class="w-full h-1.5 rounded-full overflow-hidden atm-track-bg">
                <div class="atm-track-fill h-full rounded-full transition-all duration-700 ease-out" style="width: ${k.progress}"></div>
              </div>
            </div>
          </div>
        `).join('');
      }

      if (demoBtn) {
        demoBtn.setAttribute('data-prefill-product', data.demoProduct);
      }

      if (jumpLiveBtn) {
        jumpLiveBtn.setAttribute('data-target-tab', data.dashboardTabKey);
        jumpLiveBtn.onclick = () => {
          const tabBtn = document.querySelector(`[data-product-tab="${data.dashboardTabKey}"]`);
          if (tabBtn) tabBtn.click();
          const targetSection = document.getElementById('products-section');
          if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
        };
      }

      if (cardContainer) {
        cardContainer.classList.remove('opacity-0', 'scale-[0.98]');
      }

      const queryDisplay = document.getElementById('raycast-query-display');
      if (queryDisplay) {
        queryDisplay.textContent = industryKey;
      }
    }, 150);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const industry = btn.getAttribute('data-industry');
      buttons.forEach(b => {
        b.classList.remove('tab-active');
        b.classList.add('tab-inactive');
      });
      btn.classList.remove('tab-inactive');
      btn.classList.add('tab-active');
      renderSolution(industry);
    });
  });

  // Hotkey listener for 1-6 (Command Palette experience)
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
    const num = parseInt(e.key);
    if (num >= 1 && num <= 6) {
      const industries = ['school', 'hospital', 'salon', 'retail', 'hostel', 'custom'];
      const targetIndustry = industries[num - 1];
      const targetBtn = document.querySelector(`[data-industry="${targetIndustry}"]`);
      if (targetBtn) targetBtn.click();
    }
  });

  // Initial render
  renderSolution('school');
}
