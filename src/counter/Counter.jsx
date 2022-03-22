import React from 'react'
import './counter.scss'
import { useState } from 'react'
// import {AiOutlineCheckCircle} from 'react-icons/ai'
// import {AiFillCheckCircle} from 'react-icons/ai'

const Counter = () => {
  
  const [isComplete,setComplete] = useState(false);
  
  
  return (
    <div className="my-10 form-item">
        
        <select onChange={() => setComplete(true)} className="shadow-md border-solid border-2 px-2 border-indigo-600 bg-white rounded-md" type="text">
        <option value="1">1</option>
        <option value="2">2</option>
        </select>
    </div>
  )
}

export default Counter