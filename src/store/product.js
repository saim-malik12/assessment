
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    name:'',
    email:'',
    password:'',
    address:'',
    isLoding:false,
    error:null,
    success:false
}

const product=createSlice({
    name:'products',
    initialState,
    reducers:{
         setinputs:(state,action)=>{
            const {name,value}=action.payload;
            state[name]=value
         },
         setisLoading:(state,action)=>{
            state.isLoding=action.payload
         },
         seterror:(state,action)=>{
            state.isLoding=action.payload
         },
         setsuccess:(state,action)=>{
            state.isLoding=action.payload
         },
         
         
    }
})

export const {setinputs,seterror,setisLoading,setsuccess}=product.actions


export default product.reducer