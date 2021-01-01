import React from 'react'
import { MyContext } from './MyContext'

function Child1() {
    return (
        <MyContext.Consumer>
            {
                (context) => (
                 <div>
                <h1>{context[0].text}</h1> 
                </div>

                )
            }
        </MyContext.Consumer>
    )
}

export default Child1
