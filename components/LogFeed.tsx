export default function LogFeed() {
  const logs = [
    { time: '2024-01', level: 'SUCCESS', message: 'Led full-stack development of enterprise SaaS platform' },
    { time: '2023-12', level: 'SUCCESS', message: 'Architected microservices infrastructure serving 10K+ users' },
    { time: '2023-09', level: 'INFO', message: 'Implemented CI/CD pipeline reducing deployment time by 60%' },
    { time: '2023-06', level: 'SUCCESS', message: 'Launched React Native mobile app with 4.8★ rating' },
    { time: '2023-03', level: 'INFO', message: 'Optimized database queries improving performance by 40%' },
    { time: '2022-11', level: 'SUCCESS', message: 'Built real-time analytics dashboard with D3.js' },
    { time: '2022-08', level: 'INFO', message: 'Mentored 5 junior developers in modern web technologies' },
    { time: '2022-05', level: 'SUCCESS', message: 'Delivered e-commerce platform processing $2M+ annually' },
  ];

  return (
    <div className="glass-panel p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">Real-Time Experience Log</h2>
        <span className="material-symbols-outlined text-green-400">terminal</span>
      </div>
      <div className="bg-black/50 rounded-lg p-4 font-mono text-sm max-h-64 overflow-y-auto">
        {logs.map((log, index) => (
          <div key={index} className="flex items-start space-x-3 mb-2">
            <span className="text-green-400 text-xs">{log.time}</span>
            <span className={`text-xs px-2 py-1 rounded ${
              log.level === 'SUCCESS' ? 'bg-green-500/20 text-green-400' :
              log.level === 'INFO' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {log.level}
            </span>
            <span className="text-gray-300 flex-1">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}