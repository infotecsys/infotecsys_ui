/**
 * Interactive Tech Blog & News Hub System
 * Category filtering, rich article cards & in-page interactive modal reader
 */

export const blogArticles = [
  {
    id: "edunova-architecture-scale",
    category: "product",
    categoryLabel: "Product Release",
    categoryColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    readTime: "5 min read",
    date: "March 2026",
    title: "How We Architected EduNova AI ERP to Process 100,000+ Student Records with Zero Latency",
    excerpt: "A deep dive into our multi-tenant database partitioning, Redis caching layers, and asynchronous WhatsApp queue architecture that powers modern education campuses.",
    coverGradient: "from-blue-600 via-indigo-600 to-cyan-500",
    author: {
      name: "Infotecsys Core Engineering",
      role: "Distributed Systems Team",
      avatar: "IE"
    },
    content: `
      <p class="text-base text-slate-300 leading-relaxed">
        When managing educational institutions with thousands of daily attendance punches, simultaneous fee payment attempts, and continuous parent inquiries, traditional single-database architectures crumble under peak loads.
      </p>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">1. Multi-Tenant Database Isolation</h4>
      <p class="text-sm text-slate-300 leading-relaxed">
        Rather than pooling all educational institutions into a single monolithic database table, EduNova deploys a dynamic schema-partitioned architecture. Every school or college branch receives its own isolated database schema. This guarantees 100% data privacy and prevents noisy-neighbor query latency.
      </p>
      <div class="my-5 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300">
        // Laravel 11 Multi-Tenant TenantResolver<br>
        TenantManager::resolveFromSubdomain($request->getHost())<br>
        &nbsp;&nbsp;->connectDatabasePool()<br>
        &nbsp;&nbsp;->warmRedisCache(['active_terms', 'fee_structures']);
      </div>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">2. Asynchronous WhatsApp Push Queue</h4>
      <p class="text-sm text-slate-300 leading-relaxed">
        When school morning RFID attendance completes, over 2,500 parents need instantaneous notifications within 3 minutes. By leveraging Redis pub/sub queues and horizontal worker pods, EduNova dispatches personalized WhatsApp messages with 99.98% delivery rate without bogging down web server response times.
      </p>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">Key Takeaways for School Leaders</h4>
      <ul class="list-disc list-inside space-y-2 text-sm text-slate-300">
        <li>Zero slowdowns during peak fee collection and admission periods.</li>
        <li>100% compliant with student privacy and local education board mandates.</li>
        <li>Dedicated parent mobile applications with instantaneous push notifications.</li>
      </ul>
    `
  },
  {
    id: "death-of-generic-saas-code-ownership",
    category: "insights",
    categoryLabel: "Industry Insights",
    categoryColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    readTime: "4 min read",
    date: "February 2026",
    title: "The Death of Generic SaaS: Why Modern Enterprises Demand 100% Source Code Ownership",
    excerpt: "Why forward-thinking founders and business leaders are abandoning rigid subscription lock-in to own their proprietary software assets outright.",
    coverGradient: "from-emerald-600 via-teal-600 to-cyan-500",
    author: {
      name: "Infotecsys Strategy Lead",
      role: "Enterprise Advisory",
      avatar: "IS"
    },
    content: `
      <p class="text-base text-slate-300 leading-relaxed">
        For the past decade, businesses were told to rent everything. But as subscription fees surge by 20% annually and generic platforms refuse to support custom business rules, enterprise leaders are realizing that renting core business software is a strategic vulnerability.
      </p>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">The Hidden Tax of Off-The-Shelf SaaS</h4>
      <p class="text-sm text-slate-300 leading-relaxed">
        When you run on generic SaaS platforms, your workflows are dictated by what their product managers think is best for everyone. You cannot build custom pricing algorithms, unique loyalty tiers, or automated hardware integrations without hitting rigid API rate limits or prohibitive enterprise tiers.
      </p>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">The Infotecsys Ownership Model</h4>
      <p class="text-sm text-slate-300 leading-relaxed">
        When you build with Infotecsys, you receive complete intellectual property rights, unrestricted Git source code access, and database schemas. You can host on your own cloud (AWS, Azure, DigitalOcean), scale without per-user penalty fees, and even commercialize the platform into your own SaaS product.
      </p>
    `
  },
  {
    id: "whatsapp-cloud-api-laravel-billing",
    category: "engineering",
    categoryLabel: "AI & Engineering",
    categoryColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    readTime: "6 min read",
    date: "February 2026",
    title: "Integrating Meta's Official WhatsApp Cloud API with Laravel 11 for Automated GST & Fee Billing",
    excerpt: "Technical breakdown of webhook verification, signed media uploads for invoice PDFs, and two-way interactive message buttons.",
    coverGradient: "from-cyan-600 via-blue-600 to-indigo-600",
    author: {
      name: "Solutions Architecture Team",
      role: "Backend Engineering",
      avatar: "SA"
    },
    content: `
      <p class="text-base text-slate-300 leading-relaxed">
        Email open rates for invoices hover below 18%. WhatsApp messages, in contrast, boast open rates exceeding 94% within 15 minutes of receipt. In this technical walkthrough, we outline how our engineering team connects Laravel 11 backend microservices directly with Meta's Graph API.
      </p>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">Webhook Security & Signature Verification</h4>
      <p class="text-sm text-slate-300 leading-relaxed">
        To prevent spoofing and unauthorized webhook payloads, incoming webhook events from Meta are validated against HMAC SHA-256 signatures before being dispatched to asynchronous queues.
      </p>
      <div class="my-5 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300">
        $expectedSignature = hash_hmac('sha256', $rawPayload, config('whatsapp.app_secret'));<br>
        if (!hash_equals($incomingSignature, "sha256=" . $expectedSignature)) {<br>
        &nbsp;&nbsp;abort(403, 'Unauthorized webhook signature');<br>
        }
      </div>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">Interactive Two-Way Action Buttons</h4>
      <p class="text-sm text-slate-300 leading-relaxed">
        Rather than just sending a plain text PDF link, our Vyora and EduNova suites send dynamic interactive buttons: "Pay via UPI", "Download Signed Tax Invoice", or "Contact Accounts Desk". Payments update the accounting ledger instantly.
      </p>
    `
  },
  {
    id: "carepulse-hospital-discharge-speed",
    category: "casestudy",
    categoryLabel: "Case Study",
    categoryColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    readTime: "4 min read",
    date: "January 2026",
    title: "Next-Gen Hospital Management: How CarePulse Reduced Patient Discharge Times by 65%",
    excerpt: "How automated pharmacy clearance, digital pathology integration, and cashless TPA pre-authorization transformed patient throughput.",
    coverGradient: "from-pink-600 via-rose-600 to-violet-600",
    author: {
      name: "HealthTech Engineering Lead",
      role: "Clinical Systems",
      avatar: "HE"
    },
    content: `
      <p class="text-base text-slate-300 leading-relaxed">
        In most private hospitals, discharging an admitted IPD patient takes between 4 to 6 hours due to physical paper shuttling between pharmacy, nursing stations, radiology, and the insurance desk.
      </p>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">The Single-Click Digital Discharge Pipeline</h4>
      <p class="text-sm text-slate-300 leading-relaxed">
        With CarePulse HMS, the attending physician approves the discharge summary on their tablet. Immediately, automated webhooks query the pharmacy for unreturned medicine, audit diagnostic lab clearances, and assemble the final NABH-compliant itemized ledger within 45 seconds.
      </p>
      <h4 class="text-xl font-bold font-heading text-white mt-6 mb-3">Measurable Clinical Impact</h4>
      <ul class="list-disc list-inside space-y-2 text-sm text-slate-300">
        <li>Average discharge duration reduced from 4.8 hours to 45 minutes.</li>
        <li>Bed turnover velocity improved by 32%, allowing more acute admissions.</li>
        <li>100% elimination of unbilled consumables and pharmacy dispensing leakage.</li>
      </ul>
    `
  }
];

