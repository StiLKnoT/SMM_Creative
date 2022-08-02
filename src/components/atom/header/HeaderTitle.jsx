import React from 'react'
import './HeaderTitle.css'

function HeaderTitle(props) {
  return (
    <div className='headerTitleBlock' >
        <hr className='hrLine' />
            <h2 className='h2Text'>{props.theme}</h2>
        <hr className='hrLine'/>
    </div>
  )
}

export default HeaderTitle
