import React from 'react'
import Navbar from '../navbar/Navbar'
import './First.css'

function First() {
  return (
    <div className='firstMain'>
        <Navbar/>
        <div className='CreativeBlock'>
            <div className='smmCreative'>SMM <br/>CREATIVE</div>
            <hr className='line'/>
            <div className='textCreative'>
                <div className='smmText'>Shunchaki SMM’ni bilish kamlik qiladi,<br/>
“SMM Creative” kursi - boshqacha yondashuv</div>
                <div className=' button'>Kursga yozilish</div>
            </div>

        </div>
      
    </div>
  )
}

export default First
