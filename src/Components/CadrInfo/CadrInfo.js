import React from 'react'
import './cadrInfo.css'
import { Link } from 'react-router-dom'

const CadrInfo = (props) => {
  return (
    <Link className={props.className} id='cadr-ifo-id'>
        <img src={props.src} alt={props.alt} />
    </Link>
  )
}

export default CadrInfo