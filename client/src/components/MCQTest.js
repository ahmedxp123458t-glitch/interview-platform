import React, { useState } from 'react';

function MCQTest({ questions }) {
  const mcqs = questions.filter(q => q.type === 'mcq');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [finished, setFinished] = useState(false);

  if (mcqs.length === 0) {
    return <div className="section"><p>No MCQ questions available. Run the seed script to add questions.</p></div>;
  }

  if (finished) {
    const percentage = Math.round((score / mcqs.length) * 100);
    return (
      <div className="section">
        <div className="score-display">
          <div className="score-number">{score}/{mcqs.length}</div>
          <div className="score-label">Final Score</div>
          <div className="progress-bar"><div className="progress-fill" style={{width: percentage + '%'}}></div></div>
          <p style={{marginTop:12}}>{percentage >= 70 ? 'Great job!' : percentage >= 40 ? 'Good effort!' : 'Keep practicing!'}</p>
          <button className="btn btn-gold" style={{marginTop:16}} onClick={() => { setCurrentIndex(0); setSelected(null); setScore(0); setAnswered(0); setFinished(false); }}>Restart</button>
        </div>
      </div>
    );
  }

  const q = mcqs[currentIndex];

  const handleSelect = (opt) => {
    if (selected) return;
    setSelected(opt);
    setAnswered(answered + 1);
    if (opt === q.correctAnswer) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentIndex < mcqs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const progress = ((answered) / mcqs.length) * 100;

  return (
    <div className="section">
      <div className="section-title">MCQ Test</div>
      <div className="progress-bar"><div className="progress-fill" style={{width: progress + '%'}}></div></div>
      <p style={{fontSize:13,color:'#888',marginBottom:16}}>Question {currentIndex + 1} of {mcqs.length}</p>
      <div className="question-card">
        <span className="category-tag">{q.category}</span>
        <span className="difficulty-badge">{q.difficulty}</span>
        <div className="question-text">{q.question}</div>
        <div className="options-list">
          {q.options.map((opt, i) => {
            let cls = 'option-btn';
            if (selected) {
              if (opt === q.correctAnswer) cls += ' correct';
              else if (opt === selected) cls += ' wrong';
            } else if (opt === selected) cls += ' selected';
            return (
              <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={!!selected}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>
      {selected && <button className="btn btn-primary" onClick={handleNext} style={{marginTop:12}}>{currentIndex < mcqs.length - 1 ? 'Next Question' : 'Finish'}</button>}
    </div>
  );
}

export default MCQTest;
