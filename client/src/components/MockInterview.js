import React, { useState } from 'react';

const interviewTypes = ['Technical', 'Behavioral', 'System Design', 'General'];

function MockInterview({ users }) {
  const [selectedType, setSelectedType] = useState('');
  const [feedback, setFeedback] = useState('');
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!selectedType) return;
    setStarted(true);
    setFeedback(`Mock interview completed for "${selectedType}" type.\n\nStrengths: Good communication, clear thinking.\nAreas to improve: Provide more structured answers using the STAR method.\nOverall score: 7.5/10`);
  };

  return (
    <div className="section">
      <div className="section-title">Mock Interview</div>
      {!started ? (
        <div>
          <div className="form-group">
            <label>Select Interview Type</label>
            <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
              <option value="">-- Choose type --</option>
              {interviewTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <button className="btn btn-gold" onClick={handleStart}>Start Mock Interview</button>
        </div>
      ) : (
        <div>
          <div className="feedback-box">{feedback}</div>
          <button className="btn btn-primary" style={{marginTop:16}} onClick={() => { setStarted(false); setFeedback(''); setSelectedType(''); }}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default MockInterview;
