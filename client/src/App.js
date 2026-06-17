import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MCQTest from './components/MCQTest';
import CodingChallenge from './components/CodingChallenge';
import MockInterview from './components/MockInterview';
import Analytics from './components/Analytics';
import Dashboard from './components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    fetch('/api/users').then(r=>r.json()).then(setUsers).catch(()=>{});
    fetch('/api/questions').then(r=>r.json()).then(setQuestions).catch(()=>{});
    fetch('/api/interviews').then(r=>r.json()).then(setInterviews).catch(()=>{});
  }, []);

  const renderTab = () => {
    switch(activeTab) {
      case 'mcq': return <MCQTest questions={questions} />;
      case 'coding': return <CodingChallenge questions={questions} />;
      case 'mock': return <MockInterview users={users} />;
      case 'analytics': return <Analytics questions={questions} interviews={interviews} />;
      case 'dashboard': return <Dashboard questions={questions} interviews={interviews} users={users} />;
      default: return <Dashboard questions={questions} interviews={interviews} users={users} />;
    }
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderTab()}
      </main>
    </div>
  );
}

export default App;
