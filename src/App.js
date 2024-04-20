
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const allClasses=['warning','primary','success','danger','success'];
  const [mode,setMode]=useState('light');  
  const [alert,setAlert]=useState(null)
  const [cls,setCls]=useState('primary')
  const removeBodyClasses=()=>{
    console.log(document.body.classList)
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
     
  }
  const toggleMode=()=>{
    removeBodyClasses()
    console.log(mode)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'Text Utils Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
      document.title = 'Text Utils Light Mode'
    }
  }

  const toggleColor=(cls)=>{
    const classT=allClasses.find(cl=>cl!==cls)
    removeBodyClasses()
    setCls(classT)
    document.body.classList.add('bg-'+cls)
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type
    })
    setTimeout(() => { setAlert(null) }, 1000)
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={<Textform heading='enter your text herre' mode={mode} showAlert={showAlert} cls={cls} />}
            ></Route>
            <Route
              exact path="/about"
              element={<About mode={mode}/>}
            ></Route>
            {/* <Textform heading='enter your text herre' mode={mode} showAlert={showAlert} />
            <About /> */}
          </Routes>
        </div>

      </Router>
    </>
  )
}
export default App;
