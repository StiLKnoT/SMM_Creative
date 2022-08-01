import React from 'react'
import ShadowButton from '../../atom/buttons/ShadowButton'
import './ColorBlock.css'

function ColorBlock() {
  return (
    <div className='ColorBlock'>
        <hr className='hrLines'/>
        <div className='ColorBlockCenter'>
            <h2 className='ColorBlockH2'>HOZIROQ KURSIMIZGA YOZILING!</h2>
            <p className='ColorBlockP'>Hozirgi kundagi zamonaviy hamda daromadli kasbni biz bilan professional darajada  o‘rganing. Vaqtni boy bermang!</p>
            <ShadowButton/>
        </div>
        <hr className='hrLines'/>

      
    </div>
  )
}

export default ColorBlock
