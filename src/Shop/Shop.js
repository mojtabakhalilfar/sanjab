import React from 'react'
import Layout from '../Components/Layout/Layout'
import ProductsInShop from './ProductsInShop/ProductsInShop'
import './shop.css'

const Shop = () => {
  return (
    <Layout >
      <ProductsInShop className='shop-class' />
    </Layout>
  )
}

export default Shop