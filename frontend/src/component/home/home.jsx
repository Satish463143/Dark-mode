import React from 'react'

import './home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className='container'>
        <div className="title" >
            <h1>Hello world</h1>
            <Link to="/about">
            <p>This is box</p>
            </Link>
        </div>
        
    </div>
  )
}

export default home