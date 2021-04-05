import * as actionTypes from '../../actions/actionTypes';

const initialState = { cart: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productItem = { ...action.productItem, quantity: 1 };
      return {
        ...state,
        cart: state.cart.concat(productItem),
      };
    case actionTypes.DELETE_FROM_CART:
      console.log(action.cartItem);
      return {
        ...state,
        cart: [
          ...state.cart.filter(item => action.cartItem.title !== item.title),
        ],
      };
    default:
      return state;
  }
};
export default reducer;
