import './slider.css'
import products from '../../products'
import {FiChevronRight , FiChevronLeft} from "react-icons/fi"
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from '../../store/actions'

const Slider = () => {
    const indexSlider1 = useSelector((state) => state.indexSlider.indexSlider1);
    const indexSlider2 = useSelector((state) => state.indexSlider.indexSlider2);
    const indexSlider3 = useSelector((state) => state.indexSlider.indexSlider3);
    const dispatch = useDispatch();


    let mainSlider=
    <div id='main-slider-id'>
      <img className='imgSlider' src={products[indexSlider1].image} key={products[indexSlider1]._id} alt={`slide${indexSlider1}`} />
      <img className='imgSlider' src={products[indexSlider2].image} key={products[indexSlider2]._id} alt={`slide${indexSlider2}`} />
      <img className='imgSlider' src={products[indexSlider3].image} key={products[indexSlider3]._id} alt={`slide${indexSlider3}`} />
    </div>
  return (
    <div id='slider-dokme'>
        <div className='dokme-slider'>
            <button onClick={() => dispatch({ type: actionTypes.DECREMENTINDEX})}><FiChevronLeft className='dokme-slider-icon'/></button>
        </div>
        <div id='imag-in-slider'>{mainSlider}</div>
        <div className='dokme-slider'>
            <button onClick={() => dispatch({ type: actionTypes.INCREMENTINDEX})}><FiChevronRight className='dokme-slider-icon'/></button>
        </div>
    </div>
  )
}

export default Slider