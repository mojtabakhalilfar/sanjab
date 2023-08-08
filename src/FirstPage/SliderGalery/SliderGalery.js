import React from 'react'
import galery from '../../galery'
import './slider.css'
import { useState } from 'react'
import { GrNext , GrPrevious } from "react-icons/gr";

const SliderGalery = () => {
    const [index , setIndex]=useState([0,1,2])
    const nextPic = ()=>{
        const arry = [...index]
        if (arry[0]<5){
            arry[0]+=1
        }
        else{
          arry[0]=0  
        }
        if (arry[1]<5){
            arry[1]+=1
        }
        else{
          arry[1]=0  
        }
        if (arry[2]<5){
            arry[2]+=1
        }
        else{
          arry[2]=0  
        }
        setIndex(arry)
        console.log(index)
    }
    const prevPic = ()=>{
        const arry = [...index]
        if (arry[0]>0){
            arry[0]-=1
        }
        else{
          arry[0]=5  
        }
        if (arry[1]>0){
            arry[1]-=1
        }
        else{
          arry[1]=5  
        }
        if (arry[2]>0){
            arry[2]-=1
        }
        else{
          arry[2]=5  
        }
        setIndex(arry)
        console.log(index)
    }
  return (
    <div id='main-slider2'>
      <div id='body-slider2'>
        <div className='button-div-slider2'>
            <GrPrevious onClick={nextPic} className='icon-slider'/>
        </div>
        <div id='img-body-slider2'>
            <img alt='slide1' src={galery[index[0]]}/>
            <img alt='slide2' src={galery[index[1]]}/>
            <img alt='slide3' src={galery[index[2]]}/>
        </div>
        <div onClick={prevPic}className='button-div-slider2'>
            <GrNext className='icon-slider'/>
        </div>
      </div>
    </div>
  )
}

export default SliderGalery
