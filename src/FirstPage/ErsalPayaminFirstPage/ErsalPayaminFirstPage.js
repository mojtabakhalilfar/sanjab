import './ersalPayaminFirstPage.css'
import ErsalPayam from '../../Components/ErsalPayam/ErsalPayam'
import { Link } from 'react-router-dom'

const ErsalPayaminFirstPage = (props) => {
  return (
    <div className={props.className} id='ersal-payam-firspage-id'>
        <ErsalPayam 
            className='ersal-paam-class child-ersal-payam-firspage'
            title='برای پیگیری خرید و یا ارسال پیشنهادات و انتقادات می توانید از فرم زیر نیز استفاده نمایید'
            />
        <div id='tasavir-ersl-payam-firts-page'>
            <div className='insta-ersal-paam-class child-ersal-payam-firspage'>
                <Link>
                    <img src={require('../../assest/insta.png')} alt='insta' />
                </Link>
            </div>
            <div className='goshi-ersal-paam-class child-ersal-payam-firspage'>
                <Link>
                    <img src={require('../../assest/goshi.png')} alt='goshi' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ErsalPayaminFirstPage