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
import ForWho from './ForWho/ForWho'
import CarouselModul from './CarouselModul/CarouselModul'
import { FaArrowRight } from "react-icons/fa";
import {ReactComponent as Zero01} from '../../assets/images/Zero01.svg'
import {ReactComponent as Zero02} from '../../assets/images/Zero02.svg'
import {ReactComponent as Zero03} from '../../assets/images/Zero03.svg'
import {ReactComponent as Zero04} from '../../assets/images/Zero04.svg'
import {ReactComponent as Zero05} from '../../assets/images/Zero05.svg'
import {ReactComponent as Zero06} from '../../assets/images/Zero06.svg'



function First() {
 
  return (
    <div className='firstMain'>
      
       
        <Navbar/>

        <div className='CreativeBlock'>
            <div className='smmCreative'>SMM <br/>CREATIVE</div>
            <div className='textCreative'>
                <div className='smmText'>Shunchaki SMM’ni bilish kamlik qiladi,<br/>
                “SMM Creative” kursi - boshqacha yondashuv</div>
                <div className=' button' id="buttonInviseble"><ShadowButton/></div>
            </div>

        </div>

        <div className='MainImg' style={{position: "relative"}}>
          <img  className='MainUO' src={MainUO}/>
          <h4 className='AsosiySpiker'>ASOSIY SPIKER:<br/>
          <span className='UmidjonOrtiqov'>UMIDJON ORTIQOV</span></h4>
        </div>
      

        <Wheel/>
        <div className=' button' id="buttonInvisebleMob"><ShadowButton/></div>

        <div className="AfterCourse">
         <Textline/>

          <div className='LinesBlocks'>
            <div className='FirstLines'>

              <div className='LineBLock LineBLock1'>
                <div className='LineNumber'>
                  <div className='zeroNumber'><Zero01/></div>
                  <hr className='hrBlocks'/>
                </div>
                <h5 className='LinesText'>Portfolioga ega bo‘lmasdan mijoz topish va buyurtma olish</h5>
              </div>
              
              <div className='LineBLock LineBLock2'>
                <div className='LineNumber'>
                  <div className='zeroNumber'><Zero02/></div>
                    <hr className='hrBlocks'/>
                </div>
                <h5 className='LinesText'>Qimmat mijozlarni qayerdan topish va ular bilan ishlash</h5>
              </div>

              <div className='LineBLock LineBLock3'>
                <div className='LineNumber'>
                  <div className='zeroNumber'><Zero03/></div>
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

        <ForWho/>
        <ColorBlock/>
        <div className='PaddingDiv' id="Dastur"></div>
        <div className='ForWhoH2'>
            <h2>KURS DASTURI BILAN TANISHING</h2>
        </div>
        <CarouselModul/>
        <div className='ColorBlock'>
   
          <div className='ColorBlockCenter'>
              <h2 className='ColorBlockH2'>O‘quvchilar uchun bonuslar</h2>
              <p className='ColorBlockP'>Biz o‘quvchilarga shunchaki dars beribgina qolmay, ular uchun foydali bo‘lgan bonuslarni ham taqdim etamiz</p>
              <a href="#"><div className='ShadowBtn'>
                <p className='InBtn'>Bonuslarni ko‘rish<FaArrowRight/></p>
              
                </div>
              </a>
          </div>
        </div>
        <div className='PaddingDiv' id="PaddingDiv">
        <div className='ForWhoH2White'>
          <h2 className='ForWhoH2Text' id='kursSpikeri'>KURS SPIKERLARI BILAN TANISHING</h2>
        </div>
        </div>
        <TabPanel/>
       
        <ColorBlock/>
        <div id="midWheel">
          <Wheel/>
        </div>
    </div>
  )
}

export default First
