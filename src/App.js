import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  
  const showAlert =(message, type) =>{
      setalert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  const toggleMode= () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='#1e2225';
        showAlert('Dark mode has been enabled','success')
        
    }
    else{
        setMode('light');
        document.body.style.backgroundColor ='white';
        showAlert('Light mode has been enabled', 'success')
        
    }
   
  }

  return (
   <>
   <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText='About'/>
   <Alert alert= {alert} />
   
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
          <About title = "ABOUT US" mode={mode} />
          </Route>
          <Route exact path="/">
            <Textform title = "TextUtils - Word Counter, Character Counter" mode={mode} showAlert={showAlert}/>
          </Route>
   </Switch>
  
   </div>
   </Router>
   
   </>
  );
}
 
export default App;
