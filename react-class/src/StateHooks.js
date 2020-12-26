import React,{ useState} from 'react'

function StateHooks() {
    const [num, setnum] = useState(10)
    const [num2, setnum2] = useState(9)
    const [books, setbooks] = useState([
        {title:'lord',author: 'stephen',id:1},
        {title:'harrypotter',id:2}
    ])
    return (
        <div>
            My number = {num}<br/>
            Second num = {num2}<br/>
            { books.map(
                (item)=>(
                    <div key={item.id}>
                    <div>{item.title}</div> 
                    <div>{item.author}</div> 
                    </div>
                    )
            ) }
            <button onClick={()=>setnum(num2)}>Change num to 9</button>
        </div>
    )
}

export default StateHooks
