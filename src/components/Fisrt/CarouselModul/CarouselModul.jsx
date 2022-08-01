import React from 'react'
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Avatar } from "@mui/material";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import './CarouselModul.css'

const createCarousel = (modul, name, nickname, text, text2,  text3, text4, text5, text6) => {
    return { modul, name, nickname, text, text2, text3, text4, text5, text6 }
  }
  const carouselRows = [
    createCarousel( '1 - modul','Umidjon', 'afshon_official', '01 — Vaqtni to‘g‘ri taqsimlash', '02 — Kursdan to‘g‘ri foydalanish va natijaga chiqish usullari', 'Moduldan so‘ng:', 'Siz 1-modulni tugatganingizdan so‘ng vaqtingizni to‘g‘ri boshqarishni va kursdan unumli foydalanishni o‘rganasiz. '),
    createCarousel( '2 - modul','Umidjon', 'afshon_official', 'Ummatga foyda keltirib kelayotganingiz uchun, Allohni eslatib halol ish qilyotganingiz uchun'),
    createCarousel( '3 - modul','Umidjon', 'afshon_official', 'Sizda intilish, o‘sish kuzatyapman, shuning uchun ishonch bildiraman, omad'),
    createCarousel( '4 - modul','Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
    createCarousel( '5 - modul','Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
    createCarousel( '6 - modul','Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
  ]

  // Data for Accordion
  const createAccordion= (title, answer) => {
    return { title, answer }
  }
  const carouselAccor = [
    createCarousel( 'Umidjon', 'afshon_official'   ),
    createCarousel( 'Umidjon', 'afshon_official'   ),
    createCarousel( 'Umidjon', 'afshon_official'   ),
    createCarousel( 'Umidjon', 'afshon_official'   ),
    createCarousel( 'Umidjon', 'afshon_official'   ),
    createCarousel( 'Umidjon', 'afshon_official'   ),
  ]


  // Carousel responsive settings
  const responsives = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 947 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

function CarouselModul() {
  return (
    <div className='CarouselModul'>
        
        <Carousel responsive={responsives} id="carCardsBot">
          {
            carouselRows.map((el, i) => {
              return (
                <>

                  <div className='KarouselMainCard' key={i} >
                    <Box className='KarouselMainCard' id="ModulMainCard" sx={{ minWidth: 275 }}>
                        <div className='ModulLeft'>
                            <div className='ModulLeftH2'>{el.modul}</div>
                            <p className='ModulLeftText'>{el.modul}</p>
                        </div>
                      <Card className='Karousel__card' id="ModulCard" variant="outlined">
                        <>
                          <CardContent>
                        
                            <div className="underBlock" id="ModulUnderBlock">
                              <h5> {el.text} </h5>
                              <h5>{el.text2}</h5>
                              <h5>{el.text3}</h5>
                              <h5>{el.text4}</h5>
                              <h5>{el.text5}</h5>
                              <h5>{el.text6}</h5>
                              <h5>{el.text7}</h5>
                              <h5>{el.text8}</h5>
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
      
    </div>
  )
}

export default CarouselModul
