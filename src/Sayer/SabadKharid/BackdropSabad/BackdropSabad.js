import './BackdropSabad.css'
import { useSelector , useDispatch } from 'react-redux'
import * as actionTypes from '../../../store/actions'

const BackdropSabad = () => {
const dispatch =useDispatch()
const showsabad=useSelector((state)=>state.showsabad)
  return (
    (showsabad)?<div id='backdrop-sabad-id' onClick={()=>dispatch({type:actionTypes.CLOSESABAD})}></div>:null
  )
}

export default BackdropSabad