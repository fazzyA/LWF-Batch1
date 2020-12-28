import React, { useState } from 'react'
import {useTransition, animated} from 'react-spring'

function Main() {
    const [task, settask] = useState([
        { title: 'buy milk', id: 1 },
        { title: 'prepare tea', id: 2 }
    ])
        const [title,settitle] = useState('');
///animation
const transitions = useTransition(task, task => task.id, {
    from :{ marginLeft: - 500},
    enter: {marginLeft: 20}})


    //  let res =  books.filter((item)=>item.id!=2)
   const handleChange = (e) => {
        console.log('change')
        console.log(e.target.value)
        settitle(e.target.value)

    }
  const  handleSubmit = (e) => {
      e.preventDefault();
      let newObj = {
          title: title,
          id: task.length+2
      }
      settask([...task,newObj])
    //   console.log(e.target.firstChild.value)
    //   e.target.firstChild.value= '';

    }
    console.log(transitions)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todo' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <h2> To do list</h2>
            {
                 transitions.map(
                     ({ item, props, key }) =>
                 <animated.div key={key} style={props}>{item.title}</animated.div>
                 )
            }
        </div>
    )
}

export default Main
