import React from 'react';
import App from './App';
import TestComponent from './TestComponent';

const AppWrapper = () => {
  // This will help us determine which component to render
  const [showTest, setShowTest] = React.useState(true);
  
  // After 5 seconds, switch to the App component
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTest(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      {showTest ? (
        <div>
          <TestComponent />
          <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
            <p>Switching to main app in 5 seconds...</p>
          </div>
        </div>
      ) : (
        <App />
      )}
    </div>
  );
};

export default AppWrapper; 