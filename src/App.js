import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';


// fuction
function App() {
  const [mode, setMode] = useState("white")
  const toggleMode = () =>{
    if (mode === 'white'){
      setMode('black')
      document.body.style.backgroundColor = "black"
    }
    else{
      setMode('black')
      document.body.style.backgroundColor = "white"
    }
      
  }
  return (
    <>
    {/* <Navbar/> */}
    <Navbar title="devARcoder" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the Text to Analyze"/>
    {/* <About /> */}
    </>
  );
}

export default App;
