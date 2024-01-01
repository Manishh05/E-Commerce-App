import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";
import Color from '../component/Color';

const CompareProduct = () => {
  return (
   <>
    <Helmet>
            <meta charSet={"Compare Products"} />
            <title>Compare Products</title>
       </Helmet>
    <BreadCrumb title="Compare Products" />
    <div className='compare-product-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
            <div  className='col-3'>
                <div className='compare-product-card position-relative'>
                   <img 
                     src='Images/cross.svg'
                     alt='cross'
                     className='position-absolute cross img-fluid'/>
                
                <div className='prouduct-card-image'>
                    <img src='Images/watch.jpg' alt='watch'/>
                </div>
                <div className='compare-product-details'>
                    <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7INCH WITH WI-FI +5G TABLET</h5>
                    <h6 className='prize mb-3 mt-3'>$299</h6>
                </div>
                <div className='product-details'>
                    <h5>Brand:</h5>
                    <p>Honor</p>
                </div>
                <div className='product-details'>
                    <h5>Type:</h5>
                    <p>LED TV</p>
                </div>
                <div className='product-details'>
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                </div>
                <div className='product-details'>
                    <h5>Color:</h5>
                    <Color />
                </div>
                <div className='product-details'>
                    <h5>Size:</h5>
                <div className='d-flex gap-10'></div>
                    <p>L</p>
                    <p>M</p>
                </div>
                </div>
                
            </div>
            <div  className='col-3'>
                <div className='compare-product-card position-relative'>
                   <img 
                     src='Images/cross.svg'
                     alt='cross'
                     className='position-absolute cross img-fluid'/>
                
                <div className='prouduct-card-image'>
                    <img src='Images/watch.jpg' alt='watch'/>
                </div>
                <div className='compare-product-details'>
                    <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7INCH WITH WI-FI +5G TABLET</h5>
                    <h6 className='prize mb-3 mt-3'>$299</h6>
                </div>
                <div className='product-details'>
                    <h5>Brand:</h5>
                    <p>Honor</p>
                </div>
                <div className='product-details'>
                    <h5>Type:</h5>
                    <p>LED TV</p>
                </div>
                <div className='product-details'>
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                </div>
                <div className='product-details'>
                    <h5>Color:</h5>
                    <Color />
                </div>
                <div className='product-details'>
                    <h5>Size:</h5>
                <div className='d-flex gap-10'></div>
                    <p>L</p>
                    <p>M</p>
                </div>
                </div>
                
            </div>
            <div  className='col-3'>
                <div className='compare-product-card position-relative'>
                   <img 
                     src='Images/cross.svg'
                     alt='cross'
                     className='position-absolute cross img-fluid'/>
                
                <div className='prouduct-card-image'>
                    <img src='Images/watch.jpg' alt='watch'/>
                </div>
                <div className='compare-product-details'>
                    <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7INCH WITH WI-FI +5G TABLET</h5>
                    <h6 className='prize mb-3 mt-3'>$299</h6>
                </div>
                <div className='product-details'>
                    <h5>Brand:</h5>
                    <p>Honor</p>
                </div>
                <div className='product-details'>
                    <h5>Type:</h5>
                    <p>LED TV</p>
                </div>
                <div className='product-details'>
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                </div>
                <div className='product-details'>
                    <h5>Color:</h5>
                    <Color />
                </div>
                <div className='product-details'>
                    <h5>Size:</h5>
                <div className='d-flex gap-10'></div>
                    <p>L</p>
                    <p>M</p>
                </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default CompareProduct