import React from 'react'
import '../First.css'
import sunIcon from '../../../assets/images/sun.png'

function Wheel() {
    const social = [
        {'name': "Target",
          'img': sunIcon
        },
        {'name': "AUDITORIYA",
          'img': sunIcon
        },
        {'name': "POST",
          'img': sunIcon
        },
        {'name': "INSTAGRAM",
          'img': sunIcon
        },
        {'name': "Facebook",
          'img': sunIcon
        },
        {'name': "reels",
          'img': sunIcon
        },
        {'name': "lives",
          'img': sunIcon
        },
        {'name': "followers",
          'img': sunIcon
        },
        {'name': "stories",
          'img': sunIcon
        },
        {'name': "LIKES",
          'img': sunIcon
        },
        {'name': "COMMENTS",
          'img': sunIcon
        },
        {'name': "TIK TOK",
          'img': sunIcon
        },
      ]
  return (
    <div className='Wheel'>
      <div className='underWheel'>
    {social.map(({name,img},index)=>{
      return(
        <div className='WheelLine'>
       <img src={img} style={{background: "#222628"}}/>
       <div className='WheelText'>{name}</div>
     </div>
      )
    })}
    </div>
   
  </div>
  )
}

export default Wheel
