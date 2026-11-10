/**
 * Floating AI Technical Assistant Widget
 * Interactive chat drawer with predefined smart flows & custom input handling
 */

export function initAIAssistant() {
  const launcher = document.getElementById('ai-assistant-launcher');
  const drawer = document.getElementById('ai-assistant-drawer');
  const closeBtn = document.getElementById('ai-assistant-close');
  const messagesList = document.getElementById('ai-assistant-messages');
  const inputEl = document.getElementById('ai-assistant-input');
  const sendBtn = document.getElementById('ai-assistant-send');
  const chipsContainer = document.getElementById('ai-assistant-chips');

  if (!launcher || !drawer) return;

  function openDrawer() {
    drawer.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
    launcher.classList.add('scale-90', 'opacity-80');
    setTimeout(() => {
      if (inputEl) inputEl.focus();
    }, 200);
  }

  function closeDrawer() {
    drawer.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
    launcher.classList.remove('scale-90', 'opacity-80');
  }

  launcher.addEventListener('click', () => {
    if (drawer.classList.contains('translate-y-full')) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  const smartResponses = [
    {
      keywords: ['product', 'software', 'edunova', 'carepulse', 'glowsuite', 'vyora', 'nestdash', 'erp', 'school', 'hospital', 'salon'],
      response: `We have 5 enterprise-ready software products built for immediate deployment:<br><br>
        1. <strong>EduNova AI ERP</strong>: For Schools & Colleges (fees, attendance, exams, parent app)<br>
        2. <strong>CarePulse HMS</strong>: For Hospitals & Clinics (OPD, IPD, EMR, pharmacy, NABH billing)<br>
        3. <strong>GlowSuite POS</strong>: For Salons & Spas (stylist commission, chair booking, loyalty)<br>
        4. <strong>Vyora Suite</strong>: GST billing, inventory, e-invoicing & multi-warehouse ERP<br>
        5. <strong>NestDash PMS</strong>: PG & Hostel management with automated UPI rent links<br><br>
        Would you like to schedule a 1-on-1 personalized live demonstration?`
    },
    {
      keywords: ['cost', 'price', 'pricing', 'quote', 'budget', 'rate', 'estimate', 'how much'],
      response: `Our project investments are transparent and milestones-based:<br><br>
        • Ready-to-deploy software products start with affordable SaaS licenses and one-time on-premise options.<br>
        • Custom SaaS & Web platforms typically range between $2,800 to $8,500 depending on complexity, multi-tenancy, and AI workflows.<br><br>
        You can use our interactive <strong>Cost Estimator</strong> right above to get an instant tailored calculation!`
    },
    {
      keywords: ['code', 'source code', 'ownership', 'ip', 'intellectual property', 'rights'],
      response: `<strong>Yes, 100%!</strong> When you partner with Infotecsys for custom software engineering, <strong>you own 100% of the intellectual property, design assets, and source code</strong> upon completion. There is zero vendor lock-in.`
    },
    {
      keywords: ['tech', 'stack', 'technology', 'laravel', 'react', 'flutter', 'python', 'cloud'],
      response: `Our engineering stack is modern, scalable, and battle-tested:<br><br>
        • <strong>Backend:</strong> Laravel 11/12, Node.js, Python, PostgreSQL, Redis<br>
        • <strong>Frontend:</strong> React, Next.js, Vue, Modern Tailwind CSS<br>
        • <strong>Mobile:</strong> Flutter (iOS & Android native performance)<br>
        • <strong>Cloud & DevOps:</strong> AWS, DigitalOcean, Docker, Kubernetes, CI/CD pipelines`
    },
    {
      keywords: ['demo', 'meeting', 'call', 'book', 'contact', 'schedule', 'consultation'],
      response: `Let's make it happen! Click below to open our calendar and pick a 30-minute discovery call or product demo with our senior solution architect:`,
      action: { text: "Schedule 30-Min Demo ↗", actionType: "openBooking" }
    }
  ];

  function appendMessage(sender, text, action = null) {
    if (!messagesList) return;
    const msgEl = document.createElement('div');
    msgEl.className = sender === 'user'
      ? 'flex justify-end'
      : 'flex items-start gap-2.5';

    if (sender === 'user') {
      msgEl.innerHTML = `
        <div class="max-w-[85%] p-3 rounded-2xl rounded-tr-sm bg-blue-600 text-white text-xs leading-relaxed">
          ${text}
        </div>
      `;
    } else {
      msgEl.innerHTML = `
        <div class="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-cyan-400 text-xs">
          🤖
        </div>
        <div class="max-w-[85%] space-y-2">
          <div class="p-3 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-200 text-xs leading-relaxed border border-slate-700/60">
            ${text}
          </div>
          ${action ? `
            <button onclick="window.openBookingModal('${action.actionType}')" class="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:brightness-110 shadow-md transition-all">
              ${action.text}
            </button>
          ` : ''}
        </div>
      `;
    }

    messagesList.appendChild(msgEl);
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  function handleUserInput(queryText) {
    const text = queryText.trim();
    if (!text) return;

    appendMessage('user', text);
    if (inputEl) inputEl.value = '';

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'ai-typing-temp';
    typingIndicator.className = 'flex items-center gap-1.5 text-slate-500 text-xs py-1 px-9';
    typingIndicator.innerHTML = `
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
      <span>Solutions assistant is thinking...</span>
    `;
    messagesList.appendChild(typingIndicator);
    messagesList.scrollTop = messagesList.scrollHeight;

    setTimeout(() => {
      const temp = document.getElementById('ai-typing-temp');
      if (temp) temp.remove();

      const lower = text.toLowerCase();
      let matched = smartResponses.find(item => item.keywords.some(k => lower.includes(k)));

      if (!matched) {
        matched = {
          response: `Thank you for sharing your requirement! Our engineering consultants will be delighted to explore this with you in detail. Would you like to schedule a quick 15-minute intro call or leave your email?`,
          action: { text: "Book an Intro Call ↗", actionType: "openBooking" }
        };
      }

      appendMessage('bot', matched.response, matched.action);
    }, 600);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      if (inputEl) handleUserInput(inputEl.value);
    });
  }

  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserInput(inputEl.value);
      }
    });
  }

  // Predefined chip clicks
  if (chipsContainer) {
    chipsContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        handleUserInput(btn.textContent.trim());
      });
    });
  }
}

