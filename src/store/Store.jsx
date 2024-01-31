import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
//import authReducer from "./AuthSlice";
import ProductReducer from './product'

const Store=configureStore({
    reducer:{
        cart:cartReducer,
       // auth:authReducer,
        products:ProductReducer
    }
})

export default Store;