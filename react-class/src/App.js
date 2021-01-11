import React,{useState} from 'react'
import Addtodo from './components/Addtodo'
import CounterInput from './components/counterInput'
import CounterOutput from './components/CounterOutput'
function App() {
  return (
      <div>
        <CounterOutput/>
        <CounterInput/>
        <hr/>
        <Addtodo/>
    </div>

  )
}

export default App
