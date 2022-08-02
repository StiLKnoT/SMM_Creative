import React, { useState } from "react";
import { Input, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
// Components
import Payme from "../../Paycom";
import Paycom from '../../Paycom';
import Footer from "../navbar/Footer";
import Box from '@mui/material/Box';
import Col from "react-bootstrap/Col";
import { Avatar } from "@mui/material";
import Card from '@mui/material/Card';
import Row from "react-bootstrap/Row";
import Wheel from "../Fisrt/Wheel/Wheel";
import Modal from 'react-bootstrap/Modal';
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import MuiAccordion from "@mui/material/Accordion";
import HeaderTitle from "../atom/header/HeaderTitle";
import ColorBlock from "../Fisrt/ColorBlock/ColorBlock";
import CardContent from '@mui/material/CardContent';
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";


// Styles
import "./Second.css";
import './components/CarouselCard.css'
import './components/CarouselCards.css'
import './components/Accordion.css'
import "react-multi-carousel/lib/styles.css";

// Images
import umidjon from "../../assets/keyslar/umidjon.png";
import ilxom from "../../assets/keyslar/ilxom.png";
import jamila from "../../assets/keyslar/jamila.png";
import tabib from "../../assets/keyslar/tabib.png";

// Icons
import instagramLogo from "../../assets/icons/instagram.png";
import instaIcon from "../../assets/icons/instaIconsm.png";
import TikTokLogo from "../../assets/icons/tiktok.png";
import YouTubeLogo from "../../assets/icons/youtube.png";
import { FaArrowRight } from "react-icons/fa";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    fill: "#28468C"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));



