import * as ActionTypes from "./ActionTypes.js";

export const CartReducer = (state = { errMsg: null, total: 0, cart: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
        // console.log(action.payload);
        const item = action.payload;
        return { ...state, errMsg:null, total: (state.total+ item.price), cart: state.cart.concat(action.payload) };
    case ActionTypes.DELETE_CART:
        const itemDelete = action.payload;
        return {...state, errMsg:null, total: (state.total - itemDelete.price), cart: state.cart.filter((item)=> item!==itemDelete)}
    case ActionTypes.DELETE_ALL_CART:
        return {...state, total: 0, cart: []}
    default:
      return state;
  }
};
