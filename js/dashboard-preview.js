/**
 * Interactive Live Software Product Dashboards Switcher
 * Ultra-realistic, clickable, production-grade previews of Infotecsys flagship products
 */

const productDashboards = {
  school: {
    slideNum: "01",
    speakerNotes: "Deployed across 150+ campuses. 100,000+ student records managed with zero-latency WhatsApp fee notifications, RFID gate attendance, and CBSE examination report generation.",
    name: "EduNova AI ERP",
    category: "Academic & Campus ERP",
    tagline: "Centralized School, College & Coaching ERP with Automated WhatsApp Integration",
    logoSvg: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6"/></svg>`,
    logoBgClass: "from-blue-600/30 to-cyan-500/15 border-blue-500/40 text-cyan-400 shadow-blue-950/60",
    stats: [
      { label: "Active Students", value: "2,840", change: "+14% YoY", trend: "up" },
      { label: "Today's Attendance", value: "96.8%", change: "+2.1% avg", trend: "up" },
      { label: "Monthly Fees Collected", value: "$64,250", change: "92% target", trend: "up" },
      { label: "Active Bus Fleet", value: "18 / 18", change: "GPS Live", trend: "up" }
    ],
    htmlContent: `
      <!-- School Dashboard Preview (Full Application Simulation) -->
      <div class="bg-white/90 dark:bg-[#080d1e] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 backdrop-blur-xl">
        
        <!-- App Top Navigation Bar -->
        <div class="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-white">St. Jude International Academy</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">● Cloud Active</span>
              </div>
              <div class="text-[11px] text-slate-400">Academic Year 2025-2026 &bull; CBSE Affiliated &bull; Main Campus</div>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <!-- Search simulation -->
            <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span>Search student, roll # or receipt...</span>
            </div>

            <button onclick="window.triggerSimulatedAction('New Admission Wizard initiated')" class="text-xs px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold transition-all shadow-md hover:scale-105 active:scale-95">
              + New Admission
            </button>
            <button onclick="window.triggerSimulatedAction('WhatsApp fee defaulter broadcast queued: 14 parents')" class="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-colors flex items-center gap-1.5">
              <span>💬</span> WhatsApp Broadcast
            </button>
          </div>
        </div>

        <!-- Main Body: Sidebar + Content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          <!-- Collapsible App Sidebar (2 cols) -->
          <div class="hidden lg:block lg:col-span-2 p-3.5 bg-slate-950/40 border-r border-slate-800/80 space-y-1 text-xs">
            <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 py-1">Main Modules</div>
            <button class="w-full text-left px-2.5 py-2 rounded-xl bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30 flex items-center gap-2">
              <span>📊</span> Overview
            </button>
            <button onclick="window.triggerSimulatedAction('Student Directory loaded (2,840 records)')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>🎓</span> Students (2,840)
            </button>
            <button onclick="window.triggerSimulatedAction('Fee Ledger & Counter opened')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>💰</span> Fee Collections
            </button>
            <button onclick="window.triggerSimulatedAction('Attendance Terminal Synced (RFID Active)')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>⏱</span> RFID Attendance
            </button>
            <button onclick="window.triggerSimulatedAction('Exam Report Card Designer loaded')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>📝</span> Examinations
            </button>
            <button onclick="window.triggerSimulatedAction('GPS Fleet Tracker: 18 Buses on Route')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>🚌</span> GPS Bus Tracker
            </button>
          </div>

          <!-- Dashboard Center Stage (10 cols) -->
          <div class="lg:col-span-10 p-4 sm:p-6 space-y-5">
            
            <!-- 4 Quick Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">Total Enrolled</div>
                <div class="text-2xl font-bold font-heading text-white mt-1">2,840</div>
                <div class="text-[11px] text-emerald-400 font-semibold mt-1">↑ 14% vs last term</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">Today's Attendance</div>
                <div class="text-2xl font-bold font-heading text-emerald-400 mt-1">96.8%</div>
                <div class="text-[11px] text-slate-400 mt-1">2,749 Present &bull; 91 Absent</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">Fees Collected (Month)</div>
                <div class="text-2xl font-bold font-heading text-cyan-400 mt-1">$64,250</div>
                <div class="text-[11px] text-emerald-400 font-semibold mt-1">92% of target reached</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">Parent Portal App</div>
                <div class="text-2xl font-bold font-heading text-violet-400 mt-1">94.2%</div>
                <div class="text-[11px] text-slate-400 mt-1">Active app logins</div>
              </div>
            </div>

            <!-- Visual Chart & Analytics Row -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Fee Collection Trend Chart -->
              <div class="md:col-span-2 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-slate-200 uppercase tracking-wider">Fee Collection Velocity (Last 6 Months)</span>
                  <span class="text-xs text-cyan-400 font-medium">Real-Time Ledger</span>
                </div>
                <!-- SVG Area Chart -->
                <div class="h-32 w-full">
                  <svg class="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="schoolGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4"/>
                        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,90 Q80,70 160,50 T320,30 T500,10 L500,120 L0,120 Z" fill="url(#schoolGrad)" />
                    <path d="M0,90 Q80,70 160,50 T320,30 T500,10" fill="none" stroke="#38bdf8" stroke-width="3" />
                    <!-- Points -->
                    <circle cx="160" cy="50" r="4" fill="#38bdf8" />
                    <circle cx="320" cy="30" r="4" fill="#38bdf8" />
                    <circle cx="500" cy="10" r="4" fill="#60a5fa" />
                  </svg>
                </div>
                <div class="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar (Current)</span>
                </div>
              </div>

              <!-- Quick Action Card -->
              <div class="p-4 rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-900/60 border border-blue-900/40 flex flex-col justify-between">
                <div>
                  <div class="text-xs font-bold text-white flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    Instant Fee Recovery Link
                  </div>
                  <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                    Generate an instant UPI / Net Banking payment link and dispatch it directly to a parent's WhatsApp with 1 click.
                  </p>
                </div>
                <button onclick="window.triggerSimulatedAction('Payment link sent to parent: WhatsApp #+91 98234-XXXXX')" class="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all mt-4">
                  Send WhatsApp Fee Link ↗
                </button>
              </div>
            </div>

            <!-- Student Live Attendance & Fee Roster Table -->
            <div class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/70 dark:bg-slate-900/50">
              <div class="px-4 py-3 bg-slate-100/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-900 dark:text-slate-200">Class 10-A &bull; Live Attendance &amp; Fee Status</span>
                <span class="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono">Synced 2m ago</span>
              </div>

              <!-- Desktop Table View (>= sm: 640px) -->
              <div class="hidden sm:block overflow-x-auto">
                <table class="w-full text-left text-xs min-w-[560px]">
                  <thead class="bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th class="p-3">Roll</th>
                      <th class="p-3">Student</th>
                      <th class="p-3">Punch Time</th>
                      <th class="p-3">Status</th>
                      <th class="p-3">Fee Status</th>
                      <th class="p-3 text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800/60 whitespace-nowrap">
                    <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="p-3 font-mono text-slate-500 dark:text-slate-400">#101</td>
                      <td class="p-3 font-semibold text-slate-900 dark:text-white">Aarav Sharma</td>
                      <td class="p-3 text-slate-600 dark:text-slate-300">08:14 AM (Gate 1)</td>
                      <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">Present</span></td>
                      <td class="p-3"><span class="text-emerald-600 dark:text-emerald-400 font-medium">Paid (Term 2)</span></td>
                      <td class="p-3 text-right">
                        <button onclick="window.triggerSimulatedAction('Receipt #8901 generated for Aarav Sharma')" class="px-2.5 py-1 rounded-lg bg-blue-600/15 dark:bg-blue-600/30 hover:bg-blue-600 text-blue-600 dark:text-cyan-300 hover:text-white transition-colors">
                          View Receipt
                        </button>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="p-3 font-mono text-slate-500 dark:text-slate-400">#102</td>
                      <td class="p-3 font-semibold text-slate-900 dark:text-white">Ananya Deshmukh</td>
                      <td class="p-3 text-slate-600 dark:text-slate-300">08:19 AM (Gate 2)</td>
                      <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">Present</span></td>
                      <td class="p-3"><span class="text-emerald-600 dark:text-emerald-400 font-medium">Paid</span></td>
                      <td class="p-3 text-right">
                        <button onclick="window.triggerSimulatedAction('Receipt #8902 generated for Ananya Deshmukh')" class="px-2.5 py-1 rounded-lg bg-blue-600/15 dark:bg-blue-600/30 hover:bg-blue-600 text-blue-600 dark:text-cyan-300 hover:text-white transition-colors">
                          View Receipt
                        </button>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="p-3 font-mono text-slate-500 dark:text-slate-400">#103</td>
                      <td class="p-3 font-semibold text-slate-900 dark:text-white">Rohan Patel</td>
                      <td class="p-3 text-slate-400">—</td>
                      <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 font-semibold">Absent</span></td>
                      <td class="p-3"><span class="text-amber-600 dark:text-amber-400 font-medium">Due ($450)</span></td>
                      <td class="p-3 text-right">
                        <button onclick="window.triggerSimulatedAction('WhatsApp fee reminder link sent to Rohan\'s Guardian')" class="px-2.5 py-1 rounded-lg bg-amber-500/15 dark:bg-amber-500/20 hover:bg-amber-500 text-amber-600 dark:text-amber-300 hover:text-white transition-colors">
                          Send Reminder
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Mobile Responsive Record Cards (< sm: 640px) -->
              <div class="sm:hidden divide-y divide-slate-200 dark:divide-slate-800/70 p-1">
                <!-- Card 1 -->
                <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">#101</span>
                      <span class="font-bold text-slate-900 dark:text-white text-xs">Aarav Sharma</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">Present</span>
                  </div>
                  <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
                    <span class="flex items-center gap-1 font-mono text-[10px]">🕒 08:14 AM &bull; Gate 1</span>
                    <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Paid (Term 2)</span>
                  </div>
                  <div class="pt-0.5">
                    <button onclick="window.triggerSimulatedAction('Receipt #8901 generated for Aarav Sharma')" class="w-full py-1.5 px-3 rounded-lg bg-blue-600/15 dark:bg-blue-600/25 hover:bg-blue-600 text-blue-600 dark:text-cyan-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                      View Receipt ↗
                    </button>
                  </div>
                </div>

                <!-- Card 2 -->
                <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">#102</span>
                      <span class="font-bold text-slate-900 dark:text-white text-xs">Ananya Deshmukh</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">Present</span>
                  </div>
                  <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
                    <span class="flex items-center gap-1 font-mono text-[10px]">🕒 08:19 AM &bull; Gate 2</span>
                    <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Paid</span>
                  </div>
                  <div class="pt-0.5">
                    <button onclick="window.triggerSimulatedAction('Receipt #8902 generated for Ananya Deshmukh')" class="w-full py-1.5 px-3 rounded-lg bg-blue-600/15 dark:bg-blue-600/25 hover:bg-blue-600 text-blue-600 dark:text-cyan-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                      View Receipt ↗
                    </button>
                  </div>
                </div>

                <!-- Card 3 -->
                <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">#103</span>
                      <span class="font-bold text-slate-900 dark:text-white text-xs">Rohan Patel</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 text-[10px] font-semibold">Absent</span>
                  </div>
                  <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
                    <span class="flex items-center gap-1 font-mono text-[10px] text-slate-400">🕒 — No Gate Punch</span>
                    <span class="text-amber-600 dark:text-amber-400 font-bold">Due ($450)</span>
                  </div>
                  <div class="pt-0.5">
                    <button onclick="window.triggerSimulatedAction('WhatsApp fee reminder link sent to Rohan\'s Guardian')" class="w-full py-1.5 px-3 rounded-lg bg-amber-500/15 dark:bg-amber-500/20 hover:bg-amber-500 text-amber-600 dark:text-amber-300 hover:text-white border border-amber-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                      Send Reminder ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    `
  },
  hospital: {
    slideNum: "02",
    speakerNotes: "NABH audit-compliant digital health platform. Reduced patient discharge turnaround time by 65% with integrated IPD/OPD, e-prescriptions, and cashless TPA insurance authorization.",
    name: "CarePulse Health HMS",
    category: "Hospital & Healthcare Architecture",
    tagline: "NABH-Ready Hospital ERP: OPD, IPD, EMR, Pharmacy & Cashless Insurance Automation",
    logoSvg: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    logoBgClass: "from-emerald-600/30 to-teal-500/15 border-emerald-500/40 text-emerald-400 shadow-emerald-950/60",
    stats: [
      { label: "IPD Occupancy", value: "88%", change: "176/200 beds", trend: "up" },
      { label: "Today's OPD Queue", value: "142", change: "18 in waiting", trend: "neutral" },
      { label: "Surgeries Slated", value: "14", change: "5 Completed", trend: "up" },
      { label: "Cashless Claims", value: "$32,800", change: "100% processed", trend: "up" }
    ],
    htmlContent: `
      <!-- Hospital HMS Dashboard Preview -->
      <div class="bg-white/90 dark:bg-[#080d1e] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 backdrop-blur-xl">
        
        <!-- App Top Navigation Bar -->
        <div class="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-white">CityCare Super-Specialty Hospital</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">NABH Accredited</span>
              </div>
              <div class="text-[11px] text-slate-400">Emergency & Trauma 24/7 &bull; 200 Bed In-Patient Capacity</div>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="window.triggerSimulatedAction('Quick OPD Token #49 generated for Cardiology')" class="text-xs px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold transition-all shadow-md hover:scale-105 active:scale-95">
              + Generate OPD Token
            </button>
            <button onclick="window.triggerSimulatedAction('ICU Bed Allocation Modal opened')" class="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-colors">
              Admit IPD Patient
            </button>
          </div>
        </div>

        <!-- Main Body: Sidebar + Content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          <!-- Collapsible App Sidebar -->
          <div class="hidden lg:block lg:col-span-2 p-3.5 bg-slate-950/40 border-r border-slate-800/80 space-y-1 text-xs">
            <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 py-1">Hospital Clinical</div>
            <button class="w-full text-left px-2.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-300 font-semibold border border-emerald-500/30 flex items-center gap-2">
              <span>🩺</span> OPD Queue
            </button>
            <button onclick="window.triggerSimulatedAction('IPD Bed Matrix loaded (176 Occupied / 200 Beds)')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>🛏</span> Bed Management
            </button>
            <button onclick="window.triggerSimulatedAction('Pharmacy POS Dispenser opened')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>💊</span> Pharmacy POS
            </button>
            <button onclick="window.triggerSimulatedAction('Pathology Lab Equipment Interfacing: 8 Instruments Connected')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>🧪</span> Lab & Pathology
            </button>
            <button onclick="window.triggerSimulatedAction('TPA Cashless Claims Desk: $32,800 Approved')" class="w-full text-left px-2.5 py-2 rounded-xl hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <span>💳</span> TPA Insurance
            </button>
          </div>

          <!-- Dashboard Center Stage -->
          <div class="lg:col-span-10 p-4 sm:p-6 space-y-5">
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">Total Bed Occupancy</div>
                <div class="text-2xl font-bold font-heading text-white mt-1">176 / 200</div>
                <div class="text-[11px] text-emerald-400 font-semibold mt-1">88% (24 Vacant Beds)</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">OPD Registrations Today</div>
                <div class="text-2xl font-bold font-heading text-teal-400 mt-1">142</div>
                <div class="text-[11px] text-slate-400 mt-1">Avg consultation: 8.5 min</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">Emergency Triage</div>
                <div class="text-2xl font-bold font-heading text-rose-400 mt-1">3 Active</div>
                <div class="text-[11px] text-emerald-400 font-semibold mt-1">Immediate doctor assigned</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div class="text-xs text-slate-400">Pharmacy Collections</div>
                <div class="text-2xl font-bold font-heading text-emerald-400 mt-1">$14,290</div>
                <div class="text-[11px] text-slate-400 mt-1">310 Prescriptions filled</div>
              </div>
            </div>

            <!-- Live Patient Queue Table -->
            <div class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/70 dark:bg-slate-900/50">
              <div class="px-4 py-3 bg-slate-100/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-900 dark:text-slate-200">Live OPD Queue &bull; Dr. Vikram Mehra (Senior Cardiologist)</span>
                <span class="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">Token Dispenser Active</span>
              </div>
              
              <!-- Desktop Table View (>= sm: 640px) -->
              <div class="hidden sm:block overflow-x-auto">
                <table class="w-full text-left text-xs min-w-[560px]">
                  <thead class="bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th class="p-3">Token</th>
                      <th class="p-3">Patient Name</th>
                      <th class="p-3">Age/Gender</th>
                      <th class="p-3">Priority</th>
                      <th class="p-3">TPA / Insurance</th>
                      <th class="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800/60 whitespace-nowrap">
                    <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">#CR-12</td>
                      <td class="p-3 font-semibold text-slate-900 dark:text-white">Sunita Verma</td>
                      <td class="p-3 text-slate-600 dark:text-slate-300">54 Y / F</td>
                      <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 font-semibold">Urgent ECG</span></td>
                      <td class="p-3 text-slate-600 dark:text-slate-300">Star Health (Cashless Pre-Auth)</td>
                      <td class="p-3 text-right">
                        <button onclick="window.triggerSimulatedAction('Consultation started with Sunita Verma')" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors">
                          Call Patient In
                        </button>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="p-3 font-mono font-bold text-slate-500 dark:text-slate-300">#CR-13</td>
                      <td class="p-3 font-semibold text-slate-900 dark:text-white">Rajesh Khanna</td>
                      <td class="p-3 text-slate-600 dark:text-slate-300">42 Y / M</td>
                      <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-semibold">Routine Check</span></td>
                      <td class="p-3 text-slate-600 dark:text-slate-300">Self Pay</td>
                      <td class="p-3 text-right">
                        <button onclick="window.triggerSimulatedAction('SMS queue notification dispatched to Rajesh Khanna')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
                          Queue (3m)
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Mobile Responsive Record Cards (< sm: 640px) -->
              <div class="sm:hidden divide-y divide-slate-200 dark:divide-slate-800/70 p-1">
                <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">#CR-12</span>
                      <span class="font-bold text-slate-900 dark:text-white text-xs">Sunita Verma</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 text-[10px] font-semibold">Urgent ECG</span>
                  </div>
                  <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
                    <span>54 Y &bull; Female</span>
                    <span class="text-blue-600 dark:text-blue-400 font-mono text-[10px]">Star Health Pre-Auth</span>
                  </div>
                  <div class="pt-0.5">
                    <button onclick="window.triggerSimulatedAction('Consultation started with Sunita Verma')" class="w-full py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm">
                      Call Patient In ↗
                    </button>
                  </div>
                </div>

                <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">#CR-13</span>
                      <span class="font-bold text-slate-900 dark:text-white text-xs">Rajesh Khanna</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-[10px] font-semibold">Routine Check</span>
                  </div>
                  <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
                    <span>42 Y &bull; Male</span>
                    <span class="text-slate-500 dark:text-slate-400 font-mono text-[10px]">Self Pay</span>
                  </div>
                  <div class="pt-0.5">
                    <button onclick="window.triggerSimulatedAction('SMS queue notification dispatched to Rajesh Khanna')" class="w-full py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors">
                      Queue (3m) ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    `
  },
  salon: {
    slideNum: "03",
    speakerNotes: "High-velocity multi-chair POS with automated WhatsApp booking reminders, stylist commission split ledger, and instant GST invoicing with 99.9% counter uptime.",
    name: "GlowSuite Salon & Spa POS",
    category: "Salon, Spa & Aesthetic CRM",
    tagline: "Appointment Scheduling, Stylist Commission Ledger & VIP Membership Cloud",
    logoSvg: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
    logoBgClass: "from-pink-600/30 to-rose-500/15 border-pink-500/40 text-pink-400 shadow-pink-950/60",
    stats: [
      { label: "Today's Bookings", value: "42", change: "95% slots booked", trend: "up" },
      { label: "Gross Billing", value: "$4,850", change: "+24% vs yesterday", trend: "up" },
      { label: "Commission Payouts", value: "$1,210", change: "8 Stylists", trend: "neutral" },
      { label: "VIP Retention", value: "86.4%", change: "+5.2% MoM", trend: "up" }
    ],
    htmlContent: `
      <!-- Salon POS Dashboard Preview -->
      <div class="bg-white/90 dark:bg-[#080d1e] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 backdrop-blur-xl">
        
        <div class="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-white">Lumière Luxury Salon & Day Spa</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 font-semibold">Flagship Studio</span>
              </div>
              <div class="text-[11px] text-slate-400">12 Stylist Stations &bull; POS Register #1 Active</div>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="window.triggerSimulatedAction('Appointment Book opened for 03:00 PM')" class="text-xs px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold transition-all shadow-md hover:scale-105 active:scale-95">
              + Book Appointment
            </button>
            <button onclick="window.triggerSimulatedAction('Daily Stylist Commission Report exported')" class="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-colors">
              Commission Ledger
            </button>
          </div>
        </div>

        <div class="p-4 sm:p-6 space-y-5">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Today's Revenue</div>
              <div class="text-2xl font-bold font-heading text-pink-400 mt-1">$4,850</div>
              <div class="text-[11px] text-emerald-400 font-semibold mt-1">+24% above target</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Appointments Completed</div>
              <div class="text-2xl font-bold font-heading text-white mt-1">29 / 42</div>
              <div class="text-[11px] text-slate-400 mt-1">13 Remaining</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Retail Product Sales</div>
              <div class="text-2xl font-bold font-heading text-cyan-400 mt-1">$1,180</div>
              <div class="text-[11px] text-emerald-400 font-semibold mt-1">Kérastase & Olaplex</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Average Bill Value</div>
              <div class="text-2xl font-bold font-heading text-violet-400 mt-1">$167.20</div>
              <div class="text-[11px] text-emerald-400 font-semibold mt-1">VIP packages active</div>
            </div>
          </div>

          <!-- Station Status Table -->
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/70 dark:bg-slate-900/50">
            <div class="px-4 py-3 bg-slate-100/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span class="text-xs font-bold text-slate-900 dark:text-slate-200">Live Stylist Station Status &bull; 02:45 PM</span>
              <span class="text-[11px] text-pink-600 dark:text-pink-400 font-mono">Real-Time Sync</span>
            </div>

            <!-- Desktop Table View (>= sm: 640px) -->
            <div class="hidden sm:block overflow-x-auto">
              <table class="w-full text-left text-xs min-w-[560px]">
                <thead class="bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th class="p-3">Chair</th>
                    <th class="p-3">Senior Stylist</th>
                    <th class="p-3">Client</th>
                    <th class="p-3">Service</th>
                    <th class="p-3">Progress</th>
                    <th class="p-3 text-right">POS Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/60 whitespace-nowrap">
                  <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td class="p-3 font-mono font-bold text-pink-600 dark:text-pink-400">CHAIR-01</td>
                    <td class="p-3 font-semibold text-slate-900 dark:text-white">Elena Rostova</td>
                    <td class="p-3 text-slate-600 dark:text-slate-300">Pooja Kapoor (VIP Gold)</td>
                    <td class="p-3 text-cyan-600 dark:text-cyan-300">Balayage + Olaplex Treatment</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">In Progress (85m)</span></td>
                    <td class="p-3 text-right">
                      <button onclick="window.triggerSimulatedAction('Invoice draft #POS-449 prepared: $280.00')" class="px-2.5 py-1 rounded-lg bg-pink-600/20 dark:bg-pink-600/30 hover:bg-pink-600 text-pink-600 dark:text-pink-200 hover:text-white transition-colors">
                        Quick Checkout
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td class="p-3 font-mono font-bold text-slate-500 dark:text-slate-400">CHAIR-02</td>
                    <td class="p-3 font-semibold text-slate-900 dark:text-white">Marcus Vance</td>
                    <td class="p-3 text-slate-600 dark:text-slate-300">Karan Singhania</td>
                    <td class="p-3 text-cyan-600 dark:text-cyan-300">Beard Sculpt + Head Massage</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-semibold">Just Begun</span></td>
                    <td class="p-3 text-right">
                      <button onclick="window.triggerSimulatedAction('Kérastase retail oil added to Karan\'s bill')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
                        Add Product
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile Responsive Record Cards (< sm: 640px) -->
            <div class="sm:hidden divide-y divide-slate-200 dark:divide-slate-800/70 p-1">
              <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs font-bold text-pink-600 dark:text-pink-400">CHAIR-01</span>
                    <span class="font-bold text-slate-900 dark:text-white text-xs">Elena Rostova</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">In Progress (85m)</span>
                </div>
                <div class="flex flex-col gap-0.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <div class="font-semibold text-slate-800 dark:text-slate-200">Pooja Kapoor &bull; <span class="text-amber-500">VIP Gold</span></div>
                  <div class="text-[10px] text-cyan-600 dark:text-cyan-400">Balayage + Olaplex Treatment</div>
                </div>
                <div class="pt-0.5">
                  <button onclick="window.triggerSimulatedAction('Invoice draft #POS-449 prepared: $280.00')" class="w-full py-1.5 px-3 rounded-lg bg-pink-600/20 dark:bg-pink-600/30 hover:bg-pink-600 text-pink-600 dark:text-pink-200 hover:text-white border border-pink-500/30 text-xs font-semibold transition-colors">
                    Quick Checkout ↗
                  </button>
                </div>
              </div>

              <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">CHAIR-02</span>
                    <span class="font-bold text-slate-900 dark:text-white text-xs">Marcus Vance</span>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-[10px] font-semibold">Just Begun</span>
                </div>
                <div class="flex flex-col gap-0.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <div class="font-semibold text-slate-800 dark:text-slate-200">Karan Singhania</div>
                  <div class="text-[10px] text-cyan-600 dark:text-cyan-400">Beard Sculpt + Head Massage</div>
                </div>
                <div class="pt-0.5">
                  <button onclick="window.triggerSimulatedAction('Kérastase retail oil added to Karan\'s bill')" class="w-full py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors">
                    Add Product ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `
  },
  retail: {
    slideNum: "04",
    speakerNotes: "Multi-warehouse GST ERP with automated E-Way bill generation, barcode SKU scanning, real-time vendor reconciliation, and batch inventory expiry alerts.",
    name: "Vyora Suite (GST & Inventory ERP)",
    category: "GST Billing, Multi-Warehouse & SME ERP",
    tagline: "Direct GSTN API, Automated E-Way Bills, Multi-Location Stock & Accounting",
    logoSvg: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    logoBgClass: "from-cyan-600/30 to-blue-600/15 border-cyan-500/40 text-cyan-300 shadow-cyan-950/60",
    stats: [
      { label: "Today's Sales", value: "$18,450", change: "+18% MoM", trend: "up" },
      { label: "GSTR-1 Status", value: "Compliant", change: "Auto-reconciled", trend: "up" },
      { label: "Warehouse Stock", value: "48,200 Units", change: "3 Warehouses", trend: "neutral" },
      { label: "E-Way Bills Generated", value: "32", change: "100% IRN Signed", trend: "up" }
    ],
    htmlContent: `
      <!-- GST & Inventory ERP Dashboard Preview -->
      <div class="bg-white/90 dark:bg-[#080d1e] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 backdrop-blur-xl">
        
        <div class="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-white">Apex Industrial Distribution Corp.</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">GSTN API Live</span>
              </div>
              <div class="text-[11px] text-slate-400">GSTIN: 27AABCT3421K1Z8 &bull; Mumbai Central Distribution Hub</div>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="window.triggerSimulatedAction('B2B Tax Invoice & E-Way Bill #EW-9821 created')" class="text-xs px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-bold transition-all shadow-md hover:scale-105 active:scale-95">
              + Generate Tax Invoice
            </button>
            <button onclick="window.triggerSimulatedAction('Stock Transfer between Warehouse A & B initiated')" class="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-colors">
              Transfer Stock
            </button>
          </div>
        </div>

        <div class="p-4 sm:p-6 space-y-5">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Monthly Turnover</div>
              <div class="text-2xl font-bold font-heading text-cyan-400 mt-1">$148,920</div>
              <div class="text-[11px] text-emerald-400 font-semibold mt-1">↑ 22% vs last month</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">GSTR-1 Invoices</div>
              <div class="text-2xl font-bold font-heading text-emerald-400 mt-1">482 Filed</div>
              <div class="text-[11px] text-slate-400 mt-1">0 Reconciliation Errors</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Pending Receivables</div>
              <div class="text-2xl font-bold font-heading text-amber-400 mt-1">$22,400</div>
              <div class="text-[11px] text-slate-400 mt-1">WhatsApp links active</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Low Stock Alerts</div>
              <div class="text-2xl font-bold font-heading text-rose-400 mt-1">4 SKUs</div>
              <div class="text-[11px] text-slate-400 mt-1">Auto PO recommended</div>
            </div>
          </div>

          <!-- Live Invoicing Ledger -->
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/70 dark:bg-slate-900/50">
            <div class="px-4 py-3 bg-slate-100/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span class="text-xs font-bold text-slate-900 dark:text-slate-200">Live B2B Invoices &amp; IRN Generation</span>
              <span class="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono">NIC E-Invoicing Connected</span>
            </div>

            <!-- Desktop Table View (>= sm: 640px) -->
            <div class="hidden sm:block overflow-x-auto">
              <table class="w-full text-left text-xs min-w-[580px]">
                <thead class="bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th class="p-3">Invoice #</th>
                    <th class="p-3">Customer / Firm</th>
                    <th class="p-3">GSTIN</th>
                    <th class="p-3">Amount</th>
                    <th class="p-3">E-Way Bill Status</th>
                    <th class="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/60 whitespace-nowrap">
                  <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td class="p-3 font-mono font-bold text-cyan-600 dark:text-cyan-400">#INV-2026-891</td>
                    <td class="p-3 font-semibold text-slate-900 dark:text-white">TechnoForge Engineering Ltd</td>
                    <td class="p-3 font-mono text-slate-500 dark:text-slate-400">27AAACT8923Q1Z2</td>
                    <td class="p-3 text-emerald-600 dark:text-emerald-400 font-bold">$12,450.00</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">IRN Generated</span></td>
                    <td class="p-3 text-right">
                      <button onclick="window.triggerSimulatedAction('E-Way Bill PDF & QR downloaded for INV-891')" class="px-2.5 py-1 rounded-lg bg-cyan-600/20 dark:bg-cyan-600/30 hover:bg-cyan-600 text-cyan-700 dark:text-cyan-200 hover:text-white transition-colors">
                        Print E-Way
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td class="p-3 font-mono font-bold text-slate-500 dark:text-slate-300">#INV-2026-892</td>
                    <td class="p-3 font-semibold text-slate-900 dark:text-white">Horizon Electricals & Spares</td>
                    <td class="p-3 font-mono text-slate-500 dark:text-slate-400">24BBBPX1124M1Z9</td>
                    <td class="p-3 text-emerald-600 dark:text-emerald-400 font-bold">$4,820.00</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-semibold">Dispatched</span></td>
                    <td class="p-3 text-right">
                      <button onclick="window.triggerSimulatedAction('Invoice WhatsApp PDF sent to Horizon Electricals')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
                        Share PDF
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile Responsive Record Cards (< sm: 640px) -->
            <div class="sm:hidden divide-y divide-slate-200 dark:divide-slate-800/70 p-1">
              <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">#INV-891</span>
                    <span class="font-bold text-slate-900 dark:text-white text-xs truncate max-w-[190px]">TechnoForge Eng. Ltd</span>
                  </div>
                  <span class="text-emerald-600 dark:text-emerald-400 font-bold text-xs">$12,450</span>
                </div>
                <div class="flex items-center justify-between text-[11px]">
                  <span class="font-mono text-[10px] text-slate-500 dark:text-slate-400">GST: 27AAACT8923Q1Z2</span>
                  <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">IRN Generated</span>
                </div>
                <div class="pt-0.5">
                  <button onclick="window.triggerSimulatedAction('E-Way Bill PDF & QR downloaded for INV-891')" class="w-full py-1.5 px-3 rounded-lg bg-cyan-600/20 dark:bg-cyan-600/30 hover:bg-cyan-600 text-cyan-700 dark:text-cyan-200 hover:text-white border border-cyan-500/30 text-xs font-semibold transition-colors">
                    Print E-Way ↗
                  </button>
                </div>
              </div>

              <div class="p-3 space-y-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/20 rounded-xl transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">#INV-892</span>
                    <span class="font-bold text-slate-900 dark:text-white text-xs truncate max-w-[190px]">Horizon Electricals</span>
                  </div>
                  <span class="text-emerald-600 dark:text-emerald-400 font-bold text-xs">$4,820</span>
                </div>
                <div class="flex items-center justify-between text-[11px]">
                  <span class="font-mono text-[10px] text-slate-500 dark:text-slate-400">GST: 24BBBPX1124M1Z9</span>
                  <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-[10px] font-semibold">Dispatched</span>
                </div>
                <div class="pt-0.5">
                  <button onclick="window.triggerSimulatedAction('Invoice WhatsApp PDF sent to Horizon Electricals')" class="w-full py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors">
                    Share PDF ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `
  },
  hostel: {
    slideNum: "05",
    speakerNotes: "End-to-end PG & Hostel PMS with automated recurring UPI rent links, digital KYC onboarding, room bed allocation, and biometric gate logs.",
    name: "NestDash PG & Hostel PMS",
    category: "Co-Living & Student Housing ERP",
    tagline: "Bed Allocation Matrix, Automated UPI Rent Recovery & Digital Tenant KYC",
    logoSvg: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1M15 13h1M15 17h1"/></svg>`,
    logoBgClass: "from-violet-600/30 to-purple-600/15 border-violet-500/40 text-violet-300 shadow-violet-950/60",
    stats: [
      { label: "Total Beds", value: "320", change: "94.6% Occupancy", trend: "up" },
      { label: "Rent Collected", value: "$36,400", change: "96% of target", trend: "up" },
      { label: "Due Rent Recoveries", value: "7 Beds", change: "Auto-reminders sent", trend: "neutral" },
      { label: "Maintenance Tickets", value: "2 Open", change: "Resolved in 2.4h avg", trend: "up" }
    ],
    htmlContent: `
      <!-- NestDash PMS Dashboard Preview -->
      <div class="bg-white/90 dark:bg-[#080d1e] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 backdrop-blur-xl">
        
        <div class="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-white">UrbanNest Co-Living & Student Suites</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30 font-semibold">Tower A & B</span>
              </div>
              <div class="text-[11px] text-slate-400">320 Total Beds &bull; 17 Vacancies Available</div>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="window.triggerSimulatedAction('Digital Tenant Onboarding & Aadhaar KYC initiated')" class="text-xs px-3 py-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold transition-all shadow-md hover:scale-105 active:scale-95">
              + Check-In Tenant
            </button>
            <button onclick="window.triggerSimulatedAction('Bulk UPI Auto-Debit WhatsApp Links dispatched')" class="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-colors">
              Send Rent Links
            </button>
          </div>
        </div>

        <div class="p-4 sm:p-6 space-y-5">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Live Occupancy</div>
              <div class="text-2xl font-bold font-heading text-violet-400 mt-1">303 / 320</div>
              <div class="text-[11px] text-emerald-400 font-semibold mt-1">94.6% Bed Utilization</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Current Month Rent</div>
              <div class="text-2xl font-bold font-heading text-emerald-400 mt-1">$36,400</div>
              <div class="text-[11px] text-slate-400 mt-1">Auto-reconciled via UPI</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Utility Sub-metering</div>
              <div class="text-2xl font-bold font-heading text-cyan-400 mt-1">$4,120</div>
              <div class="text-[11px] text-slate-400 mt-1">AC Units billed to room</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div class="text-xs text-slate-400">Digital KYC Records</div>
              <div class="text-2xl font-bold font-heading text-white mt-1">100%</div>
              <div class="text-[11px] text-emerald-400 font-semibold mt-1">Police verification done</div>
            </div>
          </div>

          <!-- Bed Allocation Matrix Preview -->
          <div class="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900/50 p-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <span class="text-xs font-bold text-slate-200">3rd Floor Bed Matrix &bull; Deluxe Triple Sharing</span>
              <div class="flex items-center gap-3 text-[11px]">
                <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Occupied</span>
                <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-cyan-400"></span> Vacant</span>
                <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400"></span> Reserved</span>
              </div>
            </div>
            <div class="grid grid-cols-3 sm:grid-cols-6 gap-2.5 text-center">
              <div onclick="window.triggerSimulatedAction('Room 301-A Tenant: Siddharth M. | Rent: Paid')" class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20 transition-all">
                <div class="text-xs font-bold text-white">301-A</div>
                <div class="text-[10px] text-emerald-400 mt-0.5">Siddharth M.</div>
              </div>
              <div onclick="window.triggerSimulatedAction('Room 301-B Tenant: Tanmay R. | Rent: Paid')" class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20 transition-all">
                <div class="text-xs font-bold text-white">301-B</div>
                <div class="text-[10px] text-emerald-400 mt-0.5">Tanmay R.</div>
              </div>
              <div onclick="window.triggerSimulatedAction('Room 301-C is VACANT. Ready for allocation!')" class="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/40 cursor-pointer hover:bg-cyan-500/20 transition-all">
                <div class="text-xs font-bold text-cyan-300">301-C</div>
                <div class="text-[10px] text-cyan-400 mt-0.5 font-bold">+ VACANT</div>
              </div>
              <div onclick="window.triggerSimulatedAction('Room 302-A Tenant: Varun K. | Rent: Due')" class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 cursor-pointer hover:bg-amber-500/20 transition-all">
                <div class="text-xs font-bold text-white">302-A</div>
                <div class="text-[10px] text-amber-400 mt-0.5">Rent Due ($320)</div>
              </div>
              <div onclick="window.triggerSimulatedAction('Room 302-B Tenant: David L. | Rent: Paid')" class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20 transition-all">
                <div class="text-xs font-bold text-white">302-B</div>
                <div class="text-[10px] text-emerald-400 mt-0.5">David L.</div>
              </div>
              <div onclick="window.triggerSimulatedAction('Room 302-C Tenant: Aman P. | Rent: Paid')" class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/20 transition-all">
                <div class="text-xs font-bold text-white">302-C</div>
                <div class="text-[10px] text-emerald-400 mt-0.5">Aman P.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `
  }
};

