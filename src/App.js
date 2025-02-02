import './App.css'
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Resources from './components/Resources';
import Home from './components/Home';
import Footer from './components/Footer';
import React, { useState } from 'react';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const handleToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh' }}>
      <Router>
        <Navbar title="StringStudio" about="About" resources="Resources" home="Home" textform="Tools" mode={mode} toggleMode={handleToggleMode} />
        <Alert alert={alert} />
        <main style={{ flex: 1 }}>
          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About mode={mode} />} />
              <Route exact path="/resouces" element={<Resources mode={mode} />} />
              <Route exact path="/" element={<Home mode={mode} />} />
              <Route exact path="/TextForm" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
            </Routes>
          </div>
        </main>
        <Footer mode={mode} />
      </Router>
    </div>
  );
}

export default App;
