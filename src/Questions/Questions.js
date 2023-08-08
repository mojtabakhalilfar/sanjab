import React from 'react'
import './Questions.css'
import Layout from '../Components/Layout/Layout'
import Question from './Question/Question'
import { useDispatch } from 'react-redux'
// import * as actionTypes from '../store/actions'

const Questions = () => {
  const dispatch =useDispatch()
  const hgh={h:1,l:2}
  return (
    <Layout >
      <div className='Questions-class'>
        <Question numberQuestion={1} className='Question-in-Questions-class' question='فروشگاه کجاست و سفارش ها از کجا ارسال میشود ؟'>سنجاب در شهرستان تویسرکان (استان همدان)میباشد و سفارشات شما از همین شهرستان ارسال میشود.</Question>
        <Question numberQuestion={2} question='فروشگاه کجاست و سفارش ها از کجا ارسال میشود ؟'>سنجاب در شهرستان تویسرکان (استان همدان)میباشد و سفارشات شما از همین شهرستان ارسال میشود.</Question>
        <Question numberQuestion={3} question='فروشگاه کجاست و سفارش ها از کجا ارسال میشود ؟'>سنجاب در شهرستان تویسرکان (استان همدان)میباشد و سفارشات شما از همین شهرستان ارسال میشود.</Question>
        <Question numberQuestion={4} question='فروشگاه کجاست و سفارش ها از کجا ارسال میشود ؟'>سنجاب در شهرستان تویسرکان (استان همدان)میباشد و سفارشات شما از همین شهرستان ارسال میشود.</Question>
        <Question numberQuestion={5} question='فروشگاه کجاست و سفارش ها از کجا ارسال میشود ؟'>سنجاب در شهرستان تویسرکان (استان همدان)میباشد و سفارشات شما از همین شهرستان ارسال میشود.</Question>
      </div>


      <button onClick={()=>dispatch({type:hgh})}>jjjj</button>
    </Layout>
  )
}

export default Questions