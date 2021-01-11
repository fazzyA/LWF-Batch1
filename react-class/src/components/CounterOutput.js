import React from 'react'
import {useSelector} from 'react-redux'

function CounterOutput() {
    const count = useSelector(state => {
        return state.counter
    })
    return (
        <h1>
            counter value: {count}
        </h1>
    )
}

export default CounterOutput
