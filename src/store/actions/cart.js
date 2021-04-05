import * as actionTypes from './actionTypes';

export const addToCart = productItem => {
  return {
    type: actionTypes.ADD_TO_CART,
    productItem,
  };
};

export const deleteFromCart = cartItem => {
  return {
    type: actionTypes.DELETE_FROM_CART,
    cartItem,
  };
};
