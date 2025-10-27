export default function Footer() {
  return (
    <footer className="glass-panel border-t border-green-500/20 p-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">code</span>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">work</span>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center space-x-2 text-green-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
                <span>Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">System Status</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full pulse"></div>
              <span className="text-green-400">All systems operational</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-500/20 mt-8 pt-6 text-center text-green-400">
          <p>&copy; 2024 JL Resume Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}