import Header from '../components/Header';
import SystemAlerts from '../components/SystemAlerts';
import VersionHistory from '../components/VersionHistory';

export default function Home() {
  return (
    <div className="bg-[#2b2b2b] font-display text-white/90 min-h-screen">
      <Header />
      <main className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        <div className="flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[1200px] flex-1 w-full">
            {/* Top: Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="glass-panel rounded-xl p-6 flex-grow flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Real-Time Experience Log</h2>
                    <div className="flex flex-wrap items-center gap-2">
                      <button className="px-3 py-1 text-sm font-medium bg-primary/20 text-primary border border-primary rounded-full hover:bg-primary/40 transition-colors">All</button>
                      <button className="px-3 py-1 text-sm font-medium bg-transparent text-white/70 border border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-colors">Experience</button>
                    </div>
                  </div>

                  <div className="flex-grow bg-black/30 rounded-lg p-4 overflow-y-auto h-96 font-mono text-sm text-[#8ecc8e] mono-scroll">
                    <p><span className="text-cyan-400">[2017-05-15 12:00:00]</span> <span className="text-blue-400">[INFO]</span> Graduated — B.A. in Computer Science & Business (Valdosta State University).</p>

                    <p className="text-white/50">// v1.0 INIT LOGS — CallRail (Product Support Specialist)</p>
                    <p><span className="text-cyan-400">[2017-11-13 09:00:00]</span> <span className="text-blue-400">[INIT]</span> Started at CallRail — Product Support Specialist.</p>
                    <p className="text-white/50 mt-3">// v1.1 PATCH LOGS — CallRail (Technical Support Engineer)</p>
                    <p><span className="text-cyan-400">[2019-11-12 08:00:00]</span> <span className="text-green-400">[UPDATE]</span> Advanced to Technical Support Engineer — CallRail.</p>
                    <p><span className="text-cyan-400">[2020-09-18 13:10:18]</span> <span className="text-green-400">[PATCH]</span> Built REST API integrations & automation to reduce internal workflow timelines by 30%.</p>
                    <p className="text-white/50 mt-3">// v1.2 UPDATE LOGS — CallRail (Product Manager)</p>
                    <p><span className="text-cyan-400">[2021-06-01 09:30:00]</span> <span className="text-green-400">[PROMO]</span> Promoted to Product Manager — CallRail.</p>
                    <p><span className="text-cyan-400">[2022-03-01 03:30:00]</span> <span className="text-yellow-400">[DEPLOY]</span> Released redesigned VOIP mobile app — +15% engagement.</p>
                    <p className="text-white/50 mt-3">// v2.0 RELEASE LOGS — Inspire Brands</p>
                    <p><span className="text-cyan-400">[2023-08-10 09:00:00]</span> <span className="text-yellow-400">[DEPLOY]</span> Joined Inspire Brands — Product Manager.</p>
                    <p><span className="text-cyan-400">[2023-10-10 11:02:05]</span> <span className="text-green-400">[INFO]</span> Designed knowledge base taxonomy & self-service strategy — improved CSAT by ~20%.</p>
                    <p><span className="text-cyan-400">[2024-02-15 14:22:45]</span> <span className="text-yellow-400">[DEPLOY]</span> Created strategy for AI-driven chatbot to reduce live support volume by 30%.</p>
                    <p><span className="text-cyan-400">[2024-07-01 10:15:12]</span> <span className="text-green-400">[INFO]</span> Began freelance consulting: digital transformation and CRM / e-commerce integrations for SMBs.</p>
                    <p className="text-white/50 mt-3">// v3.0 DEPLOYMENT LOGS — Euna Solutions</p>
                    <p><span className="text-cyan-400">[2025-04-25 09:00:00]</span> <span className="text-yellow-400">[DEPLOY]</span> Joined Euna Solutions — Solutions Engineer (Payments, integrations & automation).</p>
                    <p><span className="text-cyan-400">[2025-08-01 10:30:00]</span> <span className="text-green-400">[INFO]</span> Developing client implementations for public sector payment solutions.</p>
                    <div className="mt-3 text-xs text-white/60 flex items-center gap-2">
                      <span className="text-green-400">&gt;</span>
                      <span>System heartbeat active... Monitoring deployment pipelines</span>
                      <span className="blink">▍</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left: Version History + Skills + Certifications */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Version History */}
                <VersionHistory />

                {/* Skill Development */}
                <div className="glass-panel rounded-xl p-6">
                  <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Skill Development</h2>
                  <div className="relative h-64 w-full">
                    <div className="flex items-center justify-center">
                      <svg className="w-64 h-64" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="50,10 85,30 70,75 30,75 15,30" fill="rgba(6,249,6,0.12)" stroke="#06f906" strokeWidth="0.6"></polygon>
                        <polygon points="50,18 78,35 66,70 34,70 22,35" fill="rgba(6,249,6,0.4)" stroke="#06f906" strokeWidth="0.6"></polygon>
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-center text-white/80 text-xs">
                        <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">API & Integrations</p>
                        <p className="absolute top-[25%] right-0 translate-x-4">Cloud (AWS / Firebase)</p>
                        <p className="absolute bottom-[10%] right-[12%] translate-x-4">Automation & Scripting</p>
                        <p className="absolute bottom-[10%] left-[12%] -translate-x-4">Customer Solutions</p>
                        <p className="absolute top-[25%] left-0 -translate-x-4">Data & Analytics</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 mt-3">Core domains: API/Integrations, Cloud infrastructure, Automation, Data & Analytics, Product strategy.</p>
                </div>

                {/* Certifications */}
                <div className="glass-panel rounded-xl p-6">
                  <h2 className="text-white text-lg font-bold mb-4">Certifications</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80 text-sm">
                    <li>✅ Certified Scrum Product Owner (CSPO)</li>
                    <li>✅ Product Led Certified — Pendo</li>
                    <li>✅ Product Analytics Certified — Pendo</li>
                    <li>✅ Scrum Foundation Professional Certificate</li>
                    <li>✅ Program Management for IT Professionals</li>
                    <li>✅ Project Management Foundations</li>
                    <li>✅ Google Ads Certified</li>
                  </ul>
                  <p className="text-xs text-white/60 mt-3">Relevant certifications that support product strategy, analytics, and program execution.</p>
                </div>

                {/* System Metrics removed per request */}
              </div>

              {/* Right column: contact, stats, uptime, AI projects */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Contact Protocol */}
                <div className="glass-panel rounded-xl p-6">
                  <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Contact Protocol</h2>
                  <div className="space-y-3">
                    <a className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors" href="mailto:jarell.lewis@gmail.com">
                      <span className="material-symbols-outlined">mail</span>
                      <span className="text-sm">jarell.lewis@gmail.com</span>
                    </a>
                    <a className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors" href="https://www.linkedin.com/in/jarelllewis" target="_blank" rel="noreferrer">
                      <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.336 8.905H4.002v-8.59h2.671v8.59zM17.638 2H6.362A4.37 4.37 0 002 6.368v11.264A4.37 4.37 0 006.362 22h11.276A4.37 4.37 0 0022 17.632V6.368A4.37 4.37 0 0017.638 2z"/></svg>
                      <span className="text-sm">/in/jarelllewis</span>
                    </a>
                    <a className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors" href="https://github.com/jarlewis" target="_blank" rel="noreferrer">
                      <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.853 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
                      <span className="text-sm">/jarlewis</span>
                    </a>
                  </div>
                </div>

                {/* System Alerts — replacing Personal Stats */}
                <SystemAlerts />

                {/* Skills Uptime */}
                <div className="glass-panel rounded-xl p-6">
                  <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Skills Uptime</h2>
                  <div className="space-y-4">
                    {/* Automation & Optimization - 2 skills */}
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Zapier / API Automation</span>
                      <span className="text-white/50 text-xs">84%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '84%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Workflow Scripting</span>
                      <span className="text-white/50 text-xs">77%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '77%'}}></div>
                    </div>

                    {/* Product & Solutions Architecture - 2 skills */}
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Technical Demos & POCs</span>
                      <span className="text-white/50 text-xs">82%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Requirements Translation</span>
                      <span className="text-white/50 text-xs">88%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>

                    {/* Customer Experience / Support Engineering - 2 skills */}
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Customer Troubleshooting</span>
                      <span className="text-white/50 text-xs">100%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Client Communication</span>
                      <span className="text-white/50 text-xs">94%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>

                    {/* Project Management & Strategy - 2 skills */}
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Agile / Scrum / Kanban</span>
                      <span className="text-white/50 text-xs">91%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '91%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Stakeholder Management</span>
                      <span className="text-white/50 text-xs">89%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                </div>

                {/* CPU Usage removed per request */}

                {/* AI + Automation Projects — removed by request */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
