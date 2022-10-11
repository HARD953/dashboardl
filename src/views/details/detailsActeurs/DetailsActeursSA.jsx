import React, { useEffect, useState } from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilPeople} from '@coreui/icons'


import './DetailsActeurs.css'

import { useLocation } from 'react-router-dom';
import { ProductService } from '../../dons/service/ProductService';

import CardUsersSA from '../../../components/details/cardUsers/CardUsersSA'
import CardInfoUserActiviteSA from '../../../components/details/cardInfoUserActivite/CardInfoUserActiviteSA'

const productService = new ProductService();

const DetailsActeursSA = (props) => {

  const location = useLocation()

  const [valu,setValu]=useState([])

  useEffect(() => {

    productService.getSADetails(location.state.emailActeur).then(data => setValu(data));

   
  }, []); 

  


  return ( 

    <CContainer>
        <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilPeople} height={30} customClassName="" className="me-3" />
            Acteurs
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Super-administrateurs/details
          </div>
        </div>
      </div>
     
      <CRow>
        <CCol xs={12}>
          <CardUsersSA infoAdmin = {valu}/>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12}>
          <CardInfoUserActiviteSA infoAdmin = {valu}/>
        </CCol>
      </CRow>
      
     
      
     

    </CContainer>
  )
}

export default DetailsActeursSA
