import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch} from 'react-icons/bs';


const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
                <p className='text-end text-white mb-0'>
                  Hotline : <a href='tel: +91 978654124' className='text-white'>+ 91  8056357461</a>
                </p>
            
            </div>
          </div>

        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
           <div className='row align-items-centre'>
              <div className='col-2'>
                <h2>
                <Link className='text-white'>Shopify</Link>
                </h2>
              </div>
    <div className='col-5'>
       <div className="input-group ">
  <input type="text" 
  className="form-control py-3" 
  placeholder="Search Product Here..." 
  aria-label="Search Product Here..." 
  aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2">
      <BsSearch className='fs-4'/>
  </span>
</div>

       </div>
          <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                    <Link to="/compare-product" 
                          className='d-flex align-items-center gap-10 text-white'>
                      <img src='Images/compare.svg' alt='compare'/>
                      <p className='m-0'>Compare <br/> Products</p>
                    </Link>
                </div>
                <div>
                   <Link to="/wishlist" 
                   className='d-flex align-items-center gap-10 text-white'>
                      <img src='Images/wishlist.svg' alt='wishlist'/>
                      <p className='m-0'> Favourite<br/> WishList </p>
                   </Link>
                </div>
                <div>
                  <Link to="/user"
                  className='d-flex align-items-center gap-10 text-white'>
                      <img src='Images/user.svg' alt='user'/>
                      <p className='m-0'> Login<br/> My Account </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart"
                  className='d-flex align-items-center gap-10 text-white'>
                      <img src='Images/cart.svg' alt='cart'/>
                     <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='m-0'>$ 5000</p>

                     </div>
                  </Link>
                </div>
              </div>
           </div>
          </div>
       </div>
      </header>
      <header className="header-bottom py-3">
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
           <div>
           <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
    type="button" 
    id="dropdownMenuButton" 
    data-bs-toggle="dropdown" 
    aria-expanded="false">
    <img src="images/menu.svg" alt="" />    
    <span className='me-5 d-inline-block'>Shop Categories</span> 
  </button>
  <ul className="dropdown-menu"
     aria-labelledby="dropdownMenuButton">
    <li><NavLink className="dropdown-item text-white" to="/tv-home">Tv&Home</NavLink></li>
    <li><NavLink className="dropdown-item text-white" to="/iphone">Iphones</NavLink></li>
    <li><NavLink className="dropdown-item text-white" to="/accessories">Accessories</NavLink></li>
  </ul>
</div>

           </div>
      <div className='menu-links'>
          <div className="d-flex align-items-center gap-15">
              <NavLink  to='/'>Home</NavLink>
              <NavLink to='/store'>Our Store</NavLink>
              <NavLink to='/blogs'>Blog</NavLink>
              <NavLink to='/Contact'>Contact</NavLink>
              <NavLink to='/about'>About</NavLink>
          </div>
          </div>
          </div>
          </div>
        </div>
       </div>
     </header>
    
    </>
  )
}
 export default Header;
