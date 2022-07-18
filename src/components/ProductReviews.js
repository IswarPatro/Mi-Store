import React from 'react'
import ProductReviewCard from "../components/ProductReviewCard.js"
import "../styles/ProductReviews.css"
const ProductReviews = ({productReviews}) => {
  return (
    <div className="ProductReviews">
        {productReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} index={index} image={item.image} review={item.review} key={item.image} />

        ))}

    </div>
  )
}

export default ProductReviews