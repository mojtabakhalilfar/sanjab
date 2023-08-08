import React from 'react'
import './SabadKharid.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actionTypes from '../../store/actions'
import BackdropSabad from './BackdropSabad/BackdropSabad'
import { IoCloseSharp } from "react-icons/io5";
import ProductInBox from './ProductInBox/ProductInBox'
import products3 from '../../products3'
import sayer from '../../sayer'


const SabadKharid = () => {

  
  var total=0
  const products=[...sayer,...products3]
  const countObject = useSelector((state)=>state.shopingCart)
  const productInSabad=[]
  for(let item in countObject) {
    if(countObject[item]>0){
      for (let key in products){
        if(products[key].title ===item){
          total=total + countObject[item] * products[key].price
          productInSabad.push(
            <div>
              <ProductInBox
                  img={products[key].image}
                  key={products[key]._id}
                  id={products[key]._id}
                  alt={products[key].title}
                  title={products[key].name}
                  price={products[key].price}
                  counte={countObject[item]}
                 />
                 <hr/>
            </div>
          )
        }
      }
    }
  }
  


  const dispatch = useDispatch()
  const showsabad = useSelector((state)=>state.showsabad)

  return (
    <div>
      <BackdropSabad />
      <div id='sabad-kharid-id'
      style={{
          transform: (showsabad)? 'translateY(0)' : 'translateY(-100vh)',
          opacity:(showsabad)?'1' : '0',
      }}
      >
        <div id='header-sabad-id'>
          <button onClick={()=>dispatch({type:actionTypes.CLOSESABAD})}><IoCloseSharp className='IoCloseSharp-class'/></button>
          <h3>سبد خرید</h3>
        </div>
        <div id='list-of-product-sabad-id'>
        {productInSabad}

        </div>
        <div id='hazine-nahayi-sabad-id'>
          <span dir='rtl'>{total} تومان </span>
          <span>سبد خرید</span>
        </div>
          
        <div id ='last-child-sabad-id'>
          <div className='div-last-child-sabad-class '><Link className='link-class tasvie-saabd'>تسویه حساب</Link></div>
          <div className='div-last-child-sabad-class '><Link className='link-class moshahede-sabad'>مشاهده سبد خرید</Link></div>
        </div>
      </div>
    </div>
  )
}

export default SabadKharid