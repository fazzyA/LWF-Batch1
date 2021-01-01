import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { MyContext } from './MyContext'

function App() {
  const [state, setstate] = useState(
    {
      num: 0,
      text: 'My class of context api',
      list:[{title:'task1', id:1}]
    }
  )
  return (
    <MyContext.Provider value={[state, setstate]}>
    <div>
      <Child1/>
      <Child2/>
    </div>
    </MyContext.Provider>
  )
}

export default App
