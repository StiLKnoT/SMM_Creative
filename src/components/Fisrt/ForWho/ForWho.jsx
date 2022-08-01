import React from 'react'
import imgFor from '../../../assets/images/ForWho1.png'
import './ForWho.css'
import IconMan from '../../../assets/images/IconMan.png'

function ForWho() {
  return (
    <div className='ForWho'>
          
        <div className='ForWhoH2'>
            <h2>BU KURS KIMLAR UCHUN MOS KELADI?</h2>
        </div>
       
        <div className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan}/>

                </div>
                <h2 className='ForLeftH2'>SMM mutaxassisi bo‘lib ishlamoqchi bo‘lganlar uchun</h2>
                <p>Siz SMM nimaligini bilmaysiz va hali bu sohada ishlab ko‘rmagansiz.</p>
                <div className='ForWhoForm'></div>

            </div>
            <div className='ForWhoRight'>
                <img src={imgFor}/>
            </div>

        </div>
      
    </div>
  )
}

export default ForWho