const Second = () => {

  // Data for KeysBox
  const createData = (
    bannerImg,
    Name,
    infoText,
    instNum,
    instLink,
    tikNum,
    tikLink,
    youNum,
    youLink
  ) => {
    return {
      bannerImg,
      Name,
      infoText,
      instNum,
      instLink,
      tikNum,
      tikLink,
      youNum,
      youLink,
    };
  };

  const rows = [
    createData(
      ` ${umidjon}`,
      " Umidjon Ortiqov ",
      "IT tadbirkor, Founder “Kalibri edu”, Ijtimoiy tarmoqlar bo’yicha ekspert, biznesmen",
      " 26.1 K",
      "https://instagram.com/afshon_official",
      " 21.4 K",
      "https://tiktok.com/afshon_official",
      " 35.7 K",
      "https://www.youtube.com/c/UmidjonOrtiqov"
    ),
    createData(
      ` ${ilxom}`,
      "ILXOM BEGIMQULOV",
      "“Asiaconsult.uz” firmasi asoschisi, muvaffaquyatli tadbirkor, biznes trener, chet el ta’limi bo‘yicha mutaxassis ",
      " 24 K",
      "https://instagram.com/afshon_official",
      " 29.7 K",
      "https://tiktok.com/afshon_official",
      " 31 K",
      "https://www.youtube.com/c/UmidjonOrtiqov"
    ),
    createData(
      ` ${jamila}`,
      "JAMILA TOXIROVNA",
      "Parapsixolog, sohada 4+ yillik katta tajriba ega, psixolog - konsultant",
      " 532 ",
      "https://instagram.com/afshon_official",
      " 1 000",
      "https://tiktok.com/afshon_official",
      " 20",
      "https://www.youtube.com/c/UmidjonOrtiqov"
    ),
    createData(
      ` ${tabib}`,
      " “AT-TABIB” loyihasi",
      "Xalq tabobati yordamida kasalliklarga davo topish, salomatlikka doir foydali maslahatlar ulashuvchi loyiha",
      " 1 412",
      "https://instagram.com/afshon_official",
      " 20",
      "https://tiktok.com/afshon_official",
      " 4.5 K",
      "https://www.youtube.com/c/UmidjonOrtiqov"
    ),
  ];
  // Data for Carousel
  const createCarousel = (img, name, nickname, text) => {
    return { img, name, nickname, text }
  }
  const carouselRows = [
    createCarousel(umidjon, 'Umidjon', 'afshon_official', 'Siz insonga katta motivatsiya berasiz va o‘z yo‘lini ko‘rsatasiz. Shuning uchun sizga ishonamiz'),
    createCarousel(umidjon, 'Umidjon', 'afshon_official', 'Ummatga foyda keltirib kelayotganingiz uchun, Allohni eslatib halol ish qilyotganingiz uchun'),
    createCarousel(umidjon, 'Umidjon', 'afshon_official', 'Sizda intilish, o‘sish kuzatyapman, shuning uchun ishonch bildiraman, omad'),
    createCarousel(umidjon, 'Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
    createCarousel(umidjon, 'Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
    createCarousel(umidjon, 'Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
  ]

  // Data for Accordion
  const [expanded, setExpanded] = React.useState(`panel0`);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const createAccordion = (title, answer) => {
    return { title, answer }
  }
  const carouselAccor = [
    createAccordion('DARSLAR QANDAY OLIB BORILADI ?', 'Darslarimiz online holatda, maxsus yopiq guruh orqali olib boriladi. Sizga ushbu guruhga kirish uchun ruxsat beriladi. Siz belgilangan vaqt davomida darslarni ko‘rishingiz va takrorlashingiz mumkin'),
    createAccordion("DARSLARNI KIM O'TADI ?", " Asosiy darsni Umidjon Ortiqov o'tadi va SMM sohasiga oid mehmon spikerlar o'tadi  "),
    createAccordion('TARIFNI KEYINCHALIK ALMASHTIRISH MUMKINMI ?', "Darslar  boshlanganidan so'ng 5 kun ichida almashtirishingiz mumkin. "),
    createAccordion('BO‘LIB TO‘LASH IMKONIYATI MAVJUDMI ?', " Albatta, kursning 50% qismini oldindan to'lab qolgan qismini 1 oy muddat ichida to'lashingiz mumkin  "),
    createAccordion('DARSLAR YOZIB OLINADIMI ?', " Darslarga maxsus yopiq guruhda ruxsat beriladi.  "),
    createAccordion('DARSLARNI QANCHA VAQT DAVOMIDA KO‘RISH MUMKIN ?', "Darslardan 2 oy ichida foydalanishingiz mumkin. "),
  ]


  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 947 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  // FAQs's accordion


  const FaqsAccorStan = [
    {
      title: "1-Modul Kirish  ",
      items: [
        "01 — Vaqtni to'g'ri taqsimlash",
        "02 — Kursdan to'g'ri foydalanish va natijaga chiqish usullari",
        "Moduldan so'ng:",
        "Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. "
      ]
    },
    {
      title: "2-Modul SMM  ",
      items: [
        "01 — Kursdan qanday  to‘g‘ri foydalanish va natijaga chiqish usullari ",
        "02 — SMM bu nima va SMM mutaxassisi kim ?",
        "03 — SMM mutaxassisi terminlari va qo‘llash joylari",
        "04 — Maqsadli auditoriya va mijoz portreti",
        "05 — UTP, offer va trigger nima ?",
        "06 — Sotuv voronkasi va mijozga yo‘l",
        "07 — Raqobatchilarni analiz qilish",
        "08 — SVOT analiz",
        "09 — Texnik topshiriqlar va deadline",
        "10 — Grafik dizaynerga TZ  yozish",
        "11 — Kopirayting va sotuvchi matn yozish",
        "12 — Imtixon",
        " ",
        "Modul so‘ngida:",
        "Siz SMM qanday soha ekanligini, sohada uchraydigan terminlarni tushunasiz, maqsadli auditoriyani topish, kuchli takliflar berish, kompaniyani tahlili qilish va grafik dizaynerlarga texnik topshiriq berishni o‘rganasiz. Sotuvchi matnlarni yozish ko‘nikmasiga ega bo‘lasiz. Deadline bilan ishlashni o‘rganasiz. "
      ]
    },
    {
      title: "3-Modul  Vizual  ",
      items: [
        "01 — Akkauntga bio yozish  ",
        "02 — Nickname tanlash",
        "03 — Akkauntni  vizual oformleniya qilish  ",
        "04 — Taplink oformleniya",
        " ",
        "Moduldan so‘ng:",
        "Vizual nima ekanligini bilib olasiz. Akkauntga bio yozishni, akkauntga nickname tanlashni o‘zlashtirasiz. Akkauntni oformleniya qilishni va taplink oformleniyani o‘rganasiz."
      ]
    }
  ]



  const FaqsAccorPrem = [
    {
      title: "1-Modul Kirish  ",
      items: [
        "01 — Vaqtni to'g'ri taqsimlash",
        "02 — Kursdan to'g'ri foydalanish va natijaga chiqish usullari",
        "Moduldan so'ng:",
        "Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. "
      ]
    },
    {
      title: "2-Modul SMM  ",
      items: [
        "01 — Kursdan qanday  to‘g‘ri foydalanish va natijaga chiqish usullari ",
        "02 — SMM bu nima va SMM mutaxassisi kim ?",
        "03 — SMM mutaxassisi terminlari va qo‘llash joylari",
        "04 — Maqsadli auditoriya va mijoz portreti",
        "05 — UTP, offer va trigger nima ?",
        "06 — Sotuv voronkasi va mijozga yo‘l",
        "07 — Raqobatchilarni analiz qilish",
        "08 — SVOT analiz",
        "09 — Texnik topshiriqlar va deadline",
        "10 — Grafik dizaynerga TZ  yozish",
        "11 — Kopirayting va sotuvchi matn yozish",
        "12 — Imtixon",
        " ",
        "Modul so‘ngida:",
        "Siz SMM qanday soha ekanligini, sohada uchraydigan terminlarni tushunasiz, maqsadli auditoriyani topish, kuchli takliflar berish, kompaniyani tahlili qilish va grafik dizaynerlarga texnik topshiriq berishni o‘rganasiz. Sotuvchi matnlarni yozish ko‘nikmasiga ega bo‘lasiz. Deadline bilan ishlashni o‘rganasiz. "
      ]
    },
    {
      title: "3-Modul  Vizual  ",
      items: [
        "01 — Akkauntga bio yozish  ",
        "02 — Nickname tanlash",
        "03 — Akkauntni  vizual oformleniya qilish  ",
        "04 — Taplink oformleniya",
        " ",
        "Moduldan so‘ng:",
        "Vizual nima ekanligini bilib olasiz. Akkauntga bio yozishni, akkauntga nickname tanlashni o‘zlashtirasiz. Akkauntni oformleniya qilishni va taplink oformleniyani o‘rganasiz."
      ]
    },
    {
      title: "4-Modul  Kontent",
      items: [
        "01 — Kontent marketing ",
        "02 — Rubrikator ",
        "03 — Kontent plan  ",
        "04 — Instagram reels ",
        "05 — Instagram Live va Instagram storiyes",
        "06 — YouTube ga kontent ",
        "07 — Tik tok va Zet avlod kontentlari",
        "08 — Kontent uchun g‘oya topish",
        " ",
        "Moduldan so‘ng:",
        "Kontent nima ekanligini bilasiz, kontent turlarini farqlashni boshlaysiz. Kontent plan tuzishni o‘rganasiz, instagram reels va istoriyalar uchun kontent ishlashni o‘zlashtirasiz. YouTube va TikTok ga postlar joylashni o‘ganasiz. Kontent uchu g‘oya topish yo‘llarini  o‘rganasiz. "
      ]
    },
    {
      title: "5-Modul Meta ",
      items: [
        "01 — Meta ( Instagram va Facebook ) ",
        "02 — Facebook business suite ",
        "03 — Targetingga kirish  ",
        "04 — Retargeting va Look-Alike ",
        " ",
        "Moduldan so‘ng:",
        "Meta haqida tushanchaga ega bo‘lasiz, Instagram va Facebook bo‘yicha instrumentarga ega bo‘lasiz, postlarni oldindan rejalashtirib qo‘yishni, boshlang‘ich targeting va retargetinglarni o‘rganasiz."
      ]
    },
    {
      title: "6-Modul Veb sayt va chatbot bilan ishlash ",
      items: [
        "01 — Veb sayt yasash (dasturlashsiz ) ",
        "02 — Chat botlar bilan tanishuv ",
        "03 — Blogerlar bilan ishlash va Bitta patron qoidasi  ",
        " ",
        "Moduldan so‘ng:",
        " ",
        "Dasturlashsiz veb sayt yasashni o‘rganasiz, o‘zingiz va mijozlar uchun veb sayt yasay olasiz. Chatbotlar bilan ishlashni o‘rganasiz, bloggerlar bilan ishlaganda qanday ishlashni o‘zlashtirasiz. Bitta patron qoidasini hayotda qo‘llashni o‘rganasiz."
      ]
    }
  ]



  const FaqsAccor = [
    {
      title: "1-Modul Kirish  ",
      items: [
        "01 — Vaqtni to'g'ri taqsimlash",
        "02 — Kursdan to'g'ri foydalanish va natijaga chiqish usullari",
        "Moduldan so'ng:",
        "Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. "
      ]
    },
    {
      title: "2-Modul SMM  ",
      items: [
        "01 — Kursdan qanday  to‘g‘ri foydalanish va natijaga chiqish usullari ",
        "02 — SMM bu nima va SMM mutaxassisi kim ?",
        "03 — SMM mutaxassisi terminlari va qo‘llash joylari",
        "04 — Maqsadli auditoriya va mijoz portreti",
        "05 — UTP, offer va trigger nima ?",
        "06 — Sotuv voronkasi va mijozga yo‘l",
        "07 — Raqobatchilarni analiz qilish",
        "08 — SVOT analiz",
        "09 — Texnik topshiriqlar va deadline",
        "10 — Grafik dizaynerga TZ  yozish",
        "11 — Kopirayting va sotuvchi matn yozish",
        "12 — Imtixon",
        " ",
        "Modul so‘ngida:",
        "Siz SMM qanday soha ekanligini, sohada uchraydigan terminlarni tushunasiz, maqsadli auditoriyani topish, kuchli takliflar berish, kompaniyani tahlili qilish va grafik dizaynerlarga texnik topshiriq berishni o‘rganasiz. Sotuvchi matnlarni yozish ko‘nikmasiga ega bo‘lasiz. Deadline bilan ishlashni o‘rganasiz. "
      ]
    },
    {
      title: "3-Modul  Vizual  ",
      items: [
        "01 — Akkauntga bio yozish  ",
        "02 — Nickname tanlash",
        "03 — Akkauntni  vizual oformleniya qilish  ",
        "04 — Taplink oformleniya",
        " ",
        "Moduldan so‘ng:",
        "Vizual nima ekanligini bilib olasiz. Akkauntga bio yozishni, akkauntga nickname tanlashni o‘zlashtirasiz. Akkauntni oformleniya qilishni va taplink oformleniyani o‘rganasiz."
      ]
    },
    {
      title: "4-Modul  Kontent",
      items: [
        "01 — Kontent marketing ",
        "02 — Rubrikator ",
        "03 — Kontent plan  ",
        "04 — Instagram reels ",
        "05 — Instagram Live va Instagram storiyes",
        "06 — YouTube ga kontent ",
        "07 — Tik tok va Zet avlod kontentlari",
        "08 — Kontent uchun g‘oya topish",
        " ",
        "Moduldan so‘ng:",
        "Kontent nima ekanligini bilasiz, kontent turlarini farqlashni boshlaysiz. Kontent plan tuzishni o‘rganasiz, instagram reels va istoriyalar uchun kontent ishlashni o‘zlashtirasiz. YouTube va TikTok ga postlar joylashni o‘ganasiz. Kontent uchu g‘oya topish yo‘llarini  o‘rganasiz. "
      ]
    },
    {
      title: "5-Modul Meta ",
      items: [
        "01 — Meta ( Instagram va Facebook ) ",
        "02 — Facebook business suite ",
        "03 — Targetingga kirish  ",
        "04 — Retargeting va Look-Alike ",
        " ",
        "Moduldan so‘ng:",
        "Meta haqida tushanchaga ega bo‘lasiz, Instagram va Facebook bo‘yicha instrumentarga ega bo‘lasiz, postlarni oldindan rejalashtirib qo‘yishni, boshlang‘ich targeting va retargetinglarni o‘rganasiz."
      ]
    },
    {
      title: "6-Modul Veb sayt va chatbot bilan ishlash ",
      items: [
        "01 — Veb sayt yasash (dasturlashsiz ) ",
        "02 — Chat botlar bilan tanishuv ",
        "03 — Blogerlar bilan ishlash va Bitta patron qoidasi  ",
        " ",
        "Moduldan so‘ng:",
        " ",
        "Dasturlashsiz veb sayt yasashni o‘rganasiz, o‘zingiz va mijozlar uchun veb sayt yasay olasiz. Chatbotlar bilan ishlashni o‘rganasiz, bloggerlar bilan ishlaganda qanday ishlashni o‘zlashtirasiz. Bitta patron qoidasini hayotda qo‘llashni o‘rganasiz."
      ]
    },
    {
      title: "7-Modul Sotuv  ",
      items: [
        "01 — Mijozlarni topish va muzokara o‘tkazish",
        "02 — Mijoz uchun Briyef va SMM strategiya ",
        "03 — Portfoliyoga ega bo‘lmasdan turib, mijozga tijoriy taklif berish usullari  ",
        "04 — Qonuniy ishlash va aldanib qolmaslik yo‘llari ",
        "05 — Professional sotuvchi blan zoom ",
        "06 — Yurist bilan zoom   ",
        " ",
        "Moduldan so‘ng:",
        "Mijozni qayerlardan topish, ular bilan muzokara o‘tkazishni o‘rganasiz, portfoliyoga ega bo‘lmasdan mijoz topishni o‘rganasiz. Sotuv bo‘yicha ko‘nikmaga ega bo‘lasiz. Qonuniy ishlash va aldanib qolmaslik yo‘llarini o‘rganasiz. "
      ]
    },
    {
      title: "8-Modul Shaxsiy brend ",
      items: [
        "01 — Shaxsiy brend nima va uning kuchi ",
        "02 — Shaxsiy brend qurish ",
        "03 — Shaxsiy brend orqali sotuvlarni oshirish",
        " ",
        "Moduldan so‘ng:",
        "Shaxsiy brend nima ekanligini va qanday qurilishini, sotuvga qanday qilib ta’sir o‘tkaza olishini o‘rganasiz. Shaxsiy brend qurishni boshlaysiz. "
      ]
    },
    {
      title: "9-Modul Psixolog ",
      items: [
        "01 — Kuratorlar ko‘magi va telegram guruh ",
        "02 — Umidjon Ortiqov bilan 2 ta  zoom ",
        "03 — Umidjon Ortiqov bilan telegram guruh ",
        "04 — Umidjon Ortiqov bilan 6 ta  zoom ",
        "05 — Eng yaxshi 5 ta o‘quvchiga loyiha berish "
      ]
    },
    {
      title: "10 - Modul",
      items: [
        "01 — Kuratorlar ko‘magi va telegram guruh ",
        "02 — Umidjon Ortiqov bilan 2 ta  zoom ",
        "03 — Umidjon Ortiqov bilan telegram guruh ",
        "04 — Umidjon Ortiqov bilan 6 ta  zoom ",
        "05 — Eng yaxshi 5 ta o‘quvchiga loyiha berish "

      ]
    }


  ]

  // Modal
  const [lgShow1, setLgShow1] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);




  return (
    <>
      <main className="keyBox" id="Keyslar">

        {/* Keys Section */}
        <HeaderTitle theme="BIZNING keyslar" />
        <div className="box">
          <div className="containerr">
            {rows.map((el, i) => {
              return (
                <div className="personBlock">
                  <Row key={i}>
                    <Col xl={8} lg={7} md={7} sm={12}>
                      <img
                        src={el.bannerImg}
                        alt={el.Name}
                        className="img-fluid shadow-4 bannerImgPort "
                      />
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={12}>
                      <div className="simpleCard">
                        <div className="card__name">{el.Name}</div>
                        <div className="card__info">{el.infoText}</div>
                      </div>
                    </Col>
                  </Row>
                  <h4 className="brText"> Biz bilan hamkorlikdan so'ng </h4>

                  <Row className="greenCards">
                    <Col xl={3} lg={3} md={3} sm={12} className=" greenCardCol ">
                      <div className="greenCard">
                        <div className="innerGreenCard">
                          <div className="innerGreenCardLeft">
                            <img src={instagramLogo} alt={el.Name} />
                            <span>{el.instNum}</span>
                          </div>
                          <p>Instagram obunachilari</p>
                        </div>
                        <button className="ShadowBtn greenCardBtn">
                          <a href="#">
                            {" "}
                            Profilga o'tish <FaArrowRight />{" "}
                          </a>
                        </button>
                      </div>
                    </Col>

                    <Col xl={3} lg={3} md={3} sm={12} className=" greenCardCol ">
                      <div className="greenCard">
                        <div className="innerGreenCard">
                          <div className="innerGreenCardLeft">
                            <img src={TikTokLogo} alt={el.Name} />
                            <span>{el.tikNum}</span>
                          </div>
                          <p>TikTok obunachilari</p>
                        </div>
                        <button className="ShadowBtn greenCardBtn">
                          <a href="#">
                            {" "}
                            Profilga o'tish <FaArrowRight />{" "}
                          </a>
                        </button>
                      </div>
                    </Col>

                    <Col xl={3} lg={3} md={3} sm={12} className=" greenCardCol ">
                      <div className="greenCard">
                        {/* <YouTubeLogo /> */}
                        <div className="innerGreenCard">
                          <div className="innerGreenCardLeft">
                            <img src={YouTubeLogo} alt="{el.Name}" />
                            <span>{el.youNum}</span>
                          </div>
                          <p>YouTube obunachilari</p>
                        </div>
                        <button className="ShadowBtn greenCardBtn">
                          <a href="#">
                            {" "}
                            Profilga o'tish <FaArrowRight />{" "}
                          </a>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel setcion */}
        <HeaderTitle theme="Nega bizni tanlashdi" />
        <section className=" box carouselContainer " >

          <Carousel responsive={responsive} id="carCardsBot">
            {
              carouselRows.map((el, i) => {
                return (
                  <>

                    <div className='KarouselMainCard' key={i} >
                      <Box className='KarouselMainCard' sx={{ minWidth: 275 }}>
                        <Card className='Karousel__card' variant="outlined">
                          <>
                            <CardContent>
                              <div className="upperBlock">
                                <Avatar className="upperAvatar" alt={el.name} src={el.img} />
                                <div className="upperBlockText">
                                  <div>
                                    <h5 className="Karousel__cardTitle" >
                                      {el.name}
                                    </h5>
                                  </div>
                                  <div className="Karousel__cardContent" >
                                    <img src={instaIcon} alt={el.Name} className="upperIcon" />
                                    <span className="upperDblTxt" >{el.nickname}</span>
                                  </div>
                                </div>

                              </div>
                              <div className="underBlock">
                                <h5> {el.text} </h5>
                              </div>
                            </CardContent>
                          </>
                        </Card>
                      </Box>
                    </div>
                  </>


                )
              })
            }
          </Carousel>

        </section>

        {/* FAQs || Accordion Section */}
        <HeaderTitle theme="Ko'p Beriladigan savollar" />
        <div className="box carouselContainer "   >
          <section id="faqsCont">
          {
                      FaqsAccorPrem.map((sub, ind) => {
                        return (
                          <>
                            <li className="tarifServis__item" >&#10033;  {sub.title}</li>
                            <li>
                              <ul className="tarifServis">
                              {/* <li className="tarifServis__item" >&#10033; {sub.items[0]} </li> */}
                                {
                                  sub.items.map((el, i) => {
                                    return (
                                      <li className="tarifServis__item" >&#10033; {el} </li>
                                    )
                                  })
                                }
                              </ul>
                            </li>
                          </>

                        )
                      })
                    }
            

          </section>
        </div>
        {/* Lenta bn pinkBox */}
        <Wheel />
        <ColorBlock />


        {/* Tariflar section */}
        <div className="PaddingDiv" id="tariflar"></div>
        <HeaderTitle theme="KURS TARIFLARI" />

        <section className="planChange">

          <Row>
            <Col xl={4} lg={4} md={6} sm={12} className="TarifColumn ">
              <div className="boxTarif" >
                <>
                  <div className="tarifTitle">
                    <span>&#10033; </span> Standart    Tarifi
                  </div>
                  <div className="tarifPrice">
                    1.000.000 <span> UZS</span>
                  </div>
                  <ul className="tarifServis" >
                  {
                      FaqsAccorStan.map((sub, ind) => {
                        return (
                          <>
                            <li className="tarifServis__item" >&#10033;  {sub.title}</li>
                            <li>
                              <ul className="tarifServis">
                              {/* <li className="tarifServis__item" >&#10033; {sub.items[0]} </li> */}
                                {
                                  sub.items.map((el, i) => {
                                    return (
                                      <li className="tarifServis__item" >&#10033; {el} </li>
                                    )
                                  })
                                }
                              </ul>
                            </li>
                          </>

                        )
                      })
                    }
                  </ul>
                  <Button className=" ShadowBtn  formKursBtn" onClick={() => {
                    setLgShow1(true);
                  }
                  }>
                    <p className="InBtn" >Kursga yozilish</p>

                  </Button>
                  <Modal
                    size="lg"
                    className="payBox"
                    show={lgShow1}
                    onHide={
                      () => {
                        setLgShow1(false)
                      }
                    }
                    aria-labelledby="modal1"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="modal1">
                        SMM CREATIVE 2.0 kursiga yozilish
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                      <Payme plan={1} />

                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>

            <Col className="TarifColumn" xl={4} lg={4} md={6} sm={12}  >

              <div className="boxTarif" >
                <>
                  <div className="tarifTitle">
                    <span>&#10033; </span> Premium Tarifi
                  </div>
                  <div className="tarifPrice">
                    2.000.000 <span> UZS</span>
                  </div>
                  <ul className="tarifServis" >
                  {
                      FaqsAccorPrem.map((sub, ind) => {
                        return (
                          <>
                            <li className="tarifServis__item" >&#10033;  {sub.title}</li>
                            <li>
                              <ul className="tarifServis">
                              {/* <li className="tarifServis__item" >&#10033; {sub.items[0]} </li> */}
                                {
                                  sub.items.map((el, i) => {
                                    return (
                                      <li className="tarifServis__item" >&#10033; {el} </li>
                                    )
                                  })
                                }
                              </ul>
                            </li>
                          </>

                        )
                      })
                    }
                  </ul>
                  <Button className=" ShadowBtn  formKursBtn" onClick={() => {
                    setLgShow2(true);
                  }
                  }>
                    <p className="InBtn" >Kursga yozilish</p>

                  </Button>
                  <Modal
                    size="lg"
                    className="payBox"
                    show={lgShow2}
                    onHide={() => setLgShow2(false)}
                    aria-labelledby="modal2"
                  >

                    <Modal.Header closeButton>
                      <Modal.Title id="modal2">
                        SMM CREATIVE 2.0 kursiga yozilish
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Payme />

                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>

            <Col className="TarifColumn " xl={4} lg={4} md={12} sm={12}>

              <div className="boxTarif" >
                <>
                  <div className="tarifTitle">
                    <span>&#10033; </span>  Vip Tarifi
                  </div>
                  <div className="tarifPrice">
                    3.000.000 <span> UZS</span>
                  </div>
                  <ul className="tarifServis" >
                    {
                      FaqsAccor.map((sub, ind) => {
                        return (
                          <>
                            <li className="tarifServis__item" >&#10033;  {sub.title}</li>
                            <li>
                              <ul className="tarifServis">
                              {/* <li className="tarifServis__item" >&#10033; {sub.items[0]} </li> */}
                                {
                                  sub.items.map((el, i) => {
                                    return (
                                      <li className="tarifServis__item" >&#10033; {el} </li>
                                    )
                                  })
                                }
                              </ul>
                            </li>
                          </>

                        )
                      })
                    }
                  </ul>



                  <Button className=" ShadowBtn  formKursBtn" onClick={() => {
                    setLgShow3(true);
                  }
                  }>
                    <p className="InBtn" >Kursga yozilish</p>

                  </Button>
                  <Modal
                    size="lg"
                    className="payBox"
                    show={lgShow3}
                    onHide={() => setLgShow3(false)}
                    aria-labelledby="modal3"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="modal3">
                        SMM CREATIVE 2.0 kursiga yozilish
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                      <Payme />

                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>

          </Row>
        </section>

        {/* Darslar section */}
        <HeaderTitle theme="KURS QANDAY OLIB BORILADI" />
        <div className="box carouselContainer">
          <section id="darsBlock" >
            <Row className="darsRow" >
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockTitle"> Darslar </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockText"> Kurs modullardan tashkil topgan. Sizga ma’lum vaqtda darslar ochib beriladi </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow">1  </div>
                  <div className="darsBlockCardShadow">1  </div>
                  <div className="darsBlockCardShadow">1  </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow" >
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockTitle"> Vazifalar </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockText"> Darslar so‘ngida siz berilgan uy vazifalarini topshirasiz </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow"> 2 </div>
                  <div className="darsBlockCardShadow"> 2 </div>
                  <div className="darsBlockCardShadow"> 2 </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow" >
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockTitle"> Tekshiruv </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockText"> Vazifalaringiz kurs rahbaringiz tomonidan tekshirib boriladi </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow"> 3 </div>
                  <div className="darsBlockCardShadow"> 3 </div>
                  <div className="darsBlockCardShadow"> 3 </div>
                </div>
              </Col>
            </Row>

            <Row className="darsRow" >
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockTitle"> ALOQA </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockText"> Kurs rahbari bilan belgilangan vaqtda to‘g‘ridan-to‘g‘ri aloqada bo‘lasiz </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow">4  </div>
                  <div className="darsBlockCardShadow">4  </div>
                  <div className="darsBlockCardShadow">4  </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow" >
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockTitle"> EKSPERTLAR </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockText"> Barcha modullar so‘ngida kurs rahbari hamda ekspertlar bilan muloqot qilasiz </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow">5  </div>
                  <div className="darsBlockCardShadow">5  </div>
                  <div className="darsBlockCardShadow">5  </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow" >
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockTitle"> Imtixon </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="darsBlockText"> Modul so‘ngida umumiy imtihon vazifasini bajarasiz </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4} >
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow">  6</div>
                  <div className="darsBlockCardShadow">  6</div>
                  <div className="darsBlockCardShadow">  6</div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
        {/* Lenta bn pinkBox */}
        <ColorBlock />
        <Wheel />

      </main>
      <Footer />
      <br /><br /><br /><br /><br />
    </>
  );
};

export default Second;
