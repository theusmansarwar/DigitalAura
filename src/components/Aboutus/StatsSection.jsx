import "./StatsSection.css";

export default function StatsSection({data}) {
  const stats = [
    {
      number: "1000+",
      label: "Completed Projects",
    },
    {
      number: "250+",
      label: "On Going Projects",
    },
    {
      number: "500+",
      label: "Happy Clients",
    },
    {
      number: "#1",
      label: "Talented Team",
    },
  ];

  return (
    <div className="stats-container">
      <div className="stats-card-parent">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="stats-description">
         {data}
        </div>
      </div>
    </div>
  );
}
