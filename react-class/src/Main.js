import React, { useState } from 'react'

function Main() {
    const [task, settask] = useState([
        { title: 'buy milk', id: 1 },
        { title: 'prepare tea', id: 2 }
    ])
    const [title,settitle] = useState('');
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
          id: task.length+1
      }
      settask([...task, newObj])

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todo' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <h2> To do list</h2>
            {
                task.map(
                    (item) => (
                        <>
                        <div key={item.id}>{item.title}</div>
                        {/* <div>{item.id}</div> */}
                        </>
                    )
                )
            }
        </div>
    )
}

export default Main
