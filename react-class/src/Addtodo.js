import React,{useState} from 'react'
import Viewtodo from './Viewtodo'
import {useDispatch} from 'react-redux'
import {addtodo} from './store/actions'
function Addtodo() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('im in submit')
        let newObj = {title:title, id:Math.random()*Math.random()}
        dispatch(addtodo(newObj));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id='title' 
                onChange={(e)=>settitle(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            <Viewtodo/>
        </div>
    )
}

export default Addtodo
