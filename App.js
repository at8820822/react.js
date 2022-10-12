

import './App.css';
import About from './component.js/About';
import Data from   './component.js/Data';
import Navbar from  './component.js/Navbar';
import TextForm from './component.js/TextForm';

import React ,{useState} from 'react';


 
function App() {
  const [mode ,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
   else 
   {
    setMode('light');
    document.body.style.backgroundColor='white';
   }
   }
  return (
<> 
<Navbar title="textutils" mode={mode} toggleMode={toggleMode} />

<Data mode={mode}/>
<About mode={mode}/>
<TextForm heading='Text Area' mode={mode}/>
</>
  );
  }

export default App;
