import './backdrop.css'
import { useSelector , useDispatch } from 'react-redux'
import * as actionTypes from '../../store/actions'

const Backdrop = () => {
    const vorod =(useSelector((state)=>state.vorod))
    const sabtnam =(useSelector((state)=>state.sabtname))
    const dispath = useDispatch()

  return (
    (vorod || sabtnam)? <div className='backdrop-class' onClick={()=>dispath({type:actionTypes.CLOSEMODAL})}></div>:null
  )
}

export default Backdrop