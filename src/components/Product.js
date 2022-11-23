import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const Product = (curElem) => {
    const {id, image, name, price, category} =curElem;
  return (
    <>
        <NavLink to={`/singalproduct/${id}`}>
           
        <div className='card' style={{width:'18rem'}}>
         <figure>
          <img src={image} className="card-img-top" alt={name}/>
          <figcaption className='caption'>{category}</figcaption>
         </figure>

         <div className='card-body'>
          <div className='card-data-flex'>
            <p className='card-text'>{<FormatPrice price={price}/>}</p>
          </div>
         </div>
        </div>
        </NavLink>
    </>
  )
}

export default Product