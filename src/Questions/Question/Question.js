import React from 'react'
import * as actionTypes from '../../store/actions'
import { useDispatch , useSelector } from 'react-redux'
import './Question.css'


const Question = (props) => {
    const dispatch =useDispatch()
    const togglequestion = useSelector((state)=>state.togglequestion)
  return (
    <div className={props.className} id='question-page-id'>
        <div id='question-id' onClick={()=>dispatch({type:actionTypes.TOGGLEQUESTION})} >
            <span>{(togglequestion)?'-':'+'}</span>
            <span>{props.question}</span>
        </div>
        {(togglequestion)? <div id='answer-id'>{props.children}</div> : null}
        <hr/>    
    </div>
  )
}

export default Question