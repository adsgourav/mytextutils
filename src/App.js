import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "#ddecea";
      showAlert("Light Mode Enabled", "success");
      // document.title = "TextUtils";
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      {/* <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route> */}
      {/* <Route exact path="/"> */}
      <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />
      {/* </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
