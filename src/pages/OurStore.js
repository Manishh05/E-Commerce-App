import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../component/ProductCard"


const OurStore = () => {
  const [grid,SetGrid] = useState(4)

  return (
    <>
       <Helmet>
            <meta charSet={"Our Store"} />
            <title>Our Store</title>
       </Helmet>
    <BreadCrumb title="Our Store" />
    <div className='store-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Shop By Categories</h3>
                        <div>
                          <ul className='ps-0'>
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                          </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Filter By</h3>
                    <div>
                          <h5 className='sub-title'>Availability</h5>
                    <div>
                    <div className="form-check">
                         <input className="form-check-input"
                                 type="checkbox" 
                                 value="" 
                                 id="defaultCheck1"/>
                         <label className="form-check-label"
                                 htmlFor="">
                    In Stock (1)
                        </label>
                     </div>
                   <div className="form-check">
                   <input className="form-check-input" 
                          type="checkbox" 
                          value="" 
                          id="defaultCheck2" 
                          disabled/>
                  <label class="form-check-label" 
                        htmlFor="">
                   Out Of Stock (0)
                 </label>
                  </div>
                    </div>
                       <h5 className='sub-title'>Price $</h5>
                       <div className='d-flex align-items-center gap-10'>
                          <form className="form-floating">
                       <input type="email"
                              className="form-control py-1" 
                              id="floatingInputValue" 
                              placeholder="name@example.com" 
                              value="From"/>
                      <label htmlFor="floatingInputValue"></label>
                          </form>
                          <form className="form-floating">
                       <input type="email" 
                              className="form-control py-1" 
                              id="floatingInputValue" 
                              placeholder="name@example.com" 
                              value="To"/>
                       <label htmlFor="floatingInputValue"></label>
                          </form>
                       </div>
                       <h5 className='sub-title'>Colors</h5>
                       <div className='d-flex flex-wrap'>
                          <ul className='colors ps-0'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                          
                          </ul>
                       </div>
                       <h5 className='sub-title'>Size</h5>
                       <div>
                       <div className="form-check">
                         <input className="form-check-input"
                                 type="checkbox" 
                                 value="" 
                                 id="defaultCheck1"/>
                         <label className="form-check-label"
                                 htmlFor="">
                        M(2)
                        </label>
                     </div>
                   <div className="form-check">
                   <input className="form-check-input" 
                          type="checkbox" 
                          value="" 
                          id="defaultCheck2" 
                          disabled/>
                  <label class="form-check-label" 
                        htmlFor="">
                   S (1)
                 </label>
                  </div>
                  <div className="form-check">
                         <input className="form-check-input"
                                 type="checkbox" 
                                 value="" 
                                 id="defaultCheck1"/>
                         <label className="form-check-label"
                                 htmlFor="">
                        XL(4)
                        </label>
                     </div>
                   <div className="form-check">
                   <input className="form-check-input" 
                          type="checkbox" 
                          value="" 
                          id="defaultCheck2" 
                          disabled/>
                  <label class="form-check-label" 
                        htmlFor="">
                   XXl(8)
                 </label>
                  </div>
                       </div>
                    </div>
                  </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Product Tags</h3>
                        <div className='product-tag d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>HeadPhone</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Watch</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Tab</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Others</span>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Random Products</h3>
                        <div className='random-products mb-3 d-flex'>
                          <div className='w-50'>
                            <img src='Images/headphone.jpg' 
                                 className='img-fluid'
                                 alt='watch'/>
                          </div>
                          <div className='w-50'>
                            <h5>Men's HeadPhone Bulk 12 Multi Colored for Students</h5>
                            <ReactStars
                               count={5}
                               size={24}
                               value="3"
                               activeColor="#ffd700"
                            />
                            <b>$ 399</b>
                          </div>
                        </div>
                        <div className='py-3'>
                        <div className='random-products d-flex'>
                          <div className='w-50'>
                            <img src='Images/watch.jpg' 
                                 className='img-fluid'
                                 alt='watch'/>
                          </div>
                          <div className='w-50'>
                            <h5>Men's HeadPhone Bulk 12 Multi Colored for Students</h5>
                            <ReactStars
                               count={5}
                               size={24}
                               value="3"
                               activeColor="#ffd700"
                            />
                            <b>$ 899</b>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                  <div className='filter-sort-grid mb-4'>
                      <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block'>Sort By</p>
                 <select 
                      name=''
                      className='form-control form-select'
                      id=''>
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending">Alphabeticaly, A-Z</option>
                      <option value="title-descending">Alphabeticaly, Z-A</option>
                      <option value="price-ascending">Price , Low to High</option>
                      <option value="price-descending">Price ,High to Low</option>
                      <option value="created-ascending">Date, Old to New</option>
                      <option value="created-descending">Date, New to Old</option>
                 </select>
                   </div>
                   <div>
                      <div className='d-flex align-items-center gap-10'>
                          <p className='total-products py-3 mb-0' style={{"width":"100px"}}>22 Products</p>
                        <div className='d-flex align-items-center gap-10 grid'>
                               <img onClick={()=>{
                                    SetGrid(4)
                               }}
                                    src='Images/gr4.svg' 
                                    className='d-block img-fluid' 
                                    alt='grid'
                                />    
                               <img onClick={()=>{
                                    SetGrid(3)
                               }}
                                    src='Images/gr3.svg'
                                    className='d-block img-fluid' 
                                    alt='grid'
                               />
                               <img onClick={()=>{
                                    SetGrid(6)
                               }}
                                    src='Images/gr2.svg' 
                                    className='d-block img-fluid'
                                    alt='grid'
                                />
                               <img onClick={()=>{
                                    SetGrid(12)
                               }}
                                    src='Images/gr.svg'
                                    className='d-block img-fluid' 
                                    alt='grid'
                              />
                        </div>
                      </div>
                   </div>
                      </div>
                  </div>
                  <div className='product-list pb-5 flex-wrap'>
                      <div className='d-flex gap-10'>
                      <ProductCard grid={grid}/>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurStore