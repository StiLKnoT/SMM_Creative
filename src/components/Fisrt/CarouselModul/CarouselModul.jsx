import React from "react";
import Carousel from "react-multi-carousel";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import "./CarouselModul.css";

const createCarousel = (
  modul,
  name,
  nickname,
  text,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
  text13,
  text14,
  text15,
  text16
) => {
  return {
    modul,
    name,
    nickname,
    text,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12,
    text13,
    text14,
    text15,
    text16
  };
};
const carouselRows = [
  createCarousel(
    "1 - modul",
    "kirish",
    "afshon_official",
    "01 — Vaqtni to‘g‘ri taqsimlash",
    "02 — Kursdan to‘g‘ri foydalanish va natijaga chiqish usullari",
    " ",
    "Moduldan so‘ng:",
    " ",
    "Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. "
  ),
  createCarousel(
    "2 - modul",
    "smm",
    "afshon_official",
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
    " ",
    "Siz SMM qanday soha ekanligini, sohada uchraydigan terminlarni tushunasiz, maqsadli auditoriyani topish, kuchli takliflar berish, kompaniyani tahlili qilish va grafik dizaynerlarga texnik topshiriq berishni o‘rganasiz. Sotuvchi matnlarni yozish ko‘nikmasiga ega bo‘lasiz. Deadline bilan ishlashni o‘rganasiz. "
  ),
  createCarousel(
    "3 - modul",
    "vizual",
    "afshon_official",
    "01 — Akkauntga bio yozish  ",
    "02 — Nickname tanlash",
    "03 — Akkauntni  vizual oformleniya qilish  ",
    "04 — Taplink oformleniya",
    " ",
    "Moduldan so‘ng:",
    " ",
    "Vizual nima ekanligini bilib olasiz. Akkauntga bio yozishni, akkauntga nickname tanlashni o‘zlashtirasiz. Akkauntni oformleniya qilishni va taplink oformleniyani o‘rganasiz."
  ),
  createCarousel(
    "4 - modul",
    "kontent",
    "afshon_official",
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
    " ",
    "Kontent nima ekanligini bilasiz, kontent turlarini farqlashni boshlaysiz. Kontent plan tuzishni o‘rganasiz, instagram reels va istoriyalar uchun kontent ishlashni o‘zlashtirasiz. YouTube va TikTok ga postlar joylashni o‘ganasiz. Kontent uchu g‘oya topish yo‘llarini  o‘rganasiz. "
  ),
  createCarousel(
    "5 - modul",
    "meta",
    "afshon_official",
    "01 — Meta ( Instagram va Facebook ) ",
    "02 — Facebook business suite ",
    "03 — Targetingga kirish  ",
    "04 — Retargeting va Look-Alike ",
    " ",
    "Moduldan so‘ng:",
    " ",
    "Meta haqida tushanchaga ega bo‘lasiz, Instagram va Facebook bo‘yicha instrumentarga ega bo‘lasiz, postlarni oldindan rejalashtirib qo‘yishni, boshlang‘ich targeting va retargetinglarni o‘rganasiz."
  ),
  createCarousel(
    "6 - modul",
    "Veb sayt va chatbot bilan ishlash",
    "afshon_official",
    "01 — Veb sayt yasash (dasturlashsiz ) ",
    "02 — Chat botlar bilan tanishuv ",
    "03 — Blogerlar bilan ishlash va Bitta patron qoidasi  ",
    " ",
    "Moduldan so‘ng:",
    " ",
    "Dasturlashsiz veb sayt yasashni o‘rganasiz, o‘zingiz va mijozlar uchun veb sayt yasay olasiz. Chatbotlar bilan ishlashni o‘rganasiz, bloggerlar bilan ishlaganda qanday ishlashni o‘zlashtirasiz. Bitta patron qoidasini hayotda qo‘llashni o‘rganasiz."
  ),
  createCarousel(
    "7 - modul",
    "sotuv",
    "afshon_official",
    "01 — Mijozlarni topish va muzokara o‘tkazish",
    "02 — Mijoz uchun Briyef va SMM strategiya ",
    "03 — Portfoliyoga ega bo‘lmasdan turib, mijozga tijoriy taklif berish usullari  ",
    "04 — Qonuniy ishlash va aldanib qolmaslik yo‘llari ",
    "05 — Professional sotuvchi blan zoom ",
    "06 — Yurist bilan zoom   ",
    " ",
    "Moduldan so‘ng:",
    " ",
    "Mijozni qayerlardan topish, ular bilan muzokara o‘tkazishni o‘rganasiz, portfoliyoga ega bo‘lmasdan mijoz topishni o‘rganasiz. Sotuv bo‘yicha ko‘nikmaga ega bo‘lasiz. Qonuniy ishlash va aldanib qolmaslik yo‘llarini o‘rganasiz. "
  ),
  createCarousel(
    "8 - modul",
    "shaxsiy brend",
    "afshon_official",
    "01 — Shaxsiy brend nima va uning kuchi ",
    "02 — Shaxsiy brend qurish ",
    "03 — Shaxsiy brend orqali sotuvlarni oshirish",
    " ",
    "Moduldan so‘ng:",
    " ",
    "Shaxsiy brend nima ekanligini va qanday qurilishini, sotuvga qanday qilib ta’sir o‘tkaza olishini o‘rganasiz. Shaxsiy brend qurishni boshlaysiz. "
  ),
  createCarousel(
    "9 - modul",
    "psixolog",
    "afshon_official",
    "01 — Muzokara oldidan yoki uchrashuvda qo‘rquvlarni yengish yo‘li ",
    "02 — Psixolog bilan zoom  ",
    " ",
    "Moduldan so‘ng:",
    " ",
    "Mijozlar bilan muzokara oldida bo‘ladigan qo‘rquvlarni yengish usullarini o‘rganasiz. Savollaringizga javob olasiz."
  ),
  createCarousel(
    "",
    "maxsus modul",
    "afshon_official",
    "01 — Kuratorlar ko‘magi va telegram guruh ",
    "02 — Umidjon Ortiqov bilan 2 ta  zoom ",
    "03 — Umidjon Ortiqov bilan telegram guruh ",
    "04 — Umidjon Ortiqov bilan 6 ta  zoom ",
    "05 — Eng yaxshi 5 ta o‘quvchiga loyiha berish "
  
  ),
];


