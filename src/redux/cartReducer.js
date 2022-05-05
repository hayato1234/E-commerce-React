import * as ActionTypes from "./ActionTypes.js";

export const CartReducer = (state = { errMsg: null, cart: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
        console.log(action.payload);
      return { ...state, cart: state.cart.concat(action.payload) };
    default:
      return state;
  }
};
