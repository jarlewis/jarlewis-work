export default function SystemAlerts() {
  const alerts = [
    { type: 'warning', message: 'High Empathy Load Detected' },
    { type: 'success', message: 'Collaboration Mode Enabled' },
    { type: 'info', message: 'Proactive Solutioning Active' },
  ];

  return (
    <div className="glass-panel p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">System Alerts</h2>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-black/30">
            <span
              className={`material-symbols-outlined text-base ${
                alert.type === 'success' ? 'text-green-400' :
                alert.type === 'warning' ? 'text-orange-400' :
                'text-cyan-400'
              }`}
            >
              {alert.type === 'success' ? 'check_circle' :
               alert.type === 'warning' ? 'warning' :
               'psychology_alt'}
            </span>
            <p className="text-sm text-white/90">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}