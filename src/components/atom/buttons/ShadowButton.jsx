import React from 'react'
import './ShadowButton.css'
import { FaArrowRight } from "react-icons/fa";

function ShadowButton() {
  return (
    <a href="#"><div className='ShadowBtn'>
        <p className='InBtn'>Kursga yozilish <FaArrowRight/></p>
      
    </div>
    </a>
  )
}

export default ShadowButton
