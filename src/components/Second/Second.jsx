import React, { useState } from "react";
import { Input, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
// Components
import Box from '@mui/material/Box';
import Col from "react-bootstrap/Col";
import { Avatar } from "@mui/material";
import Card from '@mui/material/Card';
import Row from "react-bootstrap/Row";
// import Image from 'react-bootstrap/Image';
import Carousel from "react-multi-carousel";
// import Container from "react-bootstrap/Container";
// import Typography from '@mui/material/Typography';
import MuiAccordion from "@mui/material/Accordion";
import CardContent from '@mui/material/CardContent';
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Paycom from '../../Paycom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



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
import ShadowButton from "../atom/buttons/ShadowButton";
import Payme from "../../Paycom";


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
 
  // Modal
  const [lgShow1, setLgShow1] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);




  return (

    <main className="keyBox">

      {/* Keys Section */}

      <div className="titleBox">
        <h4 className="titleBox__item">BIZNING keyslar</h4>
      </div>
      <div className="box">
        <div className="container">
          {rows.map((el, i) => {
            return (
              <div className="personBlock">
                <Row key={i}>
                  <Col xl={8} lg={8} md={8} sm={12}>
                    <img
                      src={el.bannerImg}
                      alt={el.Name}
                      className="img-fluid shadow-4 bannerImgPort "
                    />
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12}>
                    <div className="simpleCard">
                      <div className="card__name">{el.Name}</div>
                      <div className="card__info">{el.infoText}</div>
                    </div>
                  </Col>
                </Row>
                <h4 className="brText"> Biz bilan hamkorlikdan so'ng </h4>

                <Row className="greenCards">
                  <Col xl={4} lg={4} md={4} sm={12} className=" greenCardCol ">
                    <div className="greenCard">
                      <div className="innerGreenCard">
                        <div className="innerGreenCardLeft">
                          <img src={instagramLogo} alt={el.Name} />
                          <span>{el.instNum}</span>
                        </div>
                        <p>Instagram obunachilari</p>
                      </div>
                      <button className="greenCardBtn">
                        <a href="#">
                          {" "}
                          Profilga o'tish <FaArrowRight />{" "}
                        </a>
                      </button>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} md={4} sm={12} className=" greenCardCol ">
                    <div className="greenCard">
                      <div className="innerGreenCard">
                        <div className="innerGreenCardLeft">
                          <img src={TikTokLogo} alt={el.Name} />
                          <span>{el.tikNum}</span>
                        </div>
                        <p>TikTok obunachilari</p>
                      </div>
                      <button className="greenCardBtn">
                        <a href="#">
                          {" "}
                          Profilga o'tish <FaArrowRight />{" "}
                        </a>
                      </button>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} md={4} sm={12} className=" greenCardCol ">
                    <div className="greenCard">
                      {/* <YouTubeLogo /> */}
                      <div className="innerGreenCard">
                        <div className="innerGreenCardLeft">
                          <img src={YouTubeLogo} alt="{el.Name}" />
                          <span>{el.youNum}</span>
                        </div>
                        <p>YouTube obunachilari</p>
                      </div>
                      <button className="greenCardBtn">
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
      <div className="titleBox">
        <h4 className="titleBox__item">NEGA bizni tanlashdi</h4>
      </div>
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

      {/* FAQs Section */}

      <div className="titleBox">
        <h4 className="titleBox__item">Ko'p Beriladigan savollar</h4>
      </div>
      <div className="box carouselContainer ">
        {
          carouselAccor.map((elem, i) => {
            return (
              <Accordion className="KouchAccor__accordion" expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
                  <div>
                    <h5 className="accordion_title">
                      {elem.title}
                    </h5>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="accordionInner">
                  <div className="innerAcc_text">
                    {elem.answer}
                  </div>
                </AccordionDetails>
              </Accordion>
            )
          })
        }
      </div>

      {/* Tariflar section */}
 
        <section className="planChange">
          <Row>

            <Col xl={4} lg={4} md={4} sm={4}>
              <div className="boxTarif" >

                <>
                  <Button onClick={() => {
                    setLgShow1(true);
                    new Paycom('#submitPlan1', '#submitPlan1Buttonontainer');
                  }
                  }>Kursga yozilish</Button>
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


                    <Payme/>


                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>

            <Col xl={4} lg={4} md={4} sm={4}>

              <div className="boxTarif" >

                <>
                  <Button onClick={() => setLgShow2(true)}>Kursga yozilish</Button>
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
                      <form className="modalForm">
                        <input className="formInput" type="text" placeholder="Ismingiz (Sizga qanday murojaat qilishimizni hohlaysiz?)" required />
                        <br />
                        <input className="formInput" type="number" placeholder="Telefon raqamingiz (+99891 234 56 78 ko‘rinishida)" required />
                        <ShadowButton />
                      </form>
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>

            <Col xl={4} lg={4} md={4} sm={4}>

              <div className="boxTarif" >

                <>
                  <Button onClick={() => setLgShow3(true)}>Kursga yozilish</Button>
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
                      <form className="modalForm" >
                        <input className="formInput" type="text" placeholder="Name" required />
                        <br />
                        <input className="formInput" type="number" placeholder="Name" required />

                        <ShadowButton />
                      </form>
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>

          </Row>
        </section>

    </main>
  );
};

export default Second;
