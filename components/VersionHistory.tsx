export default function VersionHistory() {
  // Newest → Oldest
  const versions = [
    {
      id: 'v3.0',
      year: '2025',
      employer: 'Euna Solutions',
      role: 'Solutions Engineer',
      duration: 'Apr 2025 – Present',
      highlights: [
        'Implement customer payment solutions end-to-end for enterprise clients',
        'Create financial dashboards and reporting automation',
        'Lead technical demos and solution architecture for payment integrations',
      ],
    },
    {
      id: 'v2.0',
      year: '2024',
      employer: 'Inspire Brands',
      role: 'Lead Product Manager, Customer Care',
      duration: 'Aug 2024 – Apr 2025',
      highlights: [
        'Created backbone sources for AI-driven chatbot implementation',
        'Designed knowledge taxonomy and self-service flows (+~20% CSAT)',
        'Aligned roadmaps with engineering; led stakeholder demos',
      ],
    },
    {
      id: 'v1.2',
      year: '2021',
      employer: 'CallRail',
      role: 'Product Manager',
      duration: 'Mar 2021 – Aug 2023',
      highlights: [
        'Redesigned mobile app UI (+15% engagement, -10% faults)',
        'Streamlined VOIP testing and improved release reliability',
        'Scaled product ops with documentation (+~20% support efficiency)',
      ],
    },
    {
      id: 'v1.1',
      year: '2019',
      employer: 'CallRail',
      role: 'Technical Support Engineer',
      duration: 'Jan 2019 – Mar 2021',
      highlights: [
        'Built REST automations (≈30% faster internal workflows)',
        'Mentored juniors and improved team documentation',
        'Refactored legacy code to reduce VOIP faults',
      ],
    },
    {
      id: 'v1.0',
      year: '2017',
      employer: 'CallRail',
      role: 'Product Support Specialist',
      duration: 'Nov 2017 – Dec 2018',
      highlights: [
        'Improved TTR/SLA performance by ~30% on frontline support',
        'Verified routing configs to improve reliability for key accounts',
        'Contributed onboarding/training content to knowledge base',
      ],
    },
  ];

  return (
    <div className="glass-panel rounded-xl p-6">
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Version History</h2>
      <ul className="relative pl-4 border-l border-white/10">
        {versions.map((v, idx) => (
          <li key={v.id} className="relative group py-4">
            <span className="absolute -left-[9px] top-5 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(6,249,6,0.8)]" aria-hidden></span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-primary font-semibold text-sm bg-primary/10 border border-primary/40 rounded px-2 py-0.5">{v.id}</span>
                <p className="text-white font-medium text-sm">{v.year}: {v.employer} — {v.role}</p>
              </div>
              <span className="text-white/50 text-xs">{v.duration}</span>
            </div>
            <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 group-hover:max-h-40">
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/80">
                {v.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            {idx !== versions.length - 1 && (
              <div className="absolute left-[-1px] bottom-0 h-px w-6 bg-white/5" />
            )}
          </li>
        ))}
      </ul>
      <p className="text-xs text-white/60 mt-4">Hover a version to reveal feature highlights. Think of this as a changelog for the career journey.</p>
    </div>
  );
}