import React from 'react'
import './ShadowButton.css'
import { FaArrowRight } from "react-icons/fa";

function ShadowButton(props) {
  return (
    <button className='ShadowBtn' onClick={props.onclick}  >
        <p className='InBtn'>{props.text ? props.text : "Kursga yozilish"}<FaArrowRight/></p>
      
    </button>
    
  )
}

export default ShadowButton
