import React,{useState} from 'react'

function Light() {
const [lit, setlit] = useState(true)
let myclass = lit ? 'light':'dark'
return (
        <div className={myclass}>
            {/* <button onClick={()=>setlit(true)}>On</button>
            <button onClick={()=>setlit(false)}>Off</button> */}
            <button onClick={()=>setlit(!lit)}>toggle</button>
        </div>
    )
}

export default Light
