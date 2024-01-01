import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
     <Helmet>
            <meta charSet={"Forgot-Password"} />
            <title>Forgot-Password</title>
       </Helmet>
    <BreadCrumb title="Forgot-Password" />
    <div className='login-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>

      </div>
    </div>
    </>
  )
}

export default ForgotPassword