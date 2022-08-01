import React from 'react'
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Avatar } from "@mui/material";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import './CarouselModul.css'

const createCarousel = (img, name, nickname, text) => {
    return { img, name, nickname, text }
  }
  const carouselRows = [
    createCarousel( 'Umidjon', 'afshon_official', 'Siz insonga katta motivatsiya berasiz va o‘z yo‘lini ko‘rsatasiz. Shuning uchun sizga ishonamiz'),
    createCarousel( 'Umidjon', 'afshon_official', 'Ummatga foyda keltirib kelayotganingiz uchun, Allohni eslatib halol ish qilyotganingiz uchun'),
    createCarousel( 'Umidjon', 'afshon_official', 'Sizda intilish, o‘sish kuzatyapman, shuning uchun ishonch bildiraman, omad'),
    createCarousel( 'Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
    createCarousel( 'Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
    createCarousel( 'Umidjon', 'afshon_official', 'Men ko‘rmadim hech qayerda sizga o‘xshab motivatsiya beradigan insonni'),
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
    <div>
        
        <Carousel responsive={responsives} id="carCardsBot">
          {
            carouselRows.map((el, i) => {
              return (
                <>

                  <div className='KarouselMainCard' key={i} >
                    <Box className='KarouselMainCard' id="ModulMainCard" sx={{ minWidth: 275 }}>
                        <div>MODUL-1</div>
                      <Card className='Karousel__card' id="ModulCard" variant="outlined">
                        <>
                          <CardContent>
                            <div className="upperBlock">
                              <Avatar className="upperAvatar" alt={el.name} src={el.img} />
                              <div className="upperBlockText" id='upperBlockTextModul'>
                                <div>
                                  <h5 className="Karousel__cardTitle" >
                                    {el.name}
                                  </h5>
                                </div>
                                <div className="Karousel__cardContent" >
                                  <img src="" alt={el.Name} className="upperIcon" />
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
      
    </div>
  )
}

export default CarouselModul
