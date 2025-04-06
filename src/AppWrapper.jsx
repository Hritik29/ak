import React from 'react';
import App from './App';
import TestComponent from './TestComponent';

const AppWrapper = () => {
  // This will help us determine which component to render
  const [showTest, setShowTest] = React.useState(true);
  
  console.log('AppWrapper is rendering, showTest:', showTest);
  
  // After 5 seconds, switch to the App component
  React.useEffect(() => {
    console.log('Setting up timer to switch to App component');
    const timer = setTimeout(() => {
      console.log('Timer fired, switching to App component');
      setShowTest(false);
    }, 5000);
    
    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div>
      {showTest ? (
        <div>
          <TestComponent />
          <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
            <p>Switching to main app in 5 seconds...</p>
            <p>Current time: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      ) : (
        <div>
          <App />
          <div style={{ textAlign: 'center', marginTop: '20px', color: 'green' }}>
            <p>Successfully switched to main app!</p>
            <p>Current time: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppWrapper; 