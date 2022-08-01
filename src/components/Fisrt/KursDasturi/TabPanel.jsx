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
  'insta':"https://active-vision.ru/icon/box-shadow/",
  "telegram":"",
  "youtube":"",
  },
  {'name': 'Akmal',
  'surname': 'Rahmonov',
  'img': Spiker2,
  'about': 'Najot Ta’lim markazi mentori,marketing sohasida 3 + yillik tajribaga ega, tajribali marketolog, targetolog',
  'insta':"https://active-vision.ru/icon/box-shadow/",
  "telegram":"",
  "youtube":"",
  },
  {'name': 'Islom',
  'surname': 'JALOLOV',
  'img': Spiker3,
  'about': 'Asiaconsalt, At-tabib, Kolibri education va boshqa ko‘plab brendlar bilan muvaffaqiyatli faoliyat olib borgan, tajribali SMM menejer ',
  'insta':"https://active-vision.ru/icon/box-shadow/",
  "telegram":"",
  "youtube":"",
  }
]
const guest = [
  {'name': 'ISMOIL',
  'surname': 'SAFAROV',
  'img': MehSpiker1,
  'about': 'Lead UX/UI dizayner, Socially Design Academy asoschisi',
  'insta':"https://active-vision.ru/icon/box-shadow/",
  "telegram":"",
  "youtube":"",},
  {'name': 'Axmadjon',
  'surname': 'Majidov',
  'img': MehSpiker2,
  'about': '17 yosh, video editing sohasida 2+ yil tajribaga ega, Qwerty Al-fajr markazida senior video editor',
  'insta':"https://active-vision.ru/icon/box-shadow/",
  "telegram":"",
  "youtube":"",}
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
          <Tab label="Mehmon spikerlar" {...a11yProps(1)} className="TabButtons TabButtons2"/>
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
