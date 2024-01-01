import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee"
import BlogCard from './BlogCard';
import ProductCard from './ProductCard';
import SpecialProduct from './SpecialProduct';



const Home = () => {
  return (
    <>
  <section className="home-wrapper-1 py-5">
    
     <div className='container-xxl'>
     <div className="row">
       <div className="col-6">
        <div className="main-banner position-relative">
 
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-inner">
            <div class="carousel-item active ml-5">
              <img src="./images/main-banner.jpg" className="d-block w-100" alt="banner"/>
         </div>
        <div className="carousel-item ">
          <img src="./images/main-banner-1.jpg" className="d-block w-100" alt="banner1"/>
        </div>
 </div>
      <button className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleAutoplaying" 
        data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
     </button>
    <button className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleAutoplaying" 
        data-bs-slide="next">
 <span className="carousel-control-next-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Next</span>
</button>
</div>
         <div className="main-banner-content position-absolute">
           <h4>SUPERCHARGED FOR PROS.</h4>
           <h5>iPad S13+ Pro.</h5>
           <p>From $9.999 or $41.62/mo</p>
           <Link to="/product/:id" className='button main-button'>Buy Now</Link>
         </div>
        </div>
       </div>

       <div className="col-6">
         <div className='d-flex gap-10 flex-wrap justify-content-between'>
           <div className="small-banner position-relative">
         <img src='./images/catbanner-01.jpg'
         className='img-fluid rounded' alt="main-banner" />
         <div className="small-banner-content position-absolute">
           <h4>SUPERCHARGED FOR PROS.</h4>
           <h5>Mac Book Pro.</h5>
           <p>From $1559.999 <br />or $78.62/mo</p>
          
         </div>
        </div>
        <div className="small-banner position-relative">
         <img src='./images/catbanner-02.jpg'
         className='img-fluid rounded' alt="main-banner" />
         <div className="small-banner-content position-absolute">
           <h4>SUPERCHARGED FOR PROS.</h4>
           <h5>Smartwatch 7.</h5>
           <p>From $29.99 <br />or $4.62/mo</p>
          
         </div>
        </div>
        <div className="small-banner position-relative">
         <img src='./images/catbanner-03.jpg'
         className='img-fluid rounded' alt="main-banner" />
         <div className="small-banner-content position-absolute">
           <h4>Best Sale.</h4>
           <h5>iPad S13+ Pro.</h5>
           <p>From $9.999 <br />or $41.62/mo</p>
          
         </div>
        </div>
        <div className="small-banner position-relative">
         <img src='./images/catbanner-04.jpg'
         className='img-fluid airpod' alt="main-banner" />
         <div className="small-banner-content position-absolute">
           <h4>New Arrival.</h4>
           <h5>Buy AirPod</h5>
           <p>From $1459.999 <br />or $41.62/mo</p>
          
         </div>
        </div>
       </div>

       </div>

      </div>
     </div>

    </section>
     <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex justify-content-between align-items-center'>
                 <div className='d-flex align-items-center gap-15'>
                  <img src='Images/service.png' alt='service'/>
                  <div >
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>For All Orders Over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='Images/service-02.png' alt='service'/>
                  <div >
                    <h6>Daily Surprise Prizes</h6>
                    <p className='mb-0'>Save Upto 25% Off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'> 
                <img src='Images/service-03.png' alt='service'/>
                  <div >
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop With an Expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                <img src='Images/service-04.png' alt='service'/>
                  <div >
                    <h6>Affordable Prizes</h6>
                    <p className='mb-0'>Get Factory Prizes</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15' >
                <img src='Images/service-05.png' alt='service'/>
                  <div >
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-30 p-15 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap-30 p-15 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/headphone.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap-30  p-15 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/tv.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap-30 p-15 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap-30 p-15 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap-30 p-15 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/headphone.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap-30 p-15 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/tv.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap-30 p-15 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='Images/camera.jpg' alt='camera'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrappper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Featured Products</h3>
           </div>
              <ProductCard />
               <ProductCard />
              <ProductCard />
              <ProductCard />
           </div>  
        </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='Images/gallery-1.png' 
                     alt='feature'
                     className='img-fluid'
                     />
                <div className='famous-content position-absolute'>
                    <h5>Real Experience</h5>
                    <h6>Smart Game Series 7</h6>
                    <p>From $399 or $16.28/mo. for 24 Month</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card  position-relative'>
                <img src='Images/catbanner-01.jpg' 
                     alt='feature'
                     className='img-fluid'
                     />
                <div className='famous-content position-absolute'>
                    <h5 className='text-dark'>Studio Display</h5>
                    <h6 className='text-dark'>600 nits of Brightness</h6>
                    <p className='text-dark'>27 Inch 5k Retina <br/> Display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='Images/catbanner-03.jpg' 
                     alt='feature'
                     className='img-fluid'
                     />
                <div className='famous-content position-absolute'>
                    <h5 className='text-dark' >iMac Tab </h5>
                    <h6 className='text-dark'>Heavy Slim</h6>
                    <p className='text-dark'>From $399 or $16.28<br></br>/mo. for 24 Month*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='Images/catbanner-04.jpg' 
                     alt='feature'
                     className='img-fluid'
                     />
                <div className='famous-content position-absolute'>
                    <h5 className='text-dark'>Boat Speakers</h5>
                    <h6 className='text-dark'>Dolby Atmos <br/> Experience</h6>
                    <p className='text-dark'>From $399 or $12.18 <br/>/mo. for 14 Month*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
          <div className='col-12'>
          <h3 className='section-heading'>Special Products</h3>
          </div>
         </div>
         <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
         </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrappper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
           </div> 
           <div className='row'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div> 
        </div>
      </section>
     <section className='marquee-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                    <div className='mx-4 w-25'>
                      <img src='Images/brand-01.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-06.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-02.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-03.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-04.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-05.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-06.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-07.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='Images/brand-08.png' alt='brand'/>
                    </div>
                   
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className='blog-wrapper py-5 home-wrappper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
           <div className='row'>
              <div className='col-3'>
              <BlogCard />
              </div>
              <div className='col-3'>
              <BlogCard />
              </div>
              <div className='col-3'>
              <BlogCard />
              </div>
              <div className='col-3'>
              <BlogCard />
              </div>
           </div>
          
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;