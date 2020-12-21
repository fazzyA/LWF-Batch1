import React,{useState} from 'react'
import Child from './Child'
import Parent from './Parent'

function MediaCard({ title, body, imageUrl }) {
const [check, setcheck] = useState(false)
    return (
        <>
        {check ? (<Child/>):(<Parent/>)}
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imageUrl} alt=''/>

        </>
    )
}
export default MediaCard