import './firstPage.css'
import HeaderFirstPage from './HeaderFirstPage/HeaderFirstPage'
import PorforooshHa from './porforooshha/PorforooshHa'
import FourComponents from './FourComponents/FourComponents'
import Tooyserkan from './Tooyserkan/Tooyserkan'
import SayerMahsoolat from './SayerMahsoolat/SayerMahsoolat'
import TwoComponent from './TwoComponent/TwoComponent'
import PishnahadVizhe from './PishnahadVizhe/PishnahadVizhe'
import MasrafGhazayi from './MasrafGhazayi/MasrafGhazayi'
import ErsalPayaminFirstPage from './ErsalPayaminFirstPage/ErsalPayaminFirstPage'
import Dokme from '../Components/Dokme/Dokme'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import SliderGalery from './SliderGalery/SliderGalery'
const FirstPage = () => {
  return (
    <Layout>
        <HeaderFirstPage/>
          <PorforooshHa/>
          <FourComponents/>
          <Tooyserkan />
          <SayerMahsoolat/>
          <TwoComponent />
          <PishnahadVizhe />
          <MasrafGhazayi />
          <ErsalPayaminFirstPage/>
          <div id='galery-aks-id'><Dokme>گالری عکس سنجاب</Dokme></div>
          {/* <Slider/> */}
          <SliderGalery/>
          <div id='omdeforoshi'><Link id='link-omdeforoshi'>برای سفارشات بیشتر و حجم بیشتر اینجا کلیک کنید</Link></div>
    </Layout>
  )
}

export default FirstPage