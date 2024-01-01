import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
     <Helmet>
            <meta charSet={"Login-Page"} />
            <title>Login Page</title>
    </Helmet>
    <BreadCrumb title="Login-Page" />
   
    <div className='login-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='auth-card'>
            <h3 className='text-center mb-3'>Login</h3>
              <form action='' className='gap-30 d-flex flex-column'>
                <div className='mt-3'>
                  <input className='form-control mb-3' 
                         type='email' 
                         name='email' 
                         placeholder='Enter Your Email'
                  />
                </div>
                <div>
                  <input className='form-control mb-3' 
                         type='password' 
                         name='password' 
                         placeholder='Password'
                  />
                </div>
                <div >
                  <Link to="/forgotpassword">Forgot Password ?</Link>
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>Log in</button>
                    <Link className='button signup border-0 text-white' to="/signup">Sign Up</Link>
                  </div>
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

export default Login