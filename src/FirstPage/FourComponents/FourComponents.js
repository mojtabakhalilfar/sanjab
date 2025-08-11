import './fourComponents.css'
import CadrInfo from '../../Components/CadrInfo/CadrInfo'

const FourComponents = () => {
  return (
    <div id='four-component-id'>
        <CadrInfo src={require('../../assest/gerdoSalem.png')} alt='gerdoSalem'/>
        <CadrInfo src={require('../../assest/asal.png')} alt='asal'/>
        <CadrInfo src={require('../../assest/gerdoShekaste.png')} alt='gerdoShekaste'/>
        <CadrInfo src={require('../../assest/ketagerdo.png')} alt='ketagerdo'/>
    </div>
  )
}

export default FourComponents