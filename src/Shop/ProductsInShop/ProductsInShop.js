import React from 'react'
import './productsInShop.css'
import ProductCard from '../../Components/ProductCard/ProductCard'
import products3 from '../../products3'
import sayer from '../../sayer'


const ProductsInShop = () => {
  const products =[... products3, ...sayer]

  console.log(products)
  const productslocal=[]
  for (let index = 0; index < 8; index++) {
      productslocal.push(
      <div className='div-product-id' key={index}>
          <ProductCard
              linkName={products[index]._id}
              className='product-card-class'
              src={products[index].image}
              title={products[index].name}
              price={products[index].price}
          />
      </div>
      )

  }


  return (
    <div id='products-in-shop-id'>
        {productslocal}
    </div>
  )
}

export default ProductsInShop