export function initDashboardPreview() {
  const container = document.getElementById('products-section');
  if (!container) return;

  const productKeys = ['school', 'hospital', 'salon', 'retail', 'hostel'];
  let currentSlideIndex = 0;

  const tabs = container.querySelectorAll('[data-product-tab]');
  const previewContainer = document.getElementById('dashboard-preview-content');
  const titleEl = document.getElementById('product-active-title');
  const categoryEl = document.getElementById('product-active-category');
  const taglineEl = document.getElementById('product-active-tagline');
  const bookDemoBtn = document.getElementById('product-book-demo-btn');
  const slideCounterEl = document.getElementById('ppt-slide-counter');
  const slideCounterBottomEl = document.getElementById('ppt-slide-counter-bottom');
  const breadcrumbEl = document.getElementById('ppt-slide-breadcrumb');
  const speakerNotesEl = document.getElementById('ppt-speaker-notes-text');
  const prevBtn = document.getElementById('ppt-prev-btn');
  const nextBtn = document.getElementById('ppt-next-btn');

  function updateThumbnails(activeKey) {
    tabs.forEach(tab => {
      const key = tab.getAttribute('data-product-tab');
      const statusEl = tab.querySelector('.ppt-thumb-status');
      if (key === activeKey) {
        tab.classList.add('ppt-thumb-active');
        tab.classList.remove('tab-inactive');
        tab.classList.add('tab-active');
        if (statusEl) {
          statusEl.textContent = '● Active Slide';
          statusEl.classList.remove('opacity-0');
        }
      } else {
        tab.classList.remove('ppt-thumb-active');
        tab.classList.remove('tab-active');
        tab.classList.add('tab-inactive');
        if (statusEl) {
          statusEl.textContent = 'Click to View';
          statusEl.classList.add('opacity-0');
        }
      }
    });
  }

  function renderDashboard(productKey) {
    const data = productDashboards[productKey] || productDashboards.school;
    const index = productKeys.indexOf(productKey);
    if (index !== -1) currentSlideIndex = index;

    if (previewContainer) {
      previewContainer.classList.add('opacity-0', 'translate-y-2');
    }

    setTimeout(() => {
      if (titleEl) titleEl.textContent = data.name;
      if (categoryEl) categoryEl.textContent = data.category;
      if (taglineEl) taglineEl.textContent = data.tagline;
      if (bookDemoBtn) bookDemoBtn.setAttribute('data-prefill-product', data.name);

      if (slideCounterEl) {
        slideCounterEl.textContent = `Slide ${currentSlideIndex + 1} of ${productKeys.length}`;
      }
      if (slideCounterBottomEl) {
        slideCounterBottomEl.textContent = `Slide ${currentSlideIndex + 1} / ${productKeys.length}`;
      }
      if (breadcrumbEl) {
        breadcrumbEl.textContent = `SLIDE 0${currentSlideIndex + 1} OF 05 // ${data.category.toUpperCase()}`;
      }
      if (speakerNotesEl && data.speakerNotes) {
        speakerNotesEl.textContent = data.speakerNotes;
      }

      const logoEl = document.getElementById('product-active-logo');
      if (logoEl && data.logoSvg) {
        logoEl.innerHTML = data.logoSvg;
        logoEl.className = `w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${data.logoBgClass} border flex items-center justify-center shrink-0 shadow-lg transition-all duration-300`;
      }

      if (previewContainer) {
        previewContainer.innerHTML = data.htmlContent;
        previewContainer.classList.remove('opacity-0', 'translate-y-2');
      }

      updateThumbnails(productKey);
    }, 120);
  }

  // Bind thumbnails
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const productKey = tab.getAttribute('data-product-tab');
      renderDashboard(productKey);
    });
  });

  // Bind Prev / Next PPT Controls
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex - 1 + productKeys.length) % productKeys.length;
      renderDashboard(productKeys[currentSlideIndex]);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex + 1) % productKeys.length;
      renderDashboard(productKeys[currentSlideIndex]);
    });
  }

  // Keyboard Navigation when hovering section
  let isHovered = false;
  container.addEventListener('mouseenter', () => { isHovered = true; });
  container.addEventListener('mouseleave', () => { isHovered = false; });

  window.addEventListener('keydown', (e) => {
    if (!isHovered) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      currentSlideIndex = (currentSlideIndex - 1 + productKeys.length) % productKeys.length;
      renderDashboard(productKeys[currentSlideIndex]);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      currentSlideIndex = (currentSlideIndex + 1) % productKeys.length;
      renderDashboard(productKeys[currentSlideIndex]);
    }
  });

  // Global action toast for interactive dashboard buttons
  window.triggerSimulatedAction = function(message) {
    const existing = document.getElementById('infotecsys-action-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'infotecsys-action-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900/95 text-white border border-cyan-500/50 shadow-2xl shadow-cyan-900/40 flex items-center gap-3 text-xs font-semibold backdrop-blur-md animate-bounce';
    toast.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
      <span class="text-cyan-300">⚡ Live Action:</span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('animate-bounce');
      toast.classList.add('opacity-0', 'transition-opacity');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  // Initial render
  renderDashboard('school');
}
