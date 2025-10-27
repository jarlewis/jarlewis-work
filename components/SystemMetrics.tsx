export default function SystemMetrics() {
  const skills = [
    { name: "API Integrations", value: 92 },
    { name: "Cloud Infrastructure", value: 88 },
    { name: "Automation", value: 85 },
    { name: "Data Analytics", value: 78 }
  ];

  const colors = ["#06f906", "#00d4ff", "#ff6b35", "#ffd23f"];

  return (
    <div className="glass-panel rounded-xl p-6">
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-6">System Metrics</h2>
      <div className="relative h-52 w-full">
        <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          {/* Clean horizontal grid lines */}
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.5">
            <line x1="45" y1="25" x2="375" y2="25" />
            <line x1="45" y1="60" x2="375" y2="60" />
            <line x1="45" y1="95" x2="375" y2="95" />
            <line x1="45" y1="130" x2="375" y2="130" />
            <line x1="45" y1="165" x2="375" y2="165" />
          </g>
          
          {/* Y-axis */}
          <line x1="45" y1="25" x2="45" y2="165" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          
          {/* Y-axis labels */}
          <text x="40" y="30" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end">100</text>
          <text x="40" y="65" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end">75</text>
          <text x="40" y="100" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end">50</text>
          <text x="40" y="135" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end">25</text>
          <text x="40" y="170" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end">0</text>
          
          {/* Bars with improved spacing and clean lines */}
          {skills.map((skill, index) => {
            const barWidth = 55;
            const barSpacing = 85;
            const x = 70 + index * barSpacing;
            const barHeight = (skill.value / 100) * 140;
            const y = 165 - barHeight;
            
            return (
              <g key={skill.name}>
                {/* Bar with clean edges */}
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={colors[index]}
                  opacity="0.85"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                  rx="2"
                />
                {/* Value label always visible */}
                <text
                  x={x + barWidth / 2}
                  y={y - 6}
                  fill="rgba(255,255,255,0.9)"
                  fontSize="11"
                  fontWeight="500"
                  textAnchor="middle"
                >
                  {skill.value}%
                </text>
                {/* Skill name with better positioning */}
                <text
                  x={x + barWidth / 2}
                  y="180"
                  fill="rgba(255,255,255,0.7)"
                  fontSize="9"
                  textAnchor="middle"
                >
                  {skill.name.split(' ')[0]}
                </text>
                <text
                  x={x + barWidth / 2}
                  y="192"
                  fill="rgba(255,255,255,0.7)"
                  fontSize="9"
                  textAnchor="middle"
                >
                  {skill.name.split(' ')[1] || ''}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}