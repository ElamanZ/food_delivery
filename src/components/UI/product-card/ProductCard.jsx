import React from 'react'
import '../../../styles/product-card.css'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  // const {id, title, image01, price} = props.item
  
  return (
    <div className='product__item'>
      <div className="product__img">
        <img src={item?.image01} alt="product-img" className='w-50'/>
      </div>
      
      <div className="product__content">
        <h5>
          <Link to={`foods/${item?.id}`}>
            {item?.title}
          </Link>
        </h5>
        <div className='d-flex align-items-center justify-content-between'>
          <span className='product__price'>
            ${item?.price}
          </span>
          <button className='addTOcart__btn'>Add to cart</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard