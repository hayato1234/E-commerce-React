// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ItemReducer } from "./itemReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const reducer = {
    itemReducer: ItemReducer
}

export const MyConfigureStore = () => {
    const store = configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk)
    });
    return store;
}