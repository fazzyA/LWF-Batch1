import React,{useContext} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from './redux/Action'
function Child2() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            {` Num: ${state.num}

            Num2: ${state.num2}`}<br/>

            <button onClick={()=>dispatch(increment())}>Inc</button>
            <button onClick={()=>dispatch(decrement())}>Dec</button>
        </div>
    )
}

export default Child2
