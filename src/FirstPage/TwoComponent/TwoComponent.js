import React from 'react'
import './twoComponent.css'
import CadrInfo from '../../Components/CadrInfo/CadrInfo'

const TwoComponent = () => {
  return (
    <div id='two-component-id'>
        <CadrInfo className='cadr-info-class' src={require('../../assest/raveshnegahdari.png')} alt='raveshnegahdari'/>
        <CadrInfo className='cadr-info-class' src={require('../../assest/asal.png')} alt='asal'/>
    </div>
  )
}

export default TwoComponent