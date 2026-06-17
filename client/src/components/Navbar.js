import React from 'react';

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: '📊' },
  { key: 'mcq', label: 'MCQ Tests', icon: '📝' },
  { key: 'coding', label: 'Coding Challenges', icon: '💻' },
  { key: 'mock', label: 'Mock Interviews', icon: '🎤' },
  { key: 'analytics', label: 'Analytics', icon: '📈' },
];

function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <span>Interview</span>Platform
      </div>
      <ul className="sidebar-nav">
        {tabs.map(tab => (
          <li
            key={tab.key}
            className={activeTab === tab.key ? 'active' : ''}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="nav-icon">{tab.icon}</span>
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
