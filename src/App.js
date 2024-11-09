import React from 'react';
import Timer from './components/Timer';
import './App.css';
const App=()=>{
   return(
     <div className='first-container'>
        <h1>Timer</h1>  
        <div> 
            <Timer/>

        </div>
     </div>
   )
}
export default App;