import React from 'react'
import './toogle.css'

const toogle = ({handleChange,isChecked}) => {
  return (
    <div>
        <input
         type="checkbox"
         id='check'
         className='toogle'
         onChange={handleChange}
         checked={isChecked}        
        />
        <label htmlFor="check">Dark Mode</label>
    </div>
  )
}

export default toogle