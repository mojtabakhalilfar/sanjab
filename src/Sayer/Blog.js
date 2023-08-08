import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import products2 from '../products2'

const Blog = () => {
    const {userId} = useParams();
  return (
    <Layout>
        <img src={products2[userId-1].image} />
        <div className='infoProduct'>
            <h2>{products2[userId-1].name}</h2>
            <p>{products2[userId-1].description}</p>
            <p>price:{products2[userId-1].price}</p>

        </div>
    </Layout>
  )
}

export default Blog