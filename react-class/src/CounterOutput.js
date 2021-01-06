import React from 'react'
import {useSelector} from 'react-redux'

function CounterOutput() {
    const count = useSelector(state => {
        console.log(state)
        return state.counter
    })
    return (
        <div>
            counter value: {count}
        </div>
    )
}

export default CounterOutput