// Carousel responsive settings
const responsives = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 947 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

function CarouselModul() {
  return (
    <div className="CarouselModul">
      <Carousel responsive={responsives} id="carCardsBot" autoPlay infinite
  autoPlaySpeed={3000}
  arrows

  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}

  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  >
        
        {carouselRows.map((el, i) => {
          return (
            <>
              <div className="KarouselMainCard" id="ModulID" key={i}>
                <Box
                  className="KarouselMainCard"
                  id="ModulMainCard"
                  sx={{ minWidth: 275 }}
                >
                  <div className="ModulLeft">
                    <div className="ModulLeftH2">{el.modul}</div>
                    <p className="ModulLeftText">{el.name}</p>
                  </div>
                  <Card
                    className="Karousel__card"
                    id="ModulCard"
                    variant="outlined"
                  >
                    <>
                      <CardContent id="cardContentCarousel">
                        <div className="underBlocks" id="ModulUnderBlock">
                          <h5> {el.text} </h5>
                          <h5>{el.text2}</h5>
                          <h5>{el.text3}</h5>
                          <h5>{el.text4}</h5>
                          <h5>{el.text5}</h5>
                          <h5>{el.text6}</h5>
                          <h5>{el.text7}</h5>
                          <h5>{el.text8}</h5>
                          <h5>{el.text9}</h5>
                          <h5>{el.text10}</h5>
                          <h5>{el.text11}</h5>
                          <h5>{el.text12}</h5>
                          <h5>{el.text13}</h5>
                          <h5>{el.text14}</h5>
                          <h5>{el.text15}</h5>
                          <h5>{el.text16}</h5>
                        </div>
                      </CardContent>
                    </>
                  </Card>
                </Box>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselModul;
