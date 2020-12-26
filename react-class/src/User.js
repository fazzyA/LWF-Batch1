import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
function User() {

    let { id } = useParams();
    const [user, setusr] = useState({})
useEffect(
    ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            console.log(res.data)
            setusr(res.data)

        })
        .catch(err=>console.log('my error',err))

    }
    , []

)

return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {/* <p>{user.address.street}</p> */}
            <p>{user.name}</p>
        </div>
    )
}

export default User
