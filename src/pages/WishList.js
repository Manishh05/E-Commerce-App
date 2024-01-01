import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";

const WishList = () => {
  return (
    <>
    <Helmet>
            <meta charSet={"WishList"} />
            <title>WishList</title>
       </Helmet>
    <BreadCrumb title="WishList" />
    <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
              <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img 
                     src='Images/cross.svg'
                     alt='cross'
                     className='position-absolute cross img-fluid'/>
                <div className='wishlist-card-image'>
                <img src='Images/tab.jpg' 
                     className='img-fluid w-100'
                    alt='gallery'/>
                </div>
                <div className='py-3'>
                     <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7INCH WITH WI-FI +5G TABLET</h5>
                    <h6 className='prize mb-3 mt-3'>$999</h6>
                </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img 
                     src='Images/cross.svg'
                     alt='cross'
                     className='position-absolute cross img-fluid'/>
                <div className='wishlist-card-image'>
                <img src='Images/tab1.jpg' 
                     className='img-fluid w-100'
                    alt='gallery'/>
                </div>
                <div className='py-3'>
                     <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7INCH WITH WI-FI +5G TABLET</h5>
                    <h6 className='prize mb-3 mt-3'>$999</h6>
                </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img 
                     src='Images/cross.svg'
                     alt='cross'
                     className='position-absolute cross img-fluid'/>
                <div className='wishlist-card-image'>
                <img src='Images/tab2.jpg' 
                     className='img-fluid w-100'
                    alt='gallery'/>
                </div>
                <div className='py-3'>
                     <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7INCH WITH WI-FI +5G TABLET</h5>
                    <h6 className='prize mb-3 mt-3'>$999</h6>
                </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WishList