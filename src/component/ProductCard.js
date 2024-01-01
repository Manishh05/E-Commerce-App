import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const {grid} = props
  let location = useLocation();
  return (
  
   <>
     <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <div className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link >
                <img src='Images/wish.svg' alt='wish'/>
            </Link>
        </div>
        <div className='product-img'>
            <img src='Images/watch.jpg' 
                 alt='product'
                 className='img-fluid'/>
            <img src='Images/watch-1.jpg'
                 alt='product'
                 className='img-fluid'/>
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Kids Headphones Bulk 10 Pack Multi Colored Students</h5>
            <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    activeColor="#ffd700"
             />
               <p className={`description ${grid===12 ? "d-block": "d-none"}`}>
             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
             </p>
            <p className='product-prize'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
            <Link>
              <img src='Images/view.svg'  alt='view'/>
            </Link>
            <Link>
              <img src='Images/prodcompare.svg'  alt='view'/>
            </Link>
            <Link>
              <img src='Images/add-cart.svg'  alt='view'/>
            </Link>
        </div>
      </div>
      </div>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <div className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link >
                <img src='Images/wish.svg' alt='wish'/>
            </Link>
        </div>
        <div className='product-img'>
            <img src='Images/watch.jpg' 
                 alt='product'
                 className='img-fluid'/>
            <img src='Images/watch-1.jpg'
                 alt='product'
                 className='img-fluid'/>
        </div>
        <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Kids Headphones Bulk 10 Pack Multi Colored Students</h5>
            <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    activeColor="#ffd700"
             />
             <p className={`description ${grid===12 ? "d-block": "d-none"}`}>
             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
             </p>
            <p className='product-prize'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
            <Link>
              <img src='Images/view.svg'  alt='view'/>
            </Link>
            <Link>
              <img src='Images/prodcompare.svg'  alt='view'/>
            </Link>
            <Link>
              <img src='Images/add-cart.svg'  alt='view'/>
            </Link>
        </div>
      </div>
      </div>
    </div>
   </>
  

  )
}

export default ProductCard;
