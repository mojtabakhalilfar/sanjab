import './ersalPayam.css'
import InputComponent from '../InputComponent/InputComponent'

const ErsalPayam = (props) => {
  return (
    <form className={props.className} id='form-ersal-payam-id'>
        <div id='div1-form-ersal-payam-id'>
            <span>{props.title}</span>
        </div>
        <div>
            <div className='input-form-ersalpaam-class'>
                <InputComponent 
                    placeholder='نام و نام خانوادگی'
                />          
            </div>
            <div className='input-form-ersalpaam-class'>
                <InputComponent 
                    placeholder='تلفن'
                />
            </div>
            <div className='input-form-ersalpaam-class'>
                <InputComponent 
                    placeholder='پست الکترونیکی'
                />
            </div>
            <div className='input-form-ersalpaam-class'>
                <InputComponent 
                    placeholder='موضوع'
                />
            </div>
            <div className='input-form-ersalpaam-class' id='text-area-ersalpayam'>
                <textarea />
            </div>
            <div id='div-submit-ersalpayam-id'>
                <input id='submit-ersalpayam-id' type='submit' value='ارسال دیدگاه'/>
            </div>
        </div>

    </form>
  )
}

export default ErsalPayam