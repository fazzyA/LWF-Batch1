import React from 'react'
import {useDispatch} from 'react-redux'
import Addtodo from './Addtodo'
 import { decrementAction, incrementAction } from './store/slice'

function CounterInput() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(incrementAction())}>+</button>
            <button onClick={()=>dispatch(decrementAction())}>-</button>
            <Addtodo/>
        </div>
    )
}

export default CounterInput
