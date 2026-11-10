# Infotecsys — Modern Technology & SaaS Products Frontend

A production-grade, highly attractive, modern AI & SaaS technology company website for **Infotecsys** ([infotecsys.com](https://infotecsys.com)).

Built with pure **HTML5, CSS3, Vanilla JavaScript (ES6 Modules), and Tailwind CSS**. Zero heavy frameworks, zero runtime bloat, lightning-fast load times, and 100% responsive across Mobile, Tablet, Desktop, and 4K screens.

---

## 🌟 Key Interactive Features

1. **Interactive Connected-Node Particle Canvas:**
   - 60 FPS GPU-accelerated node connections that dynamically interact with mouse movement and touch.
2. **Interactive Software Solution Finder:**
   - Visitors filter by industry (*School*, *Hospital*, *Salon*, *Retail & GST*, *Hostel & PG*, *Custom SaaS*) to instantly discover matched ERP software, KPI impacts, and features.
3. **Interactive Live Product Dashboards:**
   - Test-drive 5 flagship software suites with real clickable tabs, simulated live queues, fee receipts, bed allocations, and invoices:
     - 🎓 **EduNova AI ERP** (School & College Academic Lifecycle)
     - 🏥 **CarePulse HMS** (Hospital OPD/IPD & NABH Billing)
     - ✂️ **GlowSuite POS** (Salon, Spa & Stylist Commission Ledger)
     - 📦 **Vyora Suite** (Multi-Warehouse Inventory & GST Invoicing)
     - 🏢 **NestDash PMS** (PG, Hostel & Tenant KYC Management)
4. **Smart Project Cost & Timeline Estimator:**
   - Visual multi-step calculator with USD ($) and INR (₹) currency toggling, add-on features (AI, Multi-tenant, WhatsApp, Hardware), delivery pace, and 1-click quote locking.
5. **Floating AI Solutions Assistant Widget:**
   - Bottom-right AI chat drawer answering visitor questions regarding products, tech stacks, pricing, and scheduling calls.
6. **Live Consultation & Demo Booking Modal:**
   - Multi-field booking dialog with time-slot selector, product prefill, and instant confirmation.
7. **Bento Grid Services & 5-Step Process Roadmap:**
   - Modern glassmorphic cards with glowing border beams and hover interactions.

---

## 📁 Directory Structure

```
d:\Infotecsys_UI\
├── index.html                  # Main production landing page
├── css/
│   ├── input.css               # Tailwind CSS v4 input directive
│   ├── output.css              # Pre-compiled, minified production CSS (63 KB)
│   └── custom.css              # Custom animations, glassmorphism, mesh glows
├── js/
│   ├── main.js                 # App orchestrator & counter animations
│   ├── particles.js            # Connected-node particle canvas
│   ├── nav.js                  # Sticky glass header, mega-menu, mobile drawer
│   ├── tilt.js                 # 3D interactive perspective tilt
│   ├── solution-finder.js      # Interactive industry solution matcher
│   ├── dashboard-preview.js    # Live product dashboard switchers & actions
│   ├── estimator.js            # Real-time project cost & timeline calculator
│   ├── ai-assistant.js         # Floating chat drawer assistant
│   └── booking-modal.js        # Consultation & demo scheduling modal
├── package.json                # Tailwind CLI build scripts
└── README.md                   # Documentation
```

---

## 🚀 How to Run & Preview

### Option 1: Direct Browser Preview (Instant)
Simply double-click `index.html` or open it with VS Code's **Live Server** extension.

### Option 2: Local HTTP Server
Run with Python or Node:
```bash
# Python
python -m http.server 3000

# or Node / npx
npx serve .
```
Then visit: `http://localhost:3000`

### Option 3: Rebuilding Tailwind CSS
If you modify classes in `index.html` or `js/`:
```bash
npm run build:css
```
Or run the watcher while developing:
```bash
npm run watch:css
```

---

## 🔌 Easy Integration with Laravel / Backend Later
Because this project is built in clean, modular HTML5 and Vanilla JS, you can easily copy:
- `index.html` sections into Laravel Blade templates (`resources/views/welcome.blade.php`, `resources/views/components/...`).
- `css/` and `js/` into Laravel's `public/` or `resources/` directory.

