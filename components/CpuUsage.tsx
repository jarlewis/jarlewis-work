export default function CpuUsage() {
  const cpu = [
    { label: 'Adaptability', value: 95 },
    { label: 'Problem-Solving', value: 85 },
    { label: 'Multitasking', value: 88 },
  ];

  return (
    <div className="glass-panel p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">CPU Usage</h2>
      </div>
      <div className="space-y-4">
        {cpu.map((m, i) => (
          <div key={i}>
            <p className="text-white/90 text-sm mb-2">{m.label}</p>
            <div className="h-2 rounded-full bg-orange-500/20">
              <div
                className="h-2 rounded-full bg-orange-400"
                style={{ width: `${m.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}