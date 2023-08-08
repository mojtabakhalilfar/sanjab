import React from 'react'
import './headerFirstPage.css'
import { Link } from 'react-router-dom'

const HeaderFirstPage = () => {
  return (
    <div id='header-first-page'>
        <div id='child2-header-first-page'>
          <div id='div-takhfif-id'>
            <Link to='/takhfif'>
              <img src={require('../../assest/takhfif.png')} alt='takhfif' />
            </Link>
          </div>
          <div id='div-logo-post-id'>
            <div id='div-logo-id'>
              <img src={require('../../assest/logo.png')} alt='logo' />
            </div>
            <div id='div-post-id'>
              <span>​ارسال به تمام نقاط کشور با ارسال رایگان سفارشات بالای 10 کیلوگرم</span>
              <img src={require('../../assest/box.png')} alt='post' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeaderFirstPage