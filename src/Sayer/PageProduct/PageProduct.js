import React from 'react'
import './PageProduct.css'
import Layout from '../../Components/Layout/Layout'
import products from '../../products'
import { useParams } from 'react-router-dom'

const PageProduct = () => {
  const {userId} = useParams();
  console.log(userId)
  return (
    <Layout>
        
    </Layout>
  )
}

export default PageProduct