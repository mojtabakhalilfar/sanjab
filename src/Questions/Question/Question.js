
import './Question.css'


const Question = (props) => {
  return (
    <div dir='rtl' className={props.className} id='question-page-id'>
        <div id='question-id'  >
            <span>{props.question}</span>
        </div>
        <div id='answer-id'>{props.children}</div>
        <hr/>    
    </div>
  )
}

export default Question