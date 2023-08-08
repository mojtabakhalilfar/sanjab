import React from 'react'
import Dokme from '../Dokme/Dokme'
import './products.css'

const Products = (props) => {
  return (
    <div id='porforooshtarin'>
        <div id='dokme-porforooshtarin'>
            <Dokme>{props.title}</Dokme>
        </div>
        <div id='products-porforooshtarin'>
          <div id='child-products-porforooshtarin'>
            {props.products}
          </div>
          
        </div>
   </div>
  )
}

export default Products