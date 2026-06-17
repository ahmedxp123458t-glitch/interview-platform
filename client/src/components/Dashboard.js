import React from 'react';

function Dashboard({ questions, interviews, users }) {
  const totalQuestions = questions.length;
  const totalInterviews = interviews.length;
  const totalUsers = users.length;
  const avgScore = interviews.length > 0
    ? Math.round(interviews.reduce((s, i) => s + i.score, 0) / interviews.length)
    : 0;

  const categories = {};
  questions.forEach(q => { categories[q.category] = (categories[q.category] || 0) + 1; });

  return (
    <div>
      <div className="section">
        <div className="section-title">Progress Dashboard</div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{totalQuestions}</div>
            <div className="stat-label">Total Questions</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalInterviews}</div>
            <div className="stat-label">Interviews Taken</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalUsers}</div>
            <div className="stat-label">Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{avgScore}</div>
            <div className="stat-label">Average Score</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Topics Overview</div>
        <div className="topic-list">
          {Object.entries(categories).map(([cat, count]) => (
            <span key={cat} className="topic-tag">{cat} ({count})</span>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">Recent Activity</div>
        {interviews.length > 0 ? (
          <ul className="activity-list">
            {interviews.slice(-5).reverse().map((inv, i) => (
              <li key={i}>
                <span>{inv.type} interview - Score: {inv.score}</span>
                <span className="activity-time">{new Date(inv.date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <p>No activity yet. Start practicing!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
