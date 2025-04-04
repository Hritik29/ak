import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TestComponent from './TestComponent.jsx'
import './index.css'

// Try rendering the test component first to see if React is working
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>,
)
