import React from 'react'
import './moarfi.css'
// import Dokme from '../Dokme/Dokme'

const Moarfi = (props) => {
  return (
    <div id='moarfi-id' style={props.style}>
        <div id='img-moarfi-id'>
            <img src={props.src} alt={props.alt}/>
        </div>
        <div id='text-moarfi-id'>
            <h3 id='h2-text-moarfi-id'>{props.title}</h3>
            <p dir='rtl'>{props.text}</p>
        </div>
    </div>
  )
}

export default Moarfi