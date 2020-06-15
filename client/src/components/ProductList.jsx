import React from 'react';
import Products from './Products';
  
const ProductList = (props) => {
   return(
    <div className='product-list'>
      <img src= {props.product.image} onClick={()=> props.clickItem(props.product)}></img>
      <h3 onClick={()=> props.clickItem(props.product)}>{props.product.item}</h3> <br />
      Original Post Price: ${props.product.min_cost} <br />
      Current Bid: ${props.product.curr_bid} <br />
      Bid Ends in {props.product.ends_in} Day(s) <br />

      {/* {props.products.map((product, index) => (<Products product={product} key={index}/>))} */}

    </div>
  )
}

export default ProductList;