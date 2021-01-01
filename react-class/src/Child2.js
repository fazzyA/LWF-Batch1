import { SettingsInputAntenna } from '@material-ui/icons'
import React,{useContext} from 'react'
import { MyContext } from './MyContext'

function Child2() {
    const context = useContext(MyContext)
    console.log(context)  //state 0, setstate 1
   const handleClick =()=>{
       console.log(context[1])
    //    setstate({num: 2})

    }
    return (
        <div>
            text: {context[0].text}<br/>
            Num: {context[0].num}<br/>
            List: {
                context[0].list.map(
                    (item)=>(
                        <div key={item.id}>{item.title}</div>

                    )
                )
            }
            <button onClick={()=>handleClick()}>Inc</button>
        </div>
    )
}

export default Child2
