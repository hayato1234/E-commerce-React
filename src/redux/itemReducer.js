import * as ActionTypes from "./ActionTypes.js";

export const ItemReducer = (state = { isLoading: true, errMsg: null, items: [] },action) => {
  switch (action.type) {
    // case ActionTypes.ITEM_LIST_LOADING:
    //   return { ...state, isLoading: true, errMsg: false, items: [] };
    // case ActionTypes.LOAD_ITEM_LIST:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errMsg: false,
    //     items: action.payload,
    //   };
    // case ActionTypes.ITEM_LIST_FAILED:
    //   return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};
