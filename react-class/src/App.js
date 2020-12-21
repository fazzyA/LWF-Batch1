import React, { useState } from 'react'
import './App.css';
import Main from './Main';
import Show from './Show';
import ShowClasss from './ShowClasss';

function App() {
  //let name = 'faiza
  // name = 'Abeer'
 const [name, setname] = useState('faiza')
 const [name2, setname2] = useState('Abeer')
 let [num, setnum] = useState(0);
 const inc = ()=>{
   console.log('im in inc')
   setnum(++num)
 }
 const dec = ()=>{
   console.log('im in dec')
   setnum(--num)
 }
  return (
    <div className="App">
      <Main/>
      </div>
    // 
    // Current value = {num}<br/>
    //   <button onClick={()=>inc()}>+</button>
    //   <button onClick={()=>dec()}>-</button><hr/>
    //   <button onClick={()=>setname(10)}>See full name</button>
    //  My name is {name}
    //   {/* <Show name={name} number={num}/>*/}
    //   <ShowClasss/> 
    // </div>
  );
}

export default App;
