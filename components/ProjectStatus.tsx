export default function ProjectStatus() {
  const projects = [
    { name: 'Portfolio Website', status: 'Active', progress: 95, color: 'green' },
    { name: 'E-commerce Platform', status: 'In Progress', progress: 67, color: 'blue' },
    { name: 'Mobile App', status: 'Planning', progress: 23, color: 'yellow' },
    { name: 'API Integration', status: 'Complete', progress: 100, color: 'green' },
  ];

  return (
    <div className="glass-panel p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">Project Status</h2>
        <span className="material-symbols-outlined text-green-400">work</span>
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-green-500/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-white">{project.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${
                project.color === 'green' ? 'bg-green-500/20 text-green-400' :
                project.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  project.color === 'green' ? 'bg-green-500' :
                  project.color === 'blue' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="text-right text-sm text-gray-400 mt-1">
              {project.progress}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}