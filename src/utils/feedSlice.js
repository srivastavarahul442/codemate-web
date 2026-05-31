import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:[],
    reducers:{
        addFeed:(state,action)=> action.payload,
        removeFeed:(state,action)=> [],
        removeUserFromFeed:(state,action)=>{
            const newFeed = state.filter((user)=>user._id!=action.payload);
            return newFeed
        }
    }
})

export const {addFeed,removeFeed,removeUserFromFeed} = feedSlice.actions

export default feedSlice.reducer;