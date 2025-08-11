import './ProductInfo.css'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import sayer from '../../sayer'
import products3 from '../../products3'
import { useSelector , useDispatch } from 'react-redux'
import * as actionTypes from '../../store/actions'

const ProductInfo = () => {
  const dispatch = useDispatch()
  let {userId} = useParams()
  const products=[...sayer,...products3]

  var infolocal=products[userId-1]
  const tit =infolocal.title
  const countP = useSelector((state)=>state.shopingCart[tit])
  var name = products[userId-1].title
  name=name.toUpperCase()

  const subToSabad =()=>{
    if ((`SUB${name}`)==='SUBMAQZ1') {
      dispatch({type:actionTypes.SUBMAQZ1})
    }else if((`SUB${name}`)==='SUBMAQZ2'){
      dispatch({type:actionTypes.SUBMAQZ2})
    }else if((`SUB${name}`)==='SUBMAQZ3'){
      dispatch({type:actionTypes.SUBMAQZ3})
    }else if((`SUB${name}`)==='SUBMAQZ4'){
      dispatch({type:actionTypes.SUBMAQZ4})
    }else if((`SUB${name}`)==='SUBMAQZ5'){
      dispatch({type:actionTypes.SUBMAQZ5})
    }else if((`SUB${name}`)==='SUBMAQZ6'){
      dispatch({type:actionTypes.SUBMAQZ6})
    }else if((`SUB${name}`)==='SUBMAQZ7'){
      dispatch({type:actionTypes.SUBMAQZ7})
    }else if((`SUB${name}`)==='SUBMAQZ8'){
      dispatch({type:actionTypes.SUBMAQZ8})
    }

  }
  const addToSabad =()=>{
    if ((`ADD${name}`)==='ADDMAQZ1') {
      dispatch({type:actionTypes.ADDMAQZ1})
    }else if((`ADD${name}`)==='ADDMAQZ2'){
      dispatch({type:actionTypes.ADDMAQZ2})
    }else if((`ADD${name}`)==='ADDMAQZ3'){
      dispatch({type:actionTypes.ADDMAQZ3})
    }else if((`ADD${name}`)==='ADDMAQZ4'){
      dispatch({type:actionTypes.ADDMAQZ4})
    }else if((`ADD${name}`)==='ADDMAQZ5'){
      dispatch({type:actionTypes.ADDMAQZ5})
    }else if((`ADD${name}`)==='ADDMAQZ6'){
      dispatch({type:actionTypes.ADDMAQZ6})
    }else if((`ADD${name}`)==='ADDMAQZ7'){
      dispatch({type:actionTypes.ADDMAQZ7})
    }else if((`ADD${name}`)==='ADDMAQZ8'){
      dispatch({type:actionTypes.ADDMAQZ8})
    }
    
  }

    
  return (
    <Layout >
        <div className='classProductInfo'>
        <h2>{infolocal.name}</h2>
      <img id='img-product-info' src={infolocal.image} />
      <div id='div-product-info' >
      <p id='p-product-info' dir='rtl'>
      بیشترین کاربرد را برای قنادی‌ها و کیک‌پزان خونگی دارد.

دندونه همان تردترین و شکننده‌ترین بخش از یک مغز است که حین شکستن تکه می‌شود.

از نظر رنگ ترکیبی از رنگ مغز درجه یک و درجه دوست.

اندازه‌ی تکه‌های مغز دندونه‌ای معادل اندازه‌ی یک نخود است.

بهتر است مغز دندانه در ظروف دربسته داخل یخچال نگهداری شود.

 

ویژگی های مغز گردو دندانه

مغز دندانه یا اصطلاحا خرد و شکسته، بیشترین اقبال و تقاضا را در بین قنادان و شیرینی‌پزان خانگی دارد.

در اغلب کیک‌ها و شیرینی‌های گردویی از مغزهای تکه‌شده استفاده می‌شود.

اگر که از کارگاه‌های گردوشکن دیدن کنید خواهید دید که فرایند شکستن گردو با ابزار چکش و توسط نیروی انسانی صورت می‌گیرد.

این اتفاق همواره منجر به شکسته و خرد شدن بخشی از مغزگردوها می‌شود و این مغزهای خرد وشکسته با عنوان مغز دندانه عرضه می‌شوند. تجربه نشان داده گردوهایی که تردترند شکننده‌ترند.

به طور متوسط از هر 20 کیلو مغز استخراج شده یک کیلوی ‌آن دندونه می‌شود.

مغز دندانه‌ای گردوی سنجاب از نظر سطح رنگ‌بندی ترکیبی از مغز درجه یک و دو است.

نظرات
هنوز
      </p>
      </div>
      <div id='add-sub-sabad'>
        <button id='sub-sabad' onClick={subToSabad}>-</button>
        <div id='counte-sabad1'>{countP}</div>
        <button id='add-sabad' onClick={addToSabad}>+</button>
      </div>
      </div>
    </Layout>
  )
}


export default ProductInfo
