
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
const toggleMode = () => {
  if(mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "success");
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    setAlert("Light mode has been enabled", "success");
  }
}
  return (
    <>
   {/* <Navbar title={"TextUtils2"} aboutText="About TextUtils"/> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   
   <div className="container my-3">
   <TextForm heading="enter the text to analyze" mode={mode} />
   {/* <About /> */}
   
   </div>
    </>//jsx fragment
  );
}

export default App;
