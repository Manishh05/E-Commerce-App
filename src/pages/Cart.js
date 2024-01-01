import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
     <Helmet>
            <meta charSet={"Cart"} />
            <title>Add to Cart</title>
       </Helmet>
    <BreadCrumb title="Cart" />
    <div className='cart-wrapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='card-header d-flex justify-content-between align-items-center'>
                <h4 className='cart-col-1'>Product </h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quanity</h4>
                <h4 className='cart-col-4'>Total</h4>
            </div>
            <div className='card-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 d-flex gap-15 align-items-center'>
                    <div className='w-25'>
                      <img src='Images/headphone.jpg' 
                           className='img-fluid'
                           alt=''/>
                    </div>
                    <div className='w-75'>
                        <h5 className='title'>Sony</h5>
                        <p className='color'>Size : M , L </p>
                        <p className='prize'>Color : 2+more</p>
                    </div>
                </div>
                <div className='cart-col-2'>
                    <h5 className='prize'>$100.00</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                    <div>
                      <input
                        className='form-control '
                        type='number'
                        min={1}
                        max={10}
                        name=""
                        id=""/>
                    </div>
                    <div className='text-danger'>
                      <MdDeleteSweep />
                    </div>
                </div>
                <div className='cart-col-4'>
                <h5 className='prize'>$100.00</h5>
                </div>
            </div>
            <div className='card-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 d-flex gap-15 align-items-center'>
                    <div className='w-25'>
                      <img src='Images/watch.jpg' 
                           className='img-fluid'
                           alt=''/>
                    </div>
                    <div className='w-75'>
                        <h5 className='title'>Titan</h5>
                        <p className='color'>Size : M , L , XXl</p>
                        <p className='prize'>Color : 3+more</p>
                    </div>
                </div>
                <div className='cart-col-2'>
                    <h5 className='prize'>$100.00</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                    <div>
                      <input
                        className='form-control '
                        type='number'
                        min={1}
                        max={10}
                        name=""
                        id=""/>
                    </div>
                    <div className='text-danger'>
                      <MdDeleteSweep />
                    </div>
                </div>
                <div className='cart-col-4'>
                <h5 className='prize'>$100.00</h5>
                </div>
            </div>
            <div className='col-12 py-2'>
               <div className='d-flex justify-content-between align-items-baseline'>
               <Link to="/Store" className='button'>Continue to Shopping</Link>
               <div className='d-flex flex-column align-items-center'>
                  <h4>SubTotal: $1000</h4>
                  <p>Taxes and Shipping Calculated at CheckOut</p>
                <Link className='button'>CheckOut</Link>
               </div>
               </div>
            </div>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Cart