export function initBlogSystem() {
  const container = document.getElementById('blog-section');
  if (!container) return;

  const filterBtns = container.querySelectorAll('[data-blog-filter]');
  const articlesGrid = document.getElementById('blog-articles-grid');
  const modal = document.getElementById('article-modal');
  const modalBackdrop = document.getElementById('article-modal-backdrop');
  const modalCloseBtn = document.getElementById('close-article-modal');

  const modalTitle = document.getElementById('modal-article-title');
  const modalCategory = document.getElementById('modal-article-category');
  const modalReadTime = document.getElementById('modal-article-readtime');
  const modalDate = document.getElementById('modal-article-date');
  const modalAuthor = document.getElementById('modal-article-author');
  const modalRole = document.getElementById('modal-article-role');
  const modalContent = document.getElementById('modal-article-content');

  function renderArticles(filter = 'all') {
    if (!articlesGrid) return;

    const filtered = filter === 'all'
      ? blogArticles
      : blogArticles.filter(a => a.category === filter);

    articlesGrid.innerHTML = filtered.map(a => `
      <article class="rfc-card rounded-2xl overflow-hidden border shadow-xl flex flex-col justify-between group transition-all duration-300">
        <!-- Top RFC Identifier Bar -->
        <div class="rfc-header px-4 py-2.5 border-b flex items-center justify-between gap-3 text-xs font-mono select-none">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
            <span class="rfc-badge px-2 py-0.5 rounded text-[10px] font-bold">
              ${a.category === 'product' ? 'RFC-104 // ARCHITECTURE' : a.category === 'insights' ? 'RFC-105 // WHITE PAPER' : a.category === 'engineering' ? 'RFC-106 // INTEGRATION' : 'RFC-107 // CLINICAL SPEC'}
            </span>
          </div>
          <div class="flex items-center gap-2 text-[10px] opacity-80">
            <span>⏱ ${a.readTime}</span>
          </div>
        </div>

        <!-- Technical Dossier Body -->
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4 rfc-body">
          <div>
            <!-- Volume & Date Metadata -->
            <div class="flex items-center justify-between text-[10px] font-mono rfc-meta mb-2.5">
              <span class="uppercase tracking-wider font-semibold opacity-75">VOL. 4 // ISSUE #2</span>
              <span class="opacity-75">${a.date}</span>
            </div>

            <!-- Title -->
            <h3 class="rfc-title text-base sm:text-lg font-bold font-heading text-white group-hover:text-cyan-400 transition-colors leading-snug">
              ${a.title}
            </h3>

            <!-- Abstract -->
            <p class="rfc-abstract text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
              <span class="font-mono font-bold text-cyan-400 text-[11px]">[ABSTRACT]: </span>${a.excerpt}
            </p>

            <!-- Technical Hashtags -->
            <div class="flex flex-wrap gap-1.5 mt-4 font-mono text-[10px]">
              ${a.category === 'product' ? '<span class="rfc-tag-chip px-2 py-0.5 rounded border">#multi-tenant</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#redis-cluster</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#whatsapp-queue</span>' : 
                a.category === 'insights' ? '<span class="rfc-tag-chip px-2 py-0.5 rounded border">#100%-source-code</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#no-vendor-lockin</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#ip-ownership</span>' : 
                a.category === 'engineering' ? '<span class="rfc-tag-chip px-2 py-0.5 rounded border">#laravel-11</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#meta-webhook</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#pdf-invoicing</span>' : 
                '<span class="rfc-tag-chip px-2 py-0.5 rounded border">#nabh-ready</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#single-click-discharge</span><span class="rfc-tag-chip px-2 py-0.5 rounded border">#emr-timeline</span>'}
            </div>
          </div>

          <!-- Footer: Author & Read CTA -->
          <div class="rfc-footer pt-3.5 border-t flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="rfc-avatar w-6 h-6 rounded-full flex items-center justify-center font-bold font-mono text-[9px] shadow-sm">
                ${a.author.avatar}
              </span>
              <span class="rfc-author-name text-[11px] font-mono opacity-80 truncate max-w-[140px] sm:max-w-none">
                ${a.author.name}
              </span>
            </div>
            <button onclick="window.openArticleModal('${a.id}')" class="rfc-cta text-xs font-bold text-cyan-400 hover:text-white flex items-center gap-1.5 transition-colors font-mono">
              <span>Read RFC ↗</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Filter tab interactions
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-blog-filter');
      filterBtns.forEach(b => {
        b.classList.remove('tab-active');
        b.classList.add('tab-inactive');
      });
      btn.classList.add('tab-active');
      btn.classList.remove('tab-inactive');
      renderArticles(cat);
    });
  });

  // Modal open function
  window.openArticleModal = function(articleId) {
    const article = blogArticles.find(a => a.id === articleId);
    if (!article || !modal || !modalBackdrop) return;

    if (modalTitle) modalTitle.textContent = article.title;
    if (modalCategory) {
      modalCategory.textContent = article.categoryLabel;
      modalCategory.className = `text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${article.categoryColor}`;
    }
    if (modalReadTime) modalReadTime.textContent = article.readTime;
    if (modalDate) modalDate.textContent = article.date;
    if (modalAuthor) modalAuthor.textContent = article.author.name;
    if (modalRole) modalRole.textContent = article.author.role;
    if (modalContent) modalContent.innerHTML = article.content;

    modal.classList.remove('hidden', 'opacity-0', 'scale-95');
    modalBackdrop.classList.remove('hidden', 'opacity-0');
    document.body.style.overflow = 'hidden';
  };

  window.closeArticleModal = function() {
    if (!modal || !modalBackdrop) return;
    modal.classList.add('opacity-0', 'scale-95');
    modalBackdrop.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modalBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }, 150);
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', window.closeArticleModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', window.closeArticleModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      window.closeArticleModal();
    }
  });

  // Initial render
  renderArticles('all');
}

