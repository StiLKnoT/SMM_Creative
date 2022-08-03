import React from 'react'
import './ShadowButton.css'
import { FaArrowRight } from "react-icons/fa";

function ShadowBtn(props) {
  return (
    <button className='ShadowBtn2' onClick={props.onclick}  >
        <p className='InBtns'>{props.text ? props.text : "Kursga yozilish"}<FaArrowRight/></p>
      
    </button>
    
  )
}

export default ShadowBtn