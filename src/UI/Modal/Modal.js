import React from 'react'
import './modal.css'
import { useSelector} from 'react-redux'
import Backdrop from '../Backdrop/Backdrop'
import Login from '../../Sayer/Login/Login'


const Modal = (props) => {
    const vorod = useSelector((state)=>state.vorod)
    const sabtname = useSelector((state)=>state.sabtname)
  return (
    <div className='allpage-modal-class'>
        <Backdrop/>
        <div className='modal-class'
            style={{
                transform: (vorod || sabtname)? 'translateY(0)' : 'translateY(-100vh)',
                opacity:(vorod || sabtname)?'1' : '0',
            }}
        ><Login className='login-modal-class'/></div>
    </div>
  )
}

export default Modal