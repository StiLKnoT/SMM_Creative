import React, { useState } from "react";
import { Input, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
// Components
import Payme from "../../Paycom";
import Paycom from "../../Paycom";
import Footer from "../navbar/Footer";
import Box from "@mui/material/Box";
import Col from "react-bootstrap/Col";
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import Row from "react-bootstrap/Row";
import Wheel from "../Fisrt/Wheel/Wheel";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import MuiAccordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import HeaderTitle from "../atom/header/HeaderTitle";
import ColorBlock from "../Fisrt/ColorBlock/ColorBlock";
import CardContent from "@mui/material/CardContent";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

// Styles
import "./Second.css";
import "./components/CarouselCard.css";
import "./components/CarouselCards.css";
import "./components/Accordion.css";
import "react-multi-carousel/lib/styles.css";

// Images
import umidjon from "../../assets/keyslar/umidjon.png";
import ilxom from "../../assets/keyslar/ilxom.png";
import jamila from "../../assets/keyslar/jamila.png";
import tabib from "../../assets/keyslar/tabib.png";
import hadaf from "../../assets/images/hadaf.png";
import ajou from "../../assets/images/ajou.png";
import kalibri from "../../assets/images/kalibrisayt.png"
import Bobur from "../../assets/images/lids/Bobur.png";
import Laziz from "../../assets/images/lids/Laziz.png";
import Olimjon from "../../assets/images/lids/Olimjon.png";
import Doniyor from "../../assets/images/lids/Doniyor.png";
import bobur2220 from "../../assets/images/lids/bobur2220.png";
import Aziz from "../../assets/images/lids/Aziz.png";
import Nargiza from "../../assets/images/lids/Nargiza.png";
import Azizbek from "../../assets/images/lids/Azizbek.png";
import Ixlosbek from "../../assets/images/lids/Ixlosbek.png";
import Shoxrux from "../../assets/images/lids/Shxrux.png";
import Sahna from "../../assets/images/lids/Sahna.png";
import Vays from "../../assets/images/lids/Vays.png";
import Durdona from "../../assets/images/lids/Durdona.png";
import Sholponoy from "../../assets/images/lids/Sholponoy.png";
import Feruzabonu from "../../assets/images/lids/Feruzabonu.png";
import {ReactComponent as InstaIcon} from '../../assets/images/InstaIcon.svg'
import {ReactComponent as TelegramIcon} from '../../assets/images/TelegramIcon.svg'
import {ReactComponent as YouTubeIcon} from '../../assets/images/YouTubeIcon.svg'

// Icons
import instagramLogo from "../../assets/icons/instagram.png";
import instaIcon from "../../assets/icons/instaIconsm.png";
import TikTokLogo from "../../assets/icons/tiktok.png";
import YouTubeLogo from "../../assets/icons/youtube.png";
import { FaArrowRight } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    fill: "#28468C",
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
      "IT tadbirkor “Qwerty al-fajr IT company” va “Kalibri education”  asoschisi, Ijtimoiy tarmoqlar bo'yicha expert.",
      " 26.9 K",
      "https://instagram.com/afshon_official",
      " 21.4 K",
      "https://tiktok.com/afshon_official",
      " 35.7 K",
      "https://www.youtube.com/c/UmidjonOrtiqov"
    ),
    createData(
      ` ${ilxom}`,
      "ILXOM BEGIMQULOV",
      "“Asia consult”  “ZET LINE GROUP” va “EDUGATWEY” kompaniyalari asoschisi, biznesmen. ",
      " 28.6 K",
      "https://instagram.com/ilxom.begimkulov?igshid=YmMyMTA2M2Y=",
      " 33.7 K",
      "https://www.tiktok.com/@ilxom_begimqulov",
      " 31.2 K",
      "https://www.youtube.com/c/IlxomBegimqulov"
    ),
    createData(
      ` ${jamila}`,
      "JAMILA TOXIROVNA",
      "Parapsixolog, sohada 4+ yillik katta tajriba ega, psixolog - konsultant.",
      " 549 ",
      "https://www.instagram.com/jamila_toxirovna/",
      " 1 000",
      "https://www.tiktok.com/@jamila_toxirovna",
      "Jamila Toxirovna",
      "https://youtube.com/channel/UCzByFj-u29zC3lXpf-zeZzg"
    ),
    createData(
      ` ${tabib}`,
      " “AT-TABIB” loyihasi",
      "Xalq tabobati yordamida kasalliklarga davo topish, salomatlikka doir foydali maslahatlar ulashuvchi loyiha.",
      " 1 412",
      "https://instagram.com/at.tabib?igshid=YmMyMTA2M2Y=",
      " AT - TABIB",
      "https://www.tiktok.com/attabibuz",
      " 4.5 K",
      "https://www.youtube.com/c/Attabib"
    ),
    createData(
      ` ${hadaf}`,
      " “HADAF ACADEMY”",
      "Hadaf  academy Arab tiliga ixtisoslashgan  markaz hisoblanib. Arab tili bo'yicha ilm maskanidir.",
      " 622",
      "https://instagram.com/hadaf_ia?igshid=YmMyMTA2M2Y=",
      " HADAF",
      "https://t.me/hadaf_IA",
      " 96",
      "https://youtube.com/channel/UChVmjROatASf8lL48taIhYw"
    ),
    createData(
      ` ${ajou}`,
      "“ADJU”",
      "Toshkent shahridagi ADJU universiteti. Arxitektura, qurilish, elektrotexnika va kompyuter muhandisligi bo'yicha talabalarga ilm beruvchi universitet.",
      " 2366",
      "https://instagram.com/ajou_uz?igshid=YmMyMTA2M2Y=",
      " ADJU",
      "https://t.me/ajou_uz",
      " 451",
      "https://youtube.com/c/AjouUniversityinTashkent"
    ),
    createData(
      ` ${kalibri}`,
      " “Kalibri   education”",
      " Kalibri education IT  sohasida ta'lim berishga yo'naltirilgan o'quv markaz hisoblanadi.",
      " 1 249",
      "https://instagram.com/kalibri_edu?igshid=YmMyMTA2M2Y=",
      " Kalibri EDU",
      "https://https://t.me/Kalibri_edu",
      " Kalibri EDU",
      "https://youtube.com/channel/UCe6Vw_DhhXckGBS8vb2hYIw"
    ),
  ];
  // Data for Carousel
  const createCarousel = (img, name, nickname, text) => {
    return { img, name, nickname, text };
  };
  const carouselRows = [
    createCarousel(
      Bobur,
      "Bobur",
      "bobur_13_23",
      "Siz insonga katta motivatsiya berasiz va o‘z yo‘lini ko‘rsatasiz. Shuning uchun sizga ishonamiz."
    ),
    createCarousel(
      Laziz,
      "Laziz",
      "ismatillayev571",
      "Ummatga foyda keltirib kelayotganingiz uchun, Allohni eslatib halol ish qilyotganingiz uchun."
    ),
    createCarousel(
      Olimjon,
      "Olimjon Mamadaliyev",
      "olimjon__barber",
      "Sizda intilish, o‘sish kuzatyapman, shuning uchun ishonch bildiraman, omad!"
    ),
    createCarousel(
      Doniyor,
      "Doniyor",
      "_doniyor__1",
      "Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni."
    ),
    createCarousel(
      bobur2220,
      "Bobur",
      "bobir_22",
      "Inson havas bilan yashashi kerak shuning uchun sizga ishonamiz."
    ),
    createCarousel(
      Aziz,
      "Aziz Abdullayevich",
      "aziz_abdullayevich0724",
      "Chunki hayotda yordam beradigan yo‘llarni ko‘rsatasiz."
    ),
    createCarousel(
      Nargiza,
      "Esonova Nargiza",
      "esonovanargiza",
      "Eng avvalo ishingizda halollik bor."
    ),
    createCarousel(
      Azizbek,
      "Azizbek",
      "aziko__1313",
      "Chunki sizlar shu darajaga osonlik bilan erishmagansizlar va sizlarni aqliy faoliyatlaringiz yaxshi."
    ),
    createCarousel(
      Ixlosbek,
      "Ixlosbek",
      "ixlosbek_biznesmen",
      "Ishonchli bo‘lganligingiz uchun."
    ),
    createCarousel(
      Shoxrux,
      "Shoxrux Kamoliddinov",
      "__shoxrux_kirasavchik__",
      "Sizni hurmat qilamiz. To‘g‘ri yo‘lni ko‘rsatasiz, sizga ishonamiz."
    ),
    createCarousel(
      Sahna,
      "Sahna bezaklari Chirchiq",
      "oformleniya_chirchik",
      "Ishonch shundaki gaplaringizda aniqlik va odamlarga yo‘l ko‘rsatishda to‘g‘ri yo‘nalish bor."
    ),
    createCarousel(
      Vays,
      "Vays_05",
      "vays_05",
      "O‘z sohasining mutaxassisi deb o‘ylayman shuning uchun sizga ishonaman."
    ),
    createCarousel(
      Durdona,
      "Durdona Normatova",
      "durdona_normatova",
      "Sababi oddiy siz ilmlaringizni beminnat ulashasiz. Shuning uchun chin dildan hurmat qilib kuzatamiz."
    ),
    createCarousel(
      Sholponoy,
      "Sholpanoy Saginbayeva",
      "godblessed.me",
      "Aldash ko‘rganim yo‘q borini aytasiz, xato bo‘lsa ham xato deb va uni to‘g‘ri yetkazib berolasiz."
    ),
    createCarousel(
      Feruzabonu,
      "Feruzabonu",
      "guardian__angel.1",
      "O‘zingizga ishonganingiz uchun"
    ),
  ];

  // Data for Accordion
  const [expanded, setExpanded] = React.useState(`panel0`);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const createAccordion = (title, answer) => {
    return { title, answer };
  };
  const carouselAccor = [
    createAccordion(
      "DARSLAR QANDAY OLIB BORILADI ?",
      "Darslarimiz online holatda, maxsus yopiq guruh orqali olib boriladi. Sizga ushbu guruhga kirish uchun ruxsat beriladi. Siz belgilangan vaqt davomida darslarni ko‘rishingiz va takrorlashingiz mumkin."
    ),
    createAccordion(
      "DARSLARNI KIM O'TADI ?",
      " Asosiy darsni Umidjon Ortiqov o'tadi va SMM sohasiga oid mehmon spikerlar o'tadi.  "
    ),
    createAccordion(
      "TARIFNI KEYINCHALIK ALMASHTIRISH MUMKINMI ?",
      "Darslar  boshlanganidan so'ng 5 kun ichida almashtirishingiz mumkin. "
    ),
    createAccordion(
      "BO‘LIB TO‘LASH IMKONIYATI MAVJUDMI ?",
      " Albatta, kursning 50% qismini oldindan to'lab qolgan qismini 1 oy muddat ichida to'lashingiz mumkin.  "
    ),
    createAccordion(
      "DARSLAR YOZIB OLINADIMI ?",
      " Darslarga maxsus yopiq guruhda ruxsat beriladi.  "
    ),
    createAccordion(
      "DARSLARNI QANCHA VAQT DAVOMIDA KO‘RISH MUMKIN ?",
      "Darslardan 2 oy ichida foydalanishingiz mumkin. "
    ),
  ];

  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 947 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  // FAQs's accordion

  const FaqsAccorStan = [
    {
      title: "1 - Modul Kirish  ",
      items: [
        "01 — Vaqtni to'g'ri taqsimlash",
        "02 — Kursdan to'g'ri foydalanish va natijaga chiqish usullari",

        "Moduldan so'ng:",
        "Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. ",
      ],
    },
    {
      title: "2 - Modul SMM  ",
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

        "Modul so‘ngida:",
        "Siz SMM qanday soha ekanligini, sohada uchraydigan terminlarni tushunasiz, maqsadli auditoriyani topish, kuchli takliflar berish, kompaniyani tahlili qilish va grafik dizaynerlarga texnik topshiriq berishni o‘rganasiz. Sotuvchi matnlarni yozish ko‘nikmasiga ega bo‘lasiz. Deadline bilan ishlashni o‘rganasiz. ",
      ],
    },
    {
      title: "3 - Modul  Vizual  ",
      items: [
        "01 — Akkauntga bio yozish  ",
        "02 — Nickname tanlash",
        "03 — Akkauntni  vizual oformleniya qilish  ",
        "04 — Taplink oformleniya",

        "Moduldan so‘ng:",
        "Vizual nima ekanligini bilib olasiz. Akkauntga bio yozishni, akkauntga nickname tanlashni o‘zlashtirasiz. Akkauntni oformleniya qilishni va taplink oformleniyani o‘rganasiz.",
      ],
    },
    {
      title: "4 - Modul  Kontent",
      items: [
        "01 — Kontent marketing ",
        "02 — Rubrikator ",
        "03 — Kontent plan  ",
        "04 — Instagram reels ",
        "05 — Instagram Live va Instagram storiyes",
        "06 — Kontent uchun g‘oya topish",

        "Moduldan so‘ng:",
        "Kontent nima ekanligini bilasiz, kontent turlarini farqlashni boshlaysiz. Kontent plan tuzishni o‘rganasiz, instagram reels va istoriyalar uchun kontent ishlashni o‘zlashtirasiz. YouTube va TikTok ga postlar joylashni o‘ganasiz. Kontent uchu g‘oya topish yo‘llarini  o‘rganasiz. ",
      ],
    },
    {
      title: "5 - Modul Meta ",
      items: [
        "01 — Meta ( Instagram va Facebook ) ",
        "02 — Facebook business suite ",
        "03 — Targetingga kirish  ",
        "04 — Retargeting va Look-Alike ",

        "Moduldan so‘ng:",
        "Meta haqida tushanchaga ega bo‘lasiz, Instagram va Facebook bo‘yicha instrumentarga ega bo‘lasiz, postlarni oldindan rejalashtirib qo‘yishni, boshlang‘ich targeting va retargetinglarni o‘rganasiz.",
      ],
    },
  ];

  const FaqsAccorPrem = [
    {
      title: "1 - Modul Kirish  ",
      items: [
        "01 — Vaqtni to'g'ri taqsimlash",
        "02 — Kursdan to'g'ri foydalanish va natijaga chiqish usullari",

        "Moduldan so'ng:",
        "Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. ",
      ],
    },
    {
      title: "2 - Modul SMM  ",
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

        "Modul so‘ngida:",
        "Siz SMM qanday soha ekanligini, sohada uchraydigan terminlarni tushunasiz, maqsadli auditoriyani topish, kuchli takliflar berish, kompaniyani tahlili qilish va grafik dizaynerlarga texnik topshiriq berishni o‘rganasiz. Sotuvchi matnlarni yozish ko‘nikmasiga ega bo‘lasiz. Deadline bilan ishlashni o‘rganasiz. ",
      ],
    },
    {
      title: "3 - Modul  Vizual  ",
      items: [
        "01 — Akkauntga bio yozish  ",
        "02 — Nickname tanlash",
        "03 — Akkauntni  vizual oformleniya qilish  ",
        "04 — Taplink oformleniya",

        "Moduldan so‘ng:",
        "Vizual nima ekanligini bilib olasiz. Akkauntga bio yozishni, akkauntga nickname tanlashni o‘zlashtirasiz. Akkauntni oformleniya qilishni va taplink oformleniyani o‘rganasiz.",
      ],
    },
    {
      title: "4 - Modul  Kontent",
      items: [
        "01 — Kontent marketing ",
        "02 — Rubrikator ",
        "03 — Kontent plan  ",
        "04 — Instagram reels ",
        "05 — Instagram Live va Instagram storiyes",
        "06 — YouTube ga kontent ",
        "07 — Tik tok va Zet avlod kontentlari",
        "08 — Kontent uchun g‘oya topish",

        "Moduldan so‘ng:",
        "Kontent nima ekanligini bilasiz, kontent turlarini farqlashni boshlaysiz. Kontent plan tuzishni o‘rganasiz, instagram reels va istoriyalar uchun kontent ishlashni o‘zlashtirasiz. YouTube va TikTok ga postlar joylashni o‘ganasiz. Kontent uchu g‘oya topish yo‘llarini  o‘rganasiz. ",
      ],
    },
    {
      title: "5 - Modul Meta ",
      items: [
        "01 — Meta ( Instagram va Facebook ) ",
        "02 — Facebook business suite ",
        "03 — Targetingga kirish  ",
        "04 — Retargeting va Look-Alike ",

        "Moduldan so‘ng:",
        "Meta haqida tushanchaga ega bo‘lasiz, Instagram va Facebook bo‘yicha instrumentarga ega bo‘lasiz, postlarni oldindan rejalashtirib qo‘yishni, boshlang‘ich targeting va retargetinglarni o‘rganasiz.",
      ],
    },
    {
      title: "6 - Modul Veb sayt va chatbot bilan ishlash ",
      items: [
        "01 — Veb sayt yasash (dasturlashsiz ) ",
        "02 — Chat botlar bilan tanishuv ",
        "03 — Blogerlar bilan ishlash va Bitta patron qoidasi  ",

        "Moduldan so‘ng:",

        "Dasturlashsiz veb sayt yasashni o‘rganasiz, o‘zingiz va mijozlar uchun veb sayt yasay olasiz. Chatbotlar bilan ishlashni o‘rganasiz, bloggerlar bilan ishlaganda qanday ishlashni o‘zlashtirasiz. Bitta patron qoidasini hayotda qo‘llashni o‘rganasiz.",
      ],
    },
    {
      title: "7 - Modul Sotuv  ",
      items: [
        "01 — Mijozlarni topish va muzokara o‘tkazish",
        "02 — Mijoz uchun Briyef va SMM strategiya ",
        "03 — Portfoliyoga ega bo‘lmasdan turib, mijozga tijoriy taklif berish usullari  ",
        "04 — Qonuniy ishlash va aldanib qolmaslik yo‘llari ",
        "05 — Professional sotuvchi blan zoom ",
        "06 — Yurist bilan zoom   ",
  
        "Moduldan so‘ng:",
        "Mijozni qayerlardan topish, ular bilan muzokara o‘tkazishni o‘rganasiz, portfoliyoga ega bo‘lmasdan mijoz topishni o‘rganasiz. Sotuv bo‘yicha ko‘nikmaga ega bo‘lasiz. Qonuniy ishlash va aldanib qolmaslik yo‘llarini o‘rganasiz. ",
      ],
    },
    {
      title: "8 - Modul Shaxsiy brend ",
      items: [
        "01 — Shaxsiy brend nima va uning kuchi ",

        "Moduldan so‘ng:",
        "Shaxsiy brend nima ekanligini va qanday qurilishini, sotuvga qanday qilib ta’sir o‘tkaza olishini o‘rganasiz. Shaxsiy brend qurishni boshlaysiz. ",
      ],
    },
    {
      title: "9 - Modul Psixolog ",
      items: [
        "01 — Muzokara oldidan yoki uchrashuvda qo‘rquvlarni yengish yo‘li ",
        "02 — Psixolog bilan zoom  ",
        "03 — Kuratorlar ko‘magi va telegram guruh ",
        "04 — Umidjon Ortiqov bilan 2 ta  zoom ",
        "Moduldan so‘ng:",
        "Mijozlar bilan muzokara oldida bo‘ladigan qo‘rquvlarni yengish usullarini o‘rganasiz. Savollaringizga javob olasiz."
     
      ],
    }
  ];

  const FaqsAccor = [
    {
      title: "1 - Modul Kirish  ",
      items: [
        "01 — Vaqtni to'g'ri taqsimlash",
        "02 — Kursdan to'g'ri foydalanish va natijaga chiqish usullari",
        "Moduldan so'ng:",
        "Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. ",
      ],
    },
    {
      title: "2 - Modul SMM  ",
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
      
        "Modul so‘ngida:",
        "Siz SMM qanday soha ekanligini, sohada uchraydigan terminlarni tushunasiz, maqsadli auditoriyani topish, kuchli takliflar berish, kompaniyani tahlili qilish va grafik dizaynerlarga texnik topshiriq berishni o‘rganasiz. Sotuvchi matnlarni yozish ko‘nikmasiga ega bo‘lasiz. Deadline bilan ishlashni o‘rganasiz. ",
      ],
    },
    {
      title: "3 - Modul  Vizual  ",
      items: [
        "01 — Akkauntga bio yozish  ",
        "02 — Nickname tanlash",
        "03 — Akkauntni  vizual oformleniya qilish  ",
        "04 — Taplink oformleniya",

        "Moduldan so‘ng:",
        "Vizual nima ekanligini bilib olasiz. Akkauntga bio yozishni, akkauntga nickname tanlashni o‘zlashtirasiz. Akkauntni oformleniya qilishni va taplink oformleniyani o‘rganasiz.",
      ],
    },
    {
      title: "4 - Modul  Kontent",
      items: [
        "01 — Kontent marketing ",
        "02 — Rubrikator ",
        "03 — Kontent plan  ",
        "04 — Instagram reels ",
        "05 — Instagram Live va Instagram storiyes",
        "06 — YouTube ga kontent ",
        "07 — Tik tok va Zet avlod kontentlari",
        "08 — Kontent uchun g‘oya topish",
  
        "Moduldan so‘ng:",
        "Kontent nima ekanligini bilasiz, kontent turlarini farqlashni boshlaysiz. Kontent plan tuzishni o‘rganasiz, instagram reels va istoriyalar uchun kontent ishlashni o‘zlashtirasiz. YouTube va TikTok ga postlar joylashni o‘ganasiz. Kontent uchu g‘oya topish yo‘llarini  o‘rganasiz. ",
      ],
    },
    {
      title: "5 - Modul Meta ",
      items: [
        "01 — Meta ( Instagram va Facebook ) ",
        "02 — Facebook business suite ",
        "03 — Targetingga kirish  ",
        "04 — Retargeting va Look-Alike ",
  
        "Moduldan so‘ng:",
        "Meta haqida tushanchaga ega bo‘lasiz, Instagram va Facebook bo‘yicha instrumentarga ega bo‘lasiz, postlarni oldindan rejalashtirib qo‘yishni, boshlang‘ich targeting va retargetinglarni o‘rganasiz.",
      ],
    },
    {
      title: "6 - Modul Veb sayt va chatbot bilan ishlash ",
      items: [
        "01 — Veb sayt yasash (dasturlashsiz ) ",
        "02 — Chat botlar bilan tanishuv ",
        "03 — Blogerlar bilan ishlash va Bitta patron qoidasi  ",
 
        "Moduldan so‘ng:",
   
        "Dasturlashsiz veb sayt yasashni o‘rganasiz, o‘zingiz va mijozlar uchun veb sayt yasay olasiz. Chatbotlar bilan ishlashni o‘rganasiz, bloggerlar bilan ishlaganda qanday ishlashni o‘zlashtirasiz. Bitta patron qoidasini hayotda qo‘llashni o‘rganasiz.",
      ],
    },
    {
      title: "7 - Modul Sotuv  ",
      items: [
        "01 — Mijozlarni topish va muzokara o‘tkazish",
        "02 — Mijoz uchun Briyef va SMM strategiya ",
        "03 — Portfoliyoga ega bo‘lmasdan turib, mijozga tijoriy taklif berish usullari  ",
        "04 — Qonuniy ishlash va aldanib qolmaslik yo‘llari ",
        "05 — Professional sotuvchi blan zoom ",
        "06 — Yurist bilan zoom   ",

        "Moduldan so‘ng:",
        "Mijozni qayerlardan topish, ular bilan muzokara o‘tkazishni o‘rganasiz, portfoliyoga ega bo‘lmasdan mijoz topishni o‘rganasiz. Sotuv bo‘yicha ko‘nikmaga ega bo‘lasiz. Qonuniy ishlash va aldanib qolmaslik yo‘llarini o‘rganasiz. ",
      ],
    },
    {
      title: "8 - Modul Shaxsiy brend ",
      items: [
        "01 — Shaxsiy brend nima va uning kuchi ",
        "02 — Shaxsiy brend qurish ",
        "03 — Shaxsiy brend orqali sotuvlarni oshirish",
  
        "Moduldan so‘ng:",
        "Shaxsiy brend nima ekanligini va qanday qurilishini, sotuvga qanday qilib ta’sir o‘tkaza olishini o‘rganasiz. Shaxsiy brend qurishni boshlaysiz. ",
      ],
    },
    {
      title: "9 - Modul Psixolog ",
      items: [
        "01 — Muzokara oldidan yoki uchrashuvda qo‘rquvlarni yengish yo‘li ",
        "02 — Psixolog bilan zoom  ",
        "03 — Kuratorlar ko‘magi va telegram guruh ",
        "04 — Umidjon Ortiqov bilan 2 ta  zoom ",
        "05 — Umidjon Ortiqov bilan telegram guruh ",
        "06 — Umidjon Ortiqov bilan 6 ta  zoom ",
        "07 — Eng yaxshi 5 ta o‘quvchiga loyiha berish ",
        "Moduldan so‘ng:",
        "Mijozlar bilan muzokara oldida bo‘ladigan qo‘rquvlarni yengish usullarini o‘rganasiz. Savollaringizga javob olasiz"

      ],
    },
  ];

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
                    <Col xl={4} lg={3} md={3} sm={12} className="ColSimpleCard">
                      <div className="simpleCard">
                        <div className="card__name">{el.Name}</div>
                        <div className="card__info">{el.infoText}</div>
                      </div>
                    </Col>
                  </Row>
                  <h4 className="brText"> Biz bilan hamkorlikdan so'ng </h4>

                  <Row className="greenCards">
                    <Col
                      xl={3}
                      lg={3}
                      md={3}
                      sm={12}
                      className=" greenCardCol "
                    >
                      <div className="greenCard">
                        <div className="innerGreenCard">
                          <div className="innerGreenCardLeft">
                            <img src={instagramLogo} alt={el.Name} />
                            <span>{el.instNum}</span>
                          </div>
                          <p>Instagram obunachilari</p>
                        </div>
                        
                        <a target="_blank" href={el.instLink} style={{display:"flex", justifyContent:"center"}}><button className="ShadowBtn greenCardBtn">
         
                            {""}
                            Profilga o'tish <FaArrowRight />{" "}
                
                        </button>
                        </a>
                      </div>
                    </Col>

                    <Col
                      xl={3}
                      lg={3}
                      md={3}
                      sm={12}
                      className=" greenCardCol "
                    >
                      <div className="greenCard">
                        <div className="innerGreenCard">
                          <div className="innerGreenCardLeft">
                            <img src={TikTokLogo} alt={el.Name} />
                            <span>{el.tikNum}</span>
                          </div>
                          <p>TikTok obunachilari</p>
                        </div>
                        <a target="_blank" href={el.tikLink} style={{display:"flex", justifyContent:"center"}}><button  className="ShadowBtn greenCardBtn">
                        
                            {" "}
                            Profilga o'tish <FaArrowRight />{" "}
                         
                        </button>
                        </a>
                      </div>
                    </Col>

                    <Col
                      xl={3}
                      lg={3}
                      md={3}
                      sm={12}
                      className=" greenCardCol "
                    >
                      <div className="greenCard">
                        {/* <YouTubeLogo /> */}
                        <div className="innerGreenCard">
                          <div className="innerGreenCardLeft">
                            <img src={YouTubeLogo} alt="{el.Name}" />
                            <span>{el.youNum}</span>
                          </div>
                          <p>YouTube obunachilari</p>
                        </div>
                        <a target="_blank" href={el.youLink} style={{display:"flex", justifyContent:"center"}}><button className="ShadowBtn greenCardBtn">

                            {" "}
                            Profilga o'tish <FaArrowRight />{" "}
                        </button>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel setcion */}
        <HeaderTitle theme="Nega bizni tanlashadi" />
        <section className=" box carouselContainer " id="CarouselCards">
          <Carousel autoPlay infinite
  autoPlaySpeed={2000} responsive={responsive} id="carCardsBot"
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
                  <div className="KarouselMainCard" key={i}>
                    <Box className="KarouselMainCard" sx={{ minWidth: 275 }}>
                      <Card className="Karousel__card" variant="outlined">
                        <>
                          <CardContent>
                            <div className="upperBlock">
                              <Avatar
                                className="upperAvatar"
                                alt={el.name}
                                src={el.img}
                              />
                              <div className="upperBlockText">
                                <div>
                                  <h5 className="Karousel__cardTitle">
                                    {el.name}
                                  </h5>
                                </div>
                                <div className="Karousel__cardContent">
                                  <img
                                    src={instaIcon}
                                    alt={el.Name}
                                    className="upperIcon"
                                  />
                                  <span className="upperDblTxt">
                                    {el.nickname}
                                  </span>
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
              );
            })}
          </Carousel>
        </section>

        {/* FAQs || Accordion Section */}
        <HeaderTitle theme="Ko'p Beriladigan savollar" />
        <div className="box carouselContainer ">
          <section id="faqsCont">
            {carouselAccor.map((sub, ind) => {
              return (
                <Accordion
                  expanded={expanded === `panel${ind}`}
                  onChange={handleChange(`panel${ind}`)}
                  className="FAQSaccor"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "95%", flexShrink: 0 }}>
                      {sub.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{sub.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
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
              <div className="boxTarif">
                <>
                  <div className="tarifTitle">
                    <span>&#10033; </span> Standart Tarifi
                  </div>
                  <div className="tarifPrice">
                  179$
                  </div>
                  <ul className="tarifServis">
                    {FaqsAccorStan.map((sub, ind) => {
                      return (
                        <>
                          <li>
                            <ul className="tarifServis">
                              <Accordion
                                expanded={expanded === `panel${ind}`}
                                onChange={handleChange(`panel${ind}`)}
                                className="tariAccor"
                              >
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                  <Typography id="titlePriceAcc"
                                    sx={{ width: "95%", flexShrink: 0 }}
                                  >
                                    {" "}
                                    &#10033; {sub.title}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>{sub.answer}</Typography>
                                  {sub.items.map((el, i) => {
                                    return (
                                      <ul className="tarifServis">
                                        <li className="tarifServis__item">
                                          &#10033; {el}{" "}
                                        </li>
                                      </ul>
                                    );
                                  })}
                                </AccordionDetails>
                              </Accordion>
                             </ul>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <Button
                    className=" ShadowBtn  formKursBtn"
                    onClick={() => {
                      setLgShow1(true);
                    }}
                  >
                    <p className="InBtn">Kursga yozilish</p>
                  </Button>
                  <Modal 
                    size="lg"
                    className="payBox"
                    show={lgShow1}
                    onHide={() => {
                      setLgShow1(false);
                    }}
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

            <Col className="TarifColumn" xl={4} lg={4} md={6} sm={12}>
              <div className="boxTarif">
                <>
                  <div className="tarifTitle">
                    <span>&#10033; </span> PREMIUM
                  </div>
                  <div className="tarifPrice">
                  229$
                  </div>
                  <ul className="tarifServis">
                  {FaqsAccorPrem.map((sub, ind) => {
                      return (
                        <>
                          <li>
                            <ul className="tarifServis">
                              <Accordion
                                expanded={expanded === `panel${ind+20}`}
                                onChange={handleChange(`panel${ind+20}`)}
                                className="tariAccor"
                              >
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                  <Typography id="titlePriceAcc"
                                    sx={{ width: "95%", flexShrink: 0 }}
                                  >
                                    {" "}
                                    &#10033; {sub.title}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>{sub.answer}</Typography>
                                  {sub.items.map((el, i) => {
                                    return (
                                      <ul className="tarifServis">
                                        <li className="tarifServis__item">
                                          &#10033; {el}{" "}
                                        </li>
                                      </ul>
                                    );
                                  })}
                                </AccordionDetails>
                              </Accordion>
                             </ul>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <Button
                    className=" ShadowBtn  formKursBtn"
                    onClick={() => {
                      setLgShow2(true);
                    }}
                  >
                    <p className="InBtn">Kursga yozilish</p>
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
                      <Payme plan={2} />
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>

            <Col className="TarifColumn " xl={4} lg={4} md={12} sm={12}>
              <div className="boxTarif">
                <>
                  <div className="tarifTitle">
                    <span>&#10033; </span> VIP
                  </div>
                  <div className="tarifPrice">
                  399$
                  </div>
                  <ul className="tarifServis">
                  {FaqsAccor.map((sub, ind) => {
                      return (
                        <>
                          <li>
                            <ul className="tarifServis">
                              <Accordion
                                expanded={expanded === `panel${ind+50}`}
                                onChange={handleChange(`panel${ind+50}`)}
                                className="tariAccor"
                              >
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                  <Typography id="titlePriceAcc"
                                    sx={{ width: "95%", flexShrink: 0 }}
                                  >
                                    {" "}
                                    &#10033; {sub.title}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>{sub.answer}</Typography>
                                  {sub.items.map((el, i) => {
                                    return (
                                      <ul className="tarifServis">
                                        <li className="tarifServis__item">
                                          &#10033; {el}{" "}
                                        </li>
                                      </ul>
                                    );
                                  })}
                                </AccordionDetails>
                              </Accordion>
                             </ul>
                          </li>
                        </>
                      );
                    })}
                  </ul>

                  

                  <Button
                    className=" ShadowBtn  formKursBtn"
                    onClick={() => {
                      setLgShow3(true);
                    }}
                  >
                    <p className="InBtn">Kursga yozilish</p>
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
                      <Payme plan={3} />
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </Col>
          </Row>
        </section>

        {/* Darslar section */}
        <HeaderTitle theme="KURS QANDAY OLIB BORILADI" />
        <div className="box carouselContainer" id="KursLines">
          <section id="darsBlock">
            <Row className="darsRow">
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockTitle"> Darslar </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockText">
                  {" "}
                  Kurs modullardan tashkil topgan. Sizga ma’lum vaqtda darslar
                  ochib beriladi{" "}
                </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow">1 </div>
                  <div className="darsBlockCardShadow">1 </div>
                  <div className="darsBlockCardShadow">1 </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow">
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockTitle"> Vazifalar </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockText">
                  {" "}
                  Darslar so‘ngida siz berilgan uy vazifalarini topshirasiz{" "}
                </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow"> 2 </div>
                  <div className="darsBlockCardShadow"> 2 </div>
                  <div className="darsBlockCardShadow"> 2 </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow">
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockTitle"> Tekshiruv </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockText">
                  {" "}
                  Vazifalaringiz kurs rahbaringiz tomonidan tekshirib boriladi{" "}
                </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow"> 3 </div>
                  <div className="darsBlockCardShadow"> 3 </div>
                  <div className="darsBlockCardShadow"> 3 </div>
                </div>
              </Col>
            </Row>

            <Row className="darsRow">
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockTitle"> ALOQA </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockText">
                  {" "}
                  Kurs rahbari bilan belgilangan vaqtda to‘g‘ridan-to‘g‘ri
                  aloqada bo‘lasiz{" "}
                </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow">4 </div>
                  <div className="darsBlockCardShadow">4 </div>
                  <div className="darsBlockCardShadow">4 </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow">
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockTitle"> EKSPERTLAR </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockText">
                  {" "}
                  Barcha modullar so‘ngida kurs rahbari hamda ekspertlar bilan
                  muloqot qilasiz{" "}
                </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow">5 </div>
                  <div className="darsBlockCardShadow">5 </div>
                  <div className="darsBlockCardShadow">5 </div>
                </div>
              </Col>
            </Row>
            <Row className="darsRow">
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockTitle"> Imtixon </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="darsBlockText">
                  {" "}
                  Modul so‘ngida umumiy imtihon vazifasini bajarasiz{" "}
                </div>
              </Col>
              <Col className="darsBlockItem" xl={4} lg={4} md={4} sm={4}>
                <div className="boxShadowBox">
                  <div className="darsBlockCardShadow"> 6</div>
                  <div className="darsBlockCardShadow"> 6</div>
                  <div className="darsBlockCardShadow"> 6</div>
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
      <div className="UnderFooter">
        <div className="UnderFooterLeft">
          <h3 className="underH3">@QwertyAlfajr2022-</h3>
          <h3 className="underH3">Barcha huquqlar himoyalangan
          </h3>
        </div>
        <div className="UnderFooterRight">
       <h3 className="underH3" id="UnderRightH3">Ijtimoiy tarmoqlarimiz:</h3>
          <div className="footerIcons" style={{display: "flex"}}>
            <a target="_blank" className='connectLink' id="footerIC" href="https://instagram.com/afshon_official"><div className='ConnectIcons'><InstaIcon className='connectIcons'/></div></a>
                <a target="_blank" className='connectLink' id="footerIC" href="https://t.me/UmidjonOrtiqov"><div className='ConnectIcons'><TelegramIcon className='connectIcons'/></div></a>
                <a target="_blank" className='connectLink' id="footerIC" href="https://www.youtube.com/c/UmidjonOrtiqov"><div className='ConnectIcons'><YouTubeIcon className='connectIcons'/></div></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
