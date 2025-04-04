import React from 'react';

const TestComponent = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      color: '#333', 
      textAlign: 'center',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1>Test Component</h1>
      <p>If you can see this, React is rendering correctly!</p>
    </div>
  );
};

export default TestComponent; 