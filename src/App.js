
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');  
  const [alert,setAlert]=useState(null)
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Dark mode has been enabled','success')
      document.title='Text Utils Dark Mode'
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('light mode has been enabled','success')
      document.title='Text Utils Light Mode'
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type
    })
    setTimeout(()=>{setAlert(null)},1000)
  }
  return ( 
    <>
    {/* <Router> */}
      <Navbar mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
            {/* <Route */}
             {/* exact path="/" */}
            <Textform heading='enter your text herre' mode={mode} showAlert={showAlert} />
            {/* ></Route> */}
            {/* <Route
              exact path="/about"
              element={ <About/>}
            ></Route> */}
         {/* <Textform heading='enter your text herre' mode={mode} showAlert={showAlert}/>
        <About/> */}
        {/* </Routes> */}
      </div>
      
      {/* </Router> */}
    </>
  )
}
export default App;
