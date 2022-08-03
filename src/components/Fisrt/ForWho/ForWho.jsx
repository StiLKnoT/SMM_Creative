import React from 'react'
import {motion} from 'framer-motion'
import imgFor from '../../../assets/images/ForWho1.png'
import imgFor2 from '../../../assets/images/ForWho2.png'
import imgFor3 from '../../../assets/images/ForWho3.png'
import imgFor4 from '../../../assets/images/ForWho4.png'
import imgFor5 from '../../../assets/images/ForWho5.png'

import './ForWho.css'
import IconMan from '../../../assets/images/IconMan.png'
import IconMan2 from '../../../assets/images/ManIcon2.png'
import IconMan3 from '../../../assets/images/ManIcon3.png'
import IconMan4 from '../../../assets/images/ManIcon4.png'
import IconMan5 from '../../../assets/images/ManIcon5.png'

const TextAnimation ={
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom =>({
        x: 0,
        opacity: 1,
        transition: {delay: custom*0.1, duration: 0.4}
    }),
}
const ImgAnimation ={
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom =>({
        x: 0,
        opacity: 1,
        transition: {delay: custom*0.1, duration: 0.4}
    }),
}
const ImgAnimation2 ={
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom =>({
        y: 0,
        opacity: 1,
        transition: {delay: custom*0.1, duration: 0.4}
    }),
}
function ForWho() {
  return (
    <motion.div     
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.2}}
    className='ForWho'>
        <div className='PaddingDiv' id="kimlarUchun"></div>
        <div className='ForWhoH2'>
            <h2>BU KURS KIMLAR UCHUN MOS KELADI?</h2>
        </div>
     
       
        <motion.div initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}} className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan}/>

                </div>
                <motion.h2 variants={TextAnimation} custom={1} className='ForLeftH2'>SMM mutaxassisi bo‘lib <br/> ishlamoqchi bo‘lganlar uchun</motion.h2>
                <motion.p variants={TextAnimation} custom={2} className='ForLeftP'>Siz SMM nimaligini bilmaysiz va hali bu sohada<br/> ishlab ko‘rmagansiz.</motion.p>
                <motion.div  initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}}><motion.div variants={TextAnimation} custom={3} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>— SMM sohasini tushunib yetasiz, mutaxassislik ko‘nikmasiga ega bo‘lasiz. Birinchi mijozlarni qayerdan topishni va qanday ishni yo‘lga qo‘yishni bilasiz.</p>
                </motion.div>
                </motion.div>
              

            </div>
            <motion.div initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}} className='ForWhoRight'>
                <motion.img variants={ImgAnimation} custom={4} src={imgFor}/>
            </motion.div>

        </motion.div>
        <motion.div initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}} className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan2}/>

                </div>
                <motion.h2  variants={TextAnimation} custom={1} className='ForLeftH2'>SMM kursini tugatgan, lekin<br/> tajribasi oz, yosh SMM<br/> mutaxassislar uchun</motion.h2>
                <motion.p  variants={TextAnimation} custom={2} className='ForLeftP'>
                    {/* Ish topishda qiynalyapsiz yoki tajribangiz kamligi<br/> uchun tayyor ishingizni ham boy beryapsiz. */}
                Siz SMM kursini tugatgansiz lekin ish topishda<br/> qiynalyapsiz yoki tajribangiz yetishmayotgan <br/>uchun tayyor ishingizni boy beryapsiz.
                </motion.p>
                <motion.div  initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}}><motion.div variants={TextAnimation} custom={3} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>-Oldingidan tajribali SMM mutaxassisiga aylanasiz, oldingidan sifatli va mijoz bilan davomiy ishlashni o‘rganasiz. Qimmatroq  pulga ishlashni yo‘lga qoyasiz. Grafik dizaynerlar, moushin grafika va boshqa mutaxassislar bilan ishlashda odatdagidan boshqacha yondashasiz</p>
                </motion.div>
                </motion.div>
              

            </div>
            <motion.div initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}} className='ForWhoRight'>
                <motion.img variants={ImgAnimation2} custom={4} src={imgFor2}/>
            </motion.div>

        </motion.div>

        <motion.div  initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}} className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan3}/>

                </div>
                <motion.h2  variants={TextAnimation} custom={1} className='ForLeftH2'>Tadbirkorlikni endi boshlaganlar,<br/> yosh tadbirkorlar uchun</motion.h2>
                <motion.p  variants={TextAnimation} custom={2} className='ForLeftP'>Siz tadbirkorlikni endi boshlagansiz SMM <br/> mutaxassisiga ajratishga hozir byudjetingiz yetarli emas <br/> va siz SMM orqali mijozlaringizni ko‘paytirishni xohlaysiz,<br/> sotuvlaringizni oshirishni xohlaysiz.</motion.p>
                <motion.div  initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}}><motion.div  variants={TextAnimation} custom={3} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>— O‘z mahsulotingizni ijtimoiy tarmoqlarda to‘g‘ri taqdim qilishni, SMM’ni biznesda qanday qo‘llashni va sotuvlarni ko‘tarish uchun instrumentlarga ega bo‘lasiz.</p>
                </motion.div>
                </motion.div>
              

            </div>
            <motion.div  initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1}} className='ForWhoRight'>
                <motion.img variants={ImgAnimation} custom={4} src={imgFor3}/>
            </motion.div>

        </motion.div>

        <motion.div  initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1}} className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan4}/>

                </div>
                <motion.h2 variants={TextAnimation} custom={1} className='ForLeftH2'>Tajribali biznesmenlar uchun</motion.h2>
                <motion.p variants={TextAnimation} custom={2} className='ForLeftP'>Sizning biznesingiz bor va siz SMM mutaxassislari <br/>bilan ishlaganda, ularga KPI qo‘yishni va ish sifatini<br/> qanday nazorat qilishni bilmayapsiz. Biznesingizga SMM<br/>foyda berishiga ikkilanyapsiz yoki SMM mutaxassislarini<br/> sifatlisini tanlay olmayapsiz.</motion.p>
                <motion.div initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}}><motion.div variants={TextAnimation} custom={3} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>—Siz SMM mutaxassisiga qanday topshiriq berishni bilasiz, qanday nazorat qilishni, ish sifati qay darajada rivojlanayotganini ko‘ra olasiz. O‘z biznesingiz uchun guruhda zo‘r o‘qigan kuchli SMM mutaxassislarini topishingiz mumkin. Shaxsiy brendni qurishni boshlaysiz.</p>
                </motion.div>
                </motion.div>
              

            </div>
            <motion.div  initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1}} className='ForWhoRight'>
                <motion.img variants={ImgAnimation} custom={4}  src={imgFor4}/>
            </motion.div>

        </motion.div>
        
        <motion.div  initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1}} className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan5}/>

                </div>
                <motion.h2 variants={TextAnimation} custom={1} className='ForLeftH2'>Boshqa soha vakillari uchun</motion.h2>
                <motion.p variants={TextAnimation} custom={2} className='ForLeftP'>Siz o‘z sohangizda mutaxassissiz misol uchun<br/> siz oshpazsiz, tikuvchi, hunarmand, sartarosh, shirinlik<br/> pishiradigan inson, o‘qituvchi, doktor, yoki boshqa bir<br/> soha mutaxassisi, va daromadingizni oshirishni istaysiz.<br/> Hozirda oylikka ishlaysiz, ko‘proq daromad qilishni xohlaysiz.</motion.p>
                <motion.div  initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1}}><motion.div variants={TextAnimation} custom={3} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>—Ijtimoiy tarmoqlar orqali yangi mijozlar jalb qilishni, qo‘shimcha daromad qilishni o‘rganasiz.
 Siz o‘z sohangizdagi bilim va tajribangizni SMM orqali ijtimoiy tarmoqlarda to‘g‘ri targ‘ib qilishni yo‘lga qoyasiz. O‘z xizmatlaringizni ko‘proq odamlarga sotishni o‘rganasiz
 </p>
                </motion.div>
                </motion.div>
              

            </div>
            <motion.div  initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1}} className='ForWhoRight'>
                <motion.img variants={ImgAnimation} custom={4} src={imgFor5}/>
            </motion.div>

        </motion.div>
      
    </motion.div>
  )
}

export default ForWho
