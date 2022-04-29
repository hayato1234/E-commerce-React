// import { createStore } from "redux";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { ItemReducer } from "./itemReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// const reducer = {
//     items: ItemReducer
// }

export const MyConfigureStore = () => {
    const store = configureStore({
        reducer: ItemReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk)
    });
    return store;
}