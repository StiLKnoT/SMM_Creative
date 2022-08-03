import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabPanel.css'
import MainSpiker from '../../../assets/images/MainSpiker.png'
import Spiker2 from '../../../assets/images/Spiker2.png'
import Spiker3 from '../../../assets/images/Spiker3.png'
import MehSpiker1 from '../../../assets/images/MehSpiker1.png'
import MehSpiker2 from '../../../assets/images/MehSpiker2.png'
import {ReactComponent as InstaIcon} from '../../../assets/images/InstaIcon.svg'
import {ReactComponent as TelegramIcon} from '../../../assets/images/TelegramIcon.svg'
import {ReactComponent as YouTubeIcon} from '../../../assets/images/YouTubeIcon.svg'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Spikers = [
  {'name': 'Umidjon',
  'surname': 'Ortiqov',
  'img': MainSpiker,
  'about': 'Qwerty Aljafr academy asoschisi, ijtimoiy tarmoqlar bo‘yicha ekspert, biznesmen',
  'insta':"https://instagram.com/afshon_official?igshid=YmMyMTA2M2Y=",
  "telegram":"https://t.me/UmidjonOrtiqov",
  "youtube":"https://www.youtube.com/c/UmidjonOrtiqov",
  },
  {'name': 'Akmal',
  'surname': 'Rahmonov',
  'img': Spiker2,
  'about': 'Najot Ta’lim markazi mentori,marketing sohasida 3 + yillik tajribaga ega, tajribali marketolog, targetolog',
  'insta':"https://instagram.com/akmalrahmonov1?igshid=YmMyMTA2M2Y=",
  "telegram":"https://instagram.com/akmalrahmonov1?igshid=YmMyMTA2M2Y=",
  "youtube":"https://instagram.com/akmalrahmonov1?igshid=YmMyMTA2M2Y=",
  },
  {'name': 'Islom',
  'surname': 'JALOLOV',
  'img': Spiker3,
  'about': 'Umidjon Ortiqov va Ilxom Begimqulovning shaxsiy brendlari, Kalibri education  boshqa ko‘plab brendlar bilan muvaffaqiyatli faoliyat olib borgan, tajribali SMM menejer ',
  'insta':"https://instagram.com/islom_jv13?igshid=YmMyMTA2M2Y=",
  "telegram":"https://t.me/Islom_jv13",
  "youtube":"https://instagram.com/islom_jv13?igshid=YmMyMTA2M2Y=",
  }
]
const guest = [
  {'name': 'ISMOIL',
  'surname': 'SAFAROV',
  'img': MehSpiker1,
  'about': 'Lead UX/UI dizayner, Socially Design Academy asoschisi',
  'insta':"https://instagram.com/ismoil.blog?igshid=YmMyMTA2M2Y=",
  "telegram":"https://t.me/sociallyuz",
  "youtube":"https://www.youtube.com/c/Sociallyuz",},
  {'name': 'Axmadjon',
  'surname': 'Majidov',
  'img': MehSpiker2,
  'about': '17 yosh, video editing sohasida 2+ yil tajribaga ega, Qwerty Al-fajr markazida senior video editor',
  'insta':"https://instagram.com/infinite___001?igshid=YmMyMTA2M2Y=",
  "telegram":"https://instagram.com/infinite___001?igshid=YmMyMTA2M2Y=",
  "youtube":"https://instagram.com/infinite___001?igshid=YmMyMTA2M2Y=",}
]

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='TabPanelButtons'>
          <Tab label="Spikerlar" {...a11yProps(0)} className="TabButtons"/>
          <Tab label="Mehmon spikerlar" {...a11yProps(1)} className="TabButtons TabButtons2"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="TabValue">
        {Spikers.map(({name, surname, about, img, telegram, insta, youtube}, index) =>{
          return(
            <div>
           
          
            <div className='SpikerBlock'>
              <div className='SpikerImg'><img src={img}/></div>
              <div className='SpikerBio'>
                <div className='SpikerName'>{name}<br/>{surname}</div>
                <div className='SpikerAbout'>{about}</div>
                <div className='SpikerConnect'>
                <a target="_blank" className='connectLink' href={insta}><div className='ConnectIcons'><InstaIcon className='connectIcons'/></div></a>
                <a target="_blank" className='connectLink' href={telegram}><div className='ConnectIcons'><TelegramIcon className='connectIcons'/></div></a>
                <a target="_blank" className='connectLink' href={youtube}><div className='ConnectIcons'><YouTubeIcon className='connectIcons'/></div></a>
                </div>
                
              </div>
              <div className='SpikerAbout' id="SpikerAboutMob">{about}</div>
            </div>
             <hr className='hrLine'/>
            </div>
          )
        })}
          {/* // })} */}
     
      </TabPanel>
      <TabPanel value={value} index={1} className="TabValue">
      {guest.map(({name, surname, about, img, telegram, insta, youtube}, index) =>{
          return(
           <div>
            <div className='SpikerBlock'>
              <div className='SpikerImg'><img src={img}/></div>
              <div className='SpikerBio'>
                <div className='SpikerName'>{name}<br/>{surname}</div>
                <div className='SpikerAbout'>{about}</div>
                <div className='SpikerConnect'>
                  <div className='ConnectIcons'><a target="_blank" className='connectLink' href={insta}><InstaIcon className='connectIcons'/></a></div>
                  <div className='ConnectIcons'><a target="_blank" className='connectLink' href={telegram}><TelegramIcon className='connectIcons'/></a></div>
                  <div className='ConnectIcons'><a target="_blank" className='connectLink' href={youtube}><YouTubeIcon className='connectIcons'/></a></div>
                </div>
              </div>
              <div className='SpikerAbout' id="SpikerAboutMob">{about}</div>
            </div>
             <hr className='hrLine'/>
            </div>
          )
        })}
      </TabPanel>
    </Box>
  );
}
