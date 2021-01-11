import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { deletetodo } from './store/slice'

function Viewtodo() {
 const todos = useSelector(state => state.todos)
 const dispatch = useDispatch()
 console.log(todos)
    return (
        <div>
            {
                todos.map((item)=>(
                    <>
                    <div key={item.id}>{item.title} </div>
                    <button onClick={()=>dispatch(deletetodo(item.id))}>x</button>
                    </>

                ))

            }
        </div>
    )
}

export default Viewtodo
