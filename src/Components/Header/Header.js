import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import { useDispatch } from "react-redux";
import * as actionTypes from '../../store/actions'



const Header = (props) => {
    const dispatch = useDispatch();
  return (
    <header className={props.className} id='header-id'>
        <div id='first-child-header'>
            <div id='buy-basket' className='color-text'>
                <button onClick={()=>dispatch({ type: actionTypes.SHOWSABAD})}>
                <FiShoppingCart className='fiShoppingCart-class'/>
                </button>
            </div>
            <div id='log'>
                <button onClick={()=>dispatch({ type: actionTypes.VOROD})} className='color-text buttom-header-class'>ورود</button>    
                /
                <button onClick={()=>dispatch({ type: actionTypes.SABTNAME})} className='color-text buttom-header-class'>ثبت نام</button>
            </div>
        </div>
        <div id='second-child-header'>
            <nav id='nav-main'>
                <ul>
                    <Link className='color-text navli' to='/'>خانه</Link>
                    <Link className='color-text navli' to='/shop'>فروشگاه</Link>
                    <Link className='color-text navli' to='/contact-us'>تماس با ما</Link>
                    <Link className='color-text navli' to='/questions'>سوالات متداول</Link>
                </ul>
            </nav>
        </div>
    </header>
  )
}


export default Header