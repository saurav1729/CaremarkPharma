import React from 'react'
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
