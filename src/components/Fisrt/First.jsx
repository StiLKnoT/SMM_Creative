import React from 'react'
import TabPanel from './KursDasturi/TabPanel'
import Navbar from '../navbar/Navbar'
import './First.css'
import MainUO from '../../assets/images/mainUO.png'
import sunIcon from '../../assets/images/sun.png'
import Textline from '../atom/Textline/Textline'
import Wheel from './Wheel/Wheel'
import ColorBlock from './ColorBlock/ColorBlock'
import ShadowButton from '../atom/buttons/ShadowButton'
import KursCarousel from './KursCarousel/KursCarousel'

function First() {
 
  return (
    <div className='firstMain'>
        <Navbar/>

        <div className='CreativeBlock'>
            <div className='smmCreative'>SMM <br/>CREATIVE</div>
            <div className='textCreative'>
                <div className='smmText'>Shunchaki SMM’ni bilish kamlik qiladi,<br/>
                “SMM Creative” kursi - boshqacha yondashuv</div>
                <div className=' button'><ShadowButton/></div>
            </div>

        </div>

        <div className='MainImg' style={{position: "relative"}}>
          <img  className='MainUO' src={MainUO}/>
          <h4 className='AsosiySpiker'>ASOSIY SPIKER:<br/>
          <span className='UmidjonOrtiqov'>UMIDJON ORTIQOV</span></h4>
        </div>

        <Wheel/>

        <div className="AfterCourse">
         <Textline/>

          <div className='LinesBlocks'>
            <div className='FirstLines'>

              <div className='LineBLock LineBLock1'>
                <div className='LineNumber'>
                  <div className='zeroNumber'>01</div>
                  <hr className='hrBlocks'/>
                </div>
                <h5 className='LinesText'>Portfolioga ega bo‘lmasdan mijoz topish va buyurtma olish</h5>
              </div>
              
              <div className='LineBLock LineBLock2'>
                <div className='LineNumber'>
                  <div className='zeroNumber'>02</div>
                    <hr className='hrBlocks'/>
                </div>
                <h5 className='LinesText'>Qimmat mijozlarni qayerdan topish va ular bilan ishlash</h5>
              </div>

              <div className='LineBLock LineBLock3'>
                <div className='LineNumber'>
                  <div className='zeroNumber'>03</div>
                    <hr className='hrBlocks'/>
                </div>
                <h5 className='LinesText'>O‘z biznesingizga yoki loyihangizga mijozlar oqimini tashkil qilish</h5>
              </div>
            </div>

            <div className='SecondLines'>
              <div className='LineBLock4'></div>
              <div className='LineBLock5'></div>
              <div className='LineBLock6'></div>
            </div>
          </div>
        </div>
        <ColorBlock/>
        
        <TabPanel/>
        <KursCarousel/>
        <ColorBlock/>
    </div>
  )
}

export default First
