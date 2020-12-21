///takes color and bgcolor , 
////apply these in div
import React from 'react'

function Child({color, bg,num}) {
    return (
        <div style={{color:color,backgroundColor:bg}}>
           
            Hi i am child {num}
        </div>
    )
}

export default Child
