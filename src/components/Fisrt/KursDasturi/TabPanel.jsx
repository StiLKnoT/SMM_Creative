import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabPanel.css'

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
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='TabPanelButtons'>
          <Tab label="1 - modul" {...a11yProps(0)} className="TabButtons"/>
          <Tab label="2 - modul" {...a11yProps(1)} className="TabButtons"/>
          <Tab label="3 - modul" {...a11yProps(2)} className="TabButtons"/>
          <Tab label="Bonus darslar" {...a11yProps(3)} className="TabButtons"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="TabValue">
        01 — Kursdan qanday  to‘g‘ri foydalanish va natijaga chiqish usullari<br/>
        02 — SMM bu nima va SMM mutaxassisi bu kim ?<br/>
        03 — SMM mutaxassisi terminlari va qo‘llash joylari<br/>
        04 — Maqasadli auditoriya hamda mijoz portreti <br/>
        05 — UTP, offer va trigger. Bular qanday tushunchalar ? <br/>
        06 — Sotuv varonkasi va mijozga yo‘l<br/>
        07 — Raqobatchilarni analiz qilish <br/>
        08 — SWOT analiz<br/>
        09 — Texnik topshiriqlar va deadline<br/>
        10 — Grafik dizaynerlarga tz yozish va Imtihon 
      </TabPanel>
      <TabPanel value={value} index={1} className="TabValue">
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} className="TabValue">
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} className="TabValue">
        Item Threes
      </TabPanel>
    </Box>
  );
}
