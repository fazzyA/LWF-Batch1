import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            I am in Home  <Link to='/about'>About Us</Link>

        </div>
    )
}

export default Home
