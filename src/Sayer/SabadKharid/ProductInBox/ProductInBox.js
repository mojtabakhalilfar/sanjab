import React from 'react'
import './ProductInBox.css'
import { useDispatch ,useSelector } from 'react-redux'
import sayer from '../../../sayer'
import products3 from '../../../products3'
import * as actionTypes from '../../../store/actions'
import { GrAdd ,GrFormSubtract , GrClose} from "react-icons/gr";

const ProductInBox = (props) => {
    const products=[...sayer,...products3]
    const id=props.id
    const name =products[id-1].title.toUpperCase()
    const dispatch =useDispatch()
    const conte = useSelector(state=>state.shopingCart[products[id-1].title])
    const deleteFromSabad = ()=>{
        for (let index = 0; index < conte; index++) {
            subToSabad()
            
        }
    }

    const subToSabad =()=>{
        if ((`SUB${name}`)==='SUBMAQZ1') {
          dispatch({type:actionTypes.SUBMAQZ1})
        }else if((`SUB${name}`)==='SUBMAQZ2'){
          dispatch({type:actionTypes.SUBMAQZ2})
        }else if((`SUB${name}`)==='SUBMAQZ3'){
          dispatch({type:actionTypes.SUBMAQZ3})
        }else if((`SUB${name}`)==='SUBMAQZ4'){
          dispatch({type:actionTypes.SUBMAQZ4})
        }else if((`SUB${name}`)==='SUBMAQZ5'){
          dispatch({type:actionTypes.SUBMAQZ5})
        }else if((`SUB${name}`)==='SUBMAQZ6'){
          dispatch({type:actionTypes.SUBMAQZ6})
        }else if((`SUB${name}`)==='SUBMAQZ7'){
          dispatch({type:actionTypes.SUBMAQZ7})
        }else if((`SUB${name}`)==='SUBMAQZ8'){
          dispatch({type:actionTypes.SUBMAQZ8})
        }
    
      }
      const addToSabad =()=>{
        if ((`ADD${name}`)==='ADDMAQZ1') {
          dispatch({type:actionTypes.ADDMAQZ1})
        }else if((`ADD${name}`)==='ADDMAQZ2'){
          dispatch({type:actionTypes.ADDMAQZ2})
        }else if((`ADD${name}`)==='ADDMAQZ3'){
          dispatch({type:actionTypes.ADDMAQZ3})
        }else if((`ADD${name}`)==='ADDMAQZ4'){
          dispatch({type:actionTypes.ADDMAQZ4})
        }else if((`ADD${name}`)==='ADDMAQZ5'){
          dispatch({type:actionTypes.ADDMAQZ5})
        }else if((`ADD${name}`)==='ADDMAQZ6'){
          dispatch({type:actionTypes.ADDMAQZ6})
        }else if((`ADD${name}`)==='ADDMAQZ7'){
          dispatch({type:actionTypes.ADDMAQZ7})
        }else if((`ADD${name}`)==='ADDMAQZ8'){
          dispatch({type:actionTypes.ADDMAQZ8})
        }
        
      }



    
  return (
    <div className={props.className} id='product-in-box'>
        <div id='img-product-in-box'>
            <img src={props.img} alt={props.alt} />
        </div>
        <div id='info-product-in-box'>
            <div>
                <button onClick={deleteFromSabad} id='delete-from-buylist' className='buttonSabad'><GrClose className='buttonSabad'/></button>
            </div>
            <div id='title-product-in-box'>{props.title}</div>
            <div id='tedad-product-in-box' >
                <div id='button-product-in-box' dir='rtl'>
                    <span >تعداد : </span>
                    <span className='buttons-button-product-in-box' dir='ltr'>{props.counte}</span>
                    <div id='add-sub-boxsabad'>
                      <button className='buttonSabad' onClick={addToSabad}><GrAdd className='buttonSabad' /></button>
                      <button className='buttonSabad' onClick={subToSabad}><GrFormSubtract className='buttonSabad'/></button>
                    </div>
                </div>
                <div id='price-product-in-box'>
                    <span dir='rtl'>{`${props.price} تومان `}</span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductInBox