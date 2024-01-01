import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";
import { IoHome } from "react-icons/io5"; 
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInfo } from "react-icons/fa";

const Contact = () => {
  return (
   <>
    <Helmet>
            <meta charSet={"Contact"} />
            <title>Contact</title>
       </Helmet>
    <BreadCrumb title="Contact" />
    <div className='contact-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.1957732634!2d78.04042039790497!3d9.91782679643309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703409974327!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  className='border-0 w-100' 
                  allowfullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between  '>
              <div>
                <h3 className='contact-title mb-4'>Contact Us</h3>
                <form className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text ' 
                          className='form-control'
                          placeholder='Your Name'/>
                  </div>
                  <div>
                    <input type='text ' 
                          className='form-control'
                          placeholder='E-mail Address'/>
                  </div>
                  <div>
                    <input type='tel ' 
                           className='form-control'
                           placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea
                       name=''
                       id=''
                       className='w-100 form-control'
                       placeholder='Comments'
                       cols="30"
                       rows="4"
                  ></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
  
              </div>
              <div>
              <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <IoHome className='fs-5'/>
                    <address className='mb-0'>Hno:4/a , Tirunelvel District , Nanguneri Taluk , TamilNadu</address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <FaPhoneVolume className='fs-5' />
                    <a href=' (+91) 8056357461'>(+91) 8056357461</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <IoIosMail className='fs-5'/>
                    <a href='marcmaniix0@gmail.com'>marcmaniix05@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <FaInfo className='fs-5' />
                    <p className='mb-0'>Monday-Saturday 10AM - 9PM</p>
                  </li>
                
                   </ul>
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

export default Contact