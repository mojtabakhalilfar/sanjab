import React from 'react'
import './porforooshHa.css'
import Products from '../../Components/Products/Products'
import ProductCard from '../../Components/ProductCard/ProductCard'
import products3 from '../../products3'

const PorforooshHa = () => {
    const productslocal=[]
    for (let index = 0; index < 4; index++) {
        productslocal.push(
        <div className='div-product-id' key={index}>
            <ProductCard
                linkName={products3[index]._id}
                className='product-card-class'
                src={products3[index].image}
                title={products3[index].name}
                price={products3[index].price}
            />
        </div>
        )

    }
  return (
    <Products 
        className='porforoshha-class'
        title='پر فروش ترین محصولات'
        products={productslocal}
    />
  )
}

export default PorforooshHa