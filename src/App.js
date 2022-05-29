import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },3000);

}


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
     
      document.body.style.backgroundColor='#121212'
      document.body.style.color='white'
      showAlert('Dark mode has been enabled','success')
      document.title='Textutils - Darkmode'
    }
    else{
      setMode('light')

      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert('Light mode has been enabled','success')
      document.title='Textutils - Lightmode'
    }
  }
  return (

    <>
    <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
       <About/>
    </div>
   
    </>
  )
    

}

export default App;
