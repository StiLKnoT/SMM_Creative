import React from "react";
import "./Second.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Assets
import umidjon from "../../assets/keyslar/umidjon.png";
import ilxom from "../../assets/keyslar/ilxom.png";
import jamila from "../../assets/keyslar/jamila.png";
import tabib from "../../assets/keyslar/tabib.png";
import { IoLogoInstagram } from "react-icons/io5";
import instagramLogo from "../../assets/icons/instagram.png";
import TikTokLogo from "../../assets/icons/tiktok.png";
import YouTubeLogo from "../../assets/icons/youtube.png";

import { FaArrowRight } from "react-icons/fa";

const Second = () => {
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

  return (
    <main className="keyBox">
      <div className="titleBox">
        <h4 className="titleBox__item">BIZNING keyslar</h4>
      </div>
      {/* <main className="container"> */}
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
                      Pp
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

      <div className="titleBox">
        <h4 className="titleBox__item">NEGA bizni tanlashdi</h4>
      </div>


      <br/>
      <br/>
      <br/>
      <br/>

      .carouselbox


    </main>
  );
};

export default Second;
