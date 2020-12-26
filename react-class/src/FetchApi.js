import axios from 'axios'
import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// axios.get=>res
//store res in state
//Show UI From state
function FetchApi() {
const [users, setusers] = useState([])
    useEffect(
    ()=>{
        console.log('im in useEffect')
        ///fetch API here
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res.data)
            setusers(res.data)
        })
        .catch(err=>console.log(err))
    } , []
)
    return (
        <div className='box'>
            <ul>
            {
                users.map(
                    (item)=>(
                        <li key={item.id}><Link to={`/users/${item.id}`}>{item.name} | {item.username}</Link></li>
                        )
                )
            }
            </ul>

        </div>
    )
}

export default FetchApi
