import React, { useState } from 'react';

function CodingChallenge({ questions }) {
  const coding = questions.filter(q => q.type === 'coding');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [output, setOutput] = useState('');

  if (coding.length === 0) {
    return <div className="section"><p>No coding challenges available. Run the seed script to add questions.</p></div>;
  }

  const q = coding[currentIndex];

  const handleRun = () => {
    setOutput('> Code executed successfully (simulated)\n> Output: [Function defined correctly]');
  };

  return (
    <div className="section">
      <div className="section-title">Coding Challenges</div>
      <div className="question-card">
        <span className="category-tag">{q.category}</span>
        <span className="difficulty-badge">{q.difficulty}</span>
        <div className="question-text">{q.question}</div>
        <div className="coding-editor">{`// Write your solution here\n\n${q.correctAnswer}`}</div>
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <button className="btn btn-gold" onClick={handleRun}>▶ Run</button>
          <button className="btn btn-outline" onClick={() => setCurrentIndex((currentIndex + 1) % coding.length)}>Next Challenge</button>
        </div>
        {output && <div className="feedback-box">{output}</div>}
      </div>
    </div>
  );
}

export default CodingChallenge;
