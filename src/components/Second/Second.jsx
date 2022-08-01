import React, { useState } from "react";
import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";
// Components
import Box from '@mui/material/Box';
import Col from "react-bootstrap/Col";
import { Avatar } from "@mui/material";
import Card from '@mui/material/Card';
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image';
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import Typography from '@mui/material/Typography';
import MuiAccordion from "@mui/material/Accordion";
import CardContent from '@mui/material/CardContent';
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";


// Styles
import "./Second.css";
import './components/CarouselCard.css'
import './components/CarouselCards.css'
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
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const createAccordion = (title, answer) => {
    return { title, answer }
  }
  const carouselAccor = [
    createCarousel('Umidjon', 'afshon_official'),
    createCarousel('Umidjon', 'afshon_official'),
    createCarousel('Umidjon', 'afshon_official'),
    createCarousel('Umidjon', 'afshon_official'),
    createCarousel('Umidjon', 'afshon_official'),
    createCarousel('Umidjon', 'afshon_official'),
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

  function scrollL(params) {
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }

  return (
    <main className="keyBox ">

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
      <div className="box" >
        <Accordion
          className="KouchAccor__accordion"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}

        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              className="accordion__title kouchAccTitleBl "
              component={"div"}
            >
              01 — HR tizimini yaratish
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionInner">
            <Typography className="innerAcc__text" component={"div"}>
              <div className="accTextPart">
                Kompaniyaning missiyalari, qadriyatlari va vazifalari.
                <br /> HR rejalash (Kompaniya kerak buladigan xodimlar sonini aniqlash).
                <br /> Ishga olishda samarali usullar (Intervyu, testlar, case savollar,…).
              </div>
              <div className="accTextPart">
                Adaptatsiya tizimi (Yangi kelgan xodimlarni tezda ishga ko'nikib ketishi va foyda keltirishi).
                <br />  Kompaniya samaradorligini oshiruvchi KPI tizimini yo'lga qo'yish.
                <br />  Maosh wa kompensatsiya tizimini yaratish.
                <br /> Motivatsiya dasturlari.
                <br />  Ichki nizom va standart operatsion protseduralar yaratish.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Second;
