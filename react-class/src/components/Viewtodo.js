import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { deletetodo } from '../store/mainSlice'

function Viewtodo() {
 const todos = useSelector(state => state.todos)
 const dispatch = useDispatch()
 console.log(todos)
    return (
        <div>
            {
                todos.map((item)=>(
                    <div key={item.id}>
                    <div>{item.title} </div>
                    <button onClick={()=>dispatch(deletetodo(item.id))}>x</button>
                    </div>

                ))

            }
        </div>
    )
}

export default Viewtodo
