import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.linkName}`} className={props.className} id='product-card-id'>
        <div id='img-product-card-id'>
            <img src={props.src} alt={props.alt} />
        </div>
        <div id='info-product-card-id'>
            <span>{props.title}</span>
            <span>ریال{props.price}</span>
        </div>
        
    </Link>
  )
}

export default ProductCard