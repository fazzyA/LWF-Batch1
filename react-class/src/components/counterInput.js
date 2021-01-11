import React from 'react'
import {useDispatch} from 'react-redux'
 import { decrementAction, incrementAction } from '../store/mainSlice'

function CounterInput() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(incrementAction())}>+</button>
            <button onClick={()=>dispatch(decrementAction())}>-</button>
        </div>
    )
}

export default CounterInput
