/**
*
* Product
*
*/

import React from 'react';
import Div from 'components/Div';
import A from 'components/A';
import Span from 'components/Span';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import Banner from './image1.jpg';
import SaleBadge from './sale-badge.png';
import messages from './messages';
import ImgClass from './product';
import Badge from './badge';
import Wrapper from './Wrapper';

function Product() {
  var name = {...messages.prodName}.defaultMessage,
      rating = {...messages.prodRating}.defaultMessage,
      review = {...messages.prodReview}.defaultMessage,
      price = {...messages.prodPrice}.defaultMessage;
  return (
    <Wrapper>
      	 <Badge src={SaleBadge} alt="Sale" />
        <a href="#">
       
            <img src={Banner} alt="Product Image" />
        
        </a>
        <div>
          <a href="#"><h2> {name}</h2> </a>
          <div>
           
            <span > {rating} </span>
            <span>  {review} </span>
           
          </div>
          <h3>{price} </h3>
        </div>
        
    </Wrapper>
  );
}

export default Product;
