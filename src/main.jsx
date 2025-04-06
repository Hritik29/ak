import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './AppWrapper.jsx'
import './index.css'

// Add some debugging to help identify any issues
console.log('Starting to render the app...');

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>,
  );
  console.log('App rendered successfully!');
} catch (error) {
  console.error('Error rendering the app:', error);
}
