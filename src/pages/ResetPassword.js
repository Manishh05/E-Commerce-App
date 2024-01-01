import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";

const ResetPassword = () => {
  return (
    <>
    <Helmet>
            <meta charSet={"Reset Password"} />
            <title>Reset Password</title>
    </Helmet>
    <BreadCrumb title="Reset Password" />
    <div className='login-wrapper home-wrapper-2 py-5'>
     <div className='container-xxl'>
     <div className='row'>
        <div className='col-12'>
          <div className='auth-card'>
            <h3 className='text-center mb-3'>Reset Password</h3>
              <form action='' className='gap-30 d-flex flex-column'>
              <div>
                  <input className='form-control mb-3' 
                         type='password' 
                         name=' password' 
                         placeholder='  Password'
                  />
                </div>
                <div>
                  <input className='form-control mb-3' 
                         type='password' 
                         name='Confirm password' 
                         placeholder='Confirm Password'
                  />
                </div>
                <div >
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>OK</button>
                s </div>
                </div>
              </form>
          </div>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default ResetPassword