import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../cartItem/cartItem';
import { Row } from 'react-bootstrap';

const CartList = () => {
  const cartList = useSelector(state => state.cart);
  return (
    <Row>
      {cartList.map(productObject => (
        <CartItem
          title={productObject.title}
          description={productObject.description}
          img={productObject.img}
          quantity={productObject.quantity}
          key={Math.random().toString(36).substr(2, 9)}
        ></CartItem>
      ))}
      ;
    </Row>
  );
};

export default CartList;
