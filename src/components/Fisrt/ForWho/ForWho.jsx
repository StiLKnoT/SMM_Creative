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
        transition: {delay: custom*0.1}
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
        transition: {delay: custom*0.1}
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
        transition: {delay: custom*0.1}
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
                <motion.div variants={TextAnimation} custom={2} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>— SMM sohasini tushunib yetasiz, mutaxassislik ko‘nikmasiga ega bo‘lasiz. Birinchi mijozlarni qayerdan topishni va qanday ishni yo‘lga qo‘yishni bilasiz.</p>
                </motion.div>
              

            </div>
            <motion.div variants={ImgAnimation} custom={2} className='ForWhoRight'>
                <img src={imgFor}/>
            </motion.div>

        </motion.div>
        <motion.div initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}} className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan2}/>

                </div>
                <motion.h2  variants={TextAnimation} custom={1} className='ForLeftH2'>SMM kursini tugatgan, lekin<br/> tajribasi oz yosh SMM<br/> mutaxassislar uchun</motion.h2>
                <motion.p  variants={TextAnimation} custom={2} className='ForLeftP'>Ish topishda qiynalyapsiz yoki tajribangiz kamligi<br/> uchun tayyor ishingizni ham boy beryapsiz.</motion.p>
                <motion.div variants={TextAnimation} custom={2} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>— Talabgir SMM mutaxassisiga aylanasiz, mijoz bilan sifatli va davomiy ishlash va xizmatni yuqori pulga taqdim h o‘rganasiz. 
qo‘lingizdagi mutaxassislar bilan ishlashda odatdagidan boshqacha yondashasiz..</p>
                </motion.div>
              

            </div>
            <motion.div variants={ImgAnimation2} custom={3} className='ForWhoRight'>
                <img src={imgFor2}/>
            </motion.div>

        </motion.div>

        <motion.div  initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.1}} className='ForWhoMain'>
            <div className='ForWhoLeft'>
                <div className='IconMan'>
                    <img src={IconMan3}/>

                </div>
                <motion.h2  variants={TextAnimation} custom={1} className='ForLeftH2'>Biznesni endi yo‘lga qo‘ygan<br/> tadbirkorlar uchun</motion.h2>
                <motion.p  variants={TextAnimation} custom={2} className='ForLeftP'>SMM orqali mijozlaringiz va sotuvlaringizni<br/> oshirishni xohlaysiz, lekin mutaxassisiga ajratishga<br/> hozir byudjetingiz yetarli emas.</motion.p>
                <motion.div  variants={TextAnimation} custom={2} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>— O‘z mahsulotingizni ijtimoiy tarmoqlarda to‘g‘ri taqdim qilishni, SMM’ni biznesda qanday to‘g‘ri qo‘llash va sotuvni ko‘tarish uchun instrumentlarga ega bo‘lasiz.</p>
                </motion.div>
              

            </div>
            <motion.div variants={ImgAnimation} custom={2} className='ForWhoRight'>
                <img src={imgFor3}/>
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
                <motion.p variants={TextAnimation} custom={2} className='ForLeftP'>SMM mutaxassislari bilan ishlaysiz, ularning ish <br/> sifatini qanday nazotat qilishini va qanday KPI <br/> qo‘yishni bilmayapsiz. Biznesingizga SMM foyda <br/> berishiga ikkilanyapsiz yoki SMM mutaxassislarini <br/> sifatlisini tanlay olmayapsiz.</motion.p>
                <motion.div variants={TextAnimation} custom={2} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>— SMM mutaxassislariga qanday topshiriq berishni va ularni qanday nazorat qilishni, ish qay darajada rivojlanayotganini tahlil qila olasiz.  O‘z biznesingiz uchun guruhda zo‘r o‘qigan SMM mutaxassislarini topishingiz mumkin.</p>
                </motion.div>
              

            </div>
            <motion.div variants={ImgAnimation2} custom={2}  className='ForWhoRight'>
                <img src={imgFor4}/>
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
                <motion.p variants={TextAnimation} custom={2} className='ForLeftP'>O‘z sohangizda mutaxassissiz misol uchun oshpaz,<br/> tikuvchi, yoki boshqa bir soha mutaxassisi. Hozirda <br/> oylikka ishlaysiz va daromadni ostirishni istaysiz.</motion.p>
                <motion.div variants={TextAnimation} custom={2} className='ForWhoForm'>
                    <h2 className='ForWhoFormH2'>Kurs yakunida</h2>
                    <p className='ForWhoFormP'>— Ijtimoiy tarmoqlar orqali yangi mijozlar jalb qilishni, qo‘shimcha daromad qilishni, xizmatlaringizni ko‘proq odamlarga sotishni o‘rganasiz. O‘z sohangizdagi bilim va tajribangizni SMM orqali ijtimoiy tarmoqlarda to‘g‘ri targ‘ib qilishni yo‘lga qoyasiz. </p>
                </motion.div>
              

            </div>
            <motion.div variants={ImgAnimation} custom={2}  className='ForWhoRight'>
                <img src={imgFor5}/>
            </motion.div>

        </motion.div>
      
    </motion.div>
  )
}

export default ForWho
