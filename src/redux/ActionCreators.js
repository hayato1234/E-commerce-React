import * as ActionTypes from "./ActionTypes";
import { ITEMS } from "../shared/items";

export const fetchItemList = () => dispatch => {
    dispatch(itemListLoading); 
    setTimeout(()=>{
        dispatch(loadItems(ITEMS));
    }, 1000);
}

function itemListLoading(){
    return { type: ActionTypes.ITEM_LIST_LOADING };
}

function loadItems(items){
    return { type: ActionTypes.LOAD_ITEM_LIST, payload: items};
}