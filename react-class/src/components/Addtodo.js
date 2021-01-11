import React,{useState} from 'react'
import Viewtodo from './Viewtodo'
import {useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addtodo } from '../store/mainSlice';
function Addtodo() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('im in submit')
        let newObj = {title, id:uuidv4()}
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
