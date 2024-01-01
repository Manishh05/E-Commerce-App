import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <>

       <div className='blog-card'>
           <div className='card-images'>
              <img src='Images/blog-1.jpg' alt='blog' className='img-fluid w-100'/>
           </div>
         </div>
         <div className='blog-content'>
            <p className='date'>15 Dec 2023</p>
            <h5 className='title'>A Beautiful Morning Renissance</h5>
            <p className='desc'>
             You're Only As Good As Your Last Collection. Which Is An Enoromous Pressure. I Think There Is Something About...
             </p>
            <Link 
            className='button'>Read More</Link>
         </div>
      
 
    </>
    
 
  )
}

export default BlogCard;

