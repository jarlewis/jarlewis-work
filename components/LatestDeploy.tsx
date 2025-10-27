export default function LatestDeploy() {
  return (
    <div className="glass-panel p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">Latest Deploy</h2>
        <span className="material-symbols-outlined text-green-400">rocket_launch</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-white">Production Deploy</h3>
            <p className="text-sm text-gray-400">main branch • commit abc123f</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full pulse"></div>
            <span className="text-green-400 text-sm">Success</span>
          </div>
        </div>
        
        <div className="border-t border-green-500/20 pt-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Deploy Time:</span>
              <p className="text-white">2 minutes 34 seconds</p>
            </div>
            <div>
              <span className="text-gray-400">Deployed:</span>
              <p className="text-white">5 minutes ago</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="neon-button px-4 py-2 rounded-lg text-sm font-medium">
            View Details
          </button>
          <button className="border border-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-500/10 transition-colors">
            Rollback
          </button>
        </div>
      </div>
    </div>
  );
}