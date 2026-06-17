import React from 'react';

function Analytics({ questions, interviews }) {
  const mcqCount = questions.filter(q => q.type === 'mcq').length;
  const codingCount = questions.filter(q => q.type === 'coding').length;

  const byCategory = {};
  questions.forEach(q => {
    byCategory[q.category] = (byCategory[q.category] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(byCategory), 1);

  const weakTopics = Object.keys(byCategory).filter(k => (byCategory[k] || 0) < 3);

  return (
    <div>
      <div className="section">
        <div className="section-title">Performance Analytics</div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-value">{mcqCount}</div>
            <div className="stat-label">MCQ Questions</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💻</div>
            <div className="stat-value">{codingCount}</div>
            <div className="stat-label">Coding Challenges</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎤</div>
            <div className="stat-value">{interviews.length}</div>
            <div className="stat-label">Interviews Taken</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-value">{Object.keys(byCategory).length}</div>
            <div className="stat-label">Topics Covered</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Questions by Category</div>
        {Object.entries(byCategory).map(([cat, count]) => (
          <div className="chart-bar" key={cat}>
            <div className="chart-label">{cat}</div>
            <div className="chart-track">
              <div className="chart-fill" style={{width: `${(count / maxCount) * 100}%`}}>{count}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-title">Weak Topic Detection</div>
        {weakTopics.length > 0 ? (
          <div className="topic-list">
            {weakTopics.map(t => <span key={t} className="topic-tag weak">{t} (needs practice)</span>)}
          </div>
        ) : (
          <p>No weak topics detected. Keep up the good work!</p>
        )}
        <p style={{fontSize:13,color:'#888',marginTop:8}}>Topics with fewer than 3 questions are flagged as weak areas.</p>
      </div>
    </div>
  );
}

export default Analytics;
