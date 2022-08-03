import React from 'react'
import { useState } from 'react'
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
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col'
import { ReactComponent as Zero01 } from '../../assets/images/Zero01.svg'
import { ReactComponent as Zero02 } from '../../assets/images/Zero02.svg'
import { ReactComponent as Zero03 } from '../../assets/images/Zero03.svg'
import { ReactComponent as Zero04 } from '../../assets/images/Zero04.svg'
import { ReactComponent as Zero05 } from '../../assets/images/Zero05.svg'
import { ReactComponent as Zero06 } from '../../assets/images/Zero06.svg'
import Line from '../../assets/icons/line.png';
import TopLine from '../../assets/icons/topLine.png';
import lines from '../../assets/icons/arrowBlock.png';
import { BsTriangle } from "react-icons/bs";
import Word from '../../assets/images/Word.png'
import Excell from '../../assets/images/Excell.png'
import PowerP from '../../assets/images/PowerP.png'
import Video from '../../assets/images/Video.png'


function First() {
  const [btnBonus, setBtnBonus] = useState(false);
  return (
    <div className='firstMain'>


      <Navbar />

      <div className='CreativeBlock'>
        <div className='smmCreative'>SMM <br />CREATIVE</div>
        <div className='textCreative'>
          <div className='smmText'>Shunchaki SMM’ni bilish kamlik qiladi,<br />
            “SMM Creative” kursi - boshqacha yondashuv</div>
          <div className=' button' id="buttonInviseble"><a href='#tariflar'><ShadowButton /></a></div>
        </div>

      </div>

      <div className='MainImg' style={{ position: "relative" }}>
        <>
          <img className='MainUO' src={MainUO} />
          <h4 className='AsosiySpiker'>ASOSIY SPIKER:<br />
            <span className='UmidjonOrtiqov'>UMIDJON ORTIQOV</span></h4>
        </>
        <>
          <div className="forBtnSlide"> <p className='slideBtnParam'>
            <a id='strelka' href="#Dastur">
            <div className='forBtnFlat'>
              <BsTriangle /><BsTriangle /><BsTriangle />
            </div>

             PASTGA SURING</a></p> 
             </div>
        </>
      </div>


        <Wheel/>
      <div className=' button' id="buttonInvisebleMob"><a href='#tariflar'><ShadowButton /></a></div>

      {/* <Textline /> */}

      <img className="firsLines" src={lines} />


      <ForWho />
      <ColorBlock />
      <div className='PaddingDiv' id="Dastur"></div>
      <div className='ForWhoH2'>
        <h2>KURS DASTURI BILAN TANISHING</h2>
      </div>
      <CarouselModul />
      <div className='ColorBlock'>

        <div className='ColorBlockCenter'>
          <h2 className='ColorBlockH2'>O‘quvchilar uchun bonuslar</h2>
          <p className='ColorBlockP'>Biz o‘quvchilarga shunchaki dars beribgina qolmay, ular uchun foydali bo‘lgan bonuslarni ham taqdim etamiz</p>
          <a onClick={()=>setBtnBonus(!btnBonus)}><div className='ShadowBtn'>
            <p className='InBtn'>Bonuslarni ko‘rish<FaArrowRight /></p>

          </div>
          </a>
        </div>
     
      </div>
      {btnBonus ?  <div className='Bonuslar'>

          <div className='BonusCard'>
            <div>
              <img src={Word}/>
              <h2 className='BonusFileDoc'>doc</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Foydalanish uchun adabiyotlar ro‘yxati</h2>
            </div>
          </div>

          <div className='BonusCard'>
            <div>
              <img src={Word}/>
              <h2 className='BonusFileDoc'>doc</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>SMM xizmati uchun shartnomadan namuna</h2>
            </div>
          </div>

          <div className='BonusCard'>
            <div>
              <img src={Word}/>
              <h2 className='BonusFileDoc'>doc</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>SMM strategiya uchun Briyeaf namuna</h2>
            </div>
          </div>

          <div className='BonusCard'>
            <div>
              <img src={Word}/>
              <h2 className='BonusFileDoc'>doc</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Texnik topshiriq berish bo‘yicha namuna</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
            <img src={Excell}/>
              <h2 className='BonusFileXLS'>xls</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Kontent plan bo‘yicha namuna</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Cheklist  “SMM mutaxassisi qanday mijoz topishi”</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <a href={Video} download><img src={Video}/></a>
              <h2 className='BonusFileVideo'>video</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Sotuvchi istoriyalar tayyorlash</h2>
            </div>
          </div>
          
          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Kontent uchun g‘oyalar topish</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Gayd 
“UTP tuzish”</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>4U bo‘yicha  offer</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>AIDA formulasi</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Instagramda konkurs o‘tkazish</h2>
            </div>
          </div>
         
          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Matn yozish qoidalari</h2>
            </div>
          </div>
         
          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Sotuvchi matnlar yozilishih</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <img src={PowerP}/>
              <h2 className='BonusFilePdf'>pdf</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Bitta patron qoidasi</h2>
            </div>
          </div>

          <div className='BonusCard'>
          <div>
          <a href={Video} download><img src={Video}/></a>
              <h2 className='BonusFileVideo'>video</h2>
            </div>
            <div>
              <h2 className='BonusFileText'>Mijoz bilan muzokara  </h2>
            </div>
          </div>
         

          
        </div>: null}
     
      <div className='PaddingDiv' id="PaddingDiv">
        <div className='ForWhoH2White'>
          <h2 className='ForWhoH2Text' id='kursSpikeri'>KURS SPIKERLARI BILAN TANISHING</h2>
        </div>
      </div>
      <TabPanel />

      <ColorBlock />
      <div id="midWheel">
        <Wheel />
      </div>
    </div>
  )
}

export default First



{/* <div className='LineBLock LineBLock1'>
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
              </div> */}