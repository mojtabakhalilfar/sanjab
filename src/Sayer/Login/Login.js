import React from 'react'
import './login.css'
import { useSelector , useDispatch } from 'react-redux'
import * as actionTypes from '../../store/actions'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    let navigate = useNavigate()
    const schema=yup.object().shape({
        id:yup.string().required('ایمیل یا شماره تلفن وارد کنید'),
        password:yup.string().min(7).required('پسورد قوی وارد کنید')
    })
    const {register,handleSubmit ,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    const dispatch =useDispatch()
    const vorod =useSelector((state)=>state.vorod)
    const sabtnam =useSelector((state)=>state.sabtname)
    let form =null
    const dataLog=(data)=>{
        console.log(data)
        // if(errors)
        // navigate('/')
        // dispatch({type:actionTypes.CLOSEMODAL})
    }
    const dataSighn=(data)=>{
        console.log(data)
        // navigate('/')
        // dispatch({type:actionTypes.CLOSEMODAL})
    }

    if(vorod){
        form = <form onSubmit={handleSubmit(dataLog)} className='form-log form-vorod'>
                <input {...register('id')} className='input-form-log-input input-form' type='text' placeholder='ایمیل یا شماره تلفن'/>
                {errors.id && (<p>{errors.id?.message}</p>)}
                <input {...register('password')} className='input-form-log-input input-form' type='password' placeholder='رمز عبور'/>
                {errors.password && (<p>{errors.password?.message}</p>)}
                <input onClick={dataLog} className='input-sub-log input-form' type='submit' value={'ورود'}/>
            </form>
    }else if (sabtnam) {   
        form =<form onSubmit={handleSubmit(dataSighn)} className='form-log form-sabtnam'>
                <input {...register('id')} className='input-form-log-input input-form' type='text' placeholder='شماره تلفن' />
                {errors.id && (<p>{errors.id?.message}</p>)}
                <input onClick={dataSighn} className='input-sub-log input-form' type='submit' value='ثبت نام' />
            </form>   
    }

  return (
    <div className={props.className} id='page-log-id'>
        <div id='button-page-log-id'>
            <button
             className={(vorod?'button-class-clicked':'button-class-no-clicked')} 
             onClick={()=>dispatch({type:actionTypes.VOROD})}>ورود</button>
            <button 
            className={(sabtnam?'button-class-clicked':'button-class-no-clicked')} 
            onClick={()=>dispatch({type:actionTypes.SABTNAME})}>ثبت نام</button>
        </div>
        <div id='main-page-log-id'>
            {form}
        </div>          
    </div>
  )
}

export default Login