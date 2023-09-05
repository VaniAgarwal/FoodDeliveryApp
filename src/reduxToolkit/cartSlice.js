import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{

            //modifying the original state  
            state.items.push(action.payload);
        },
        removeItem:(state) =>{
            state.items.pop();
        },
        clearCart:(state) =>{
            state.items.length = 0; //original state=[]
        }
    }

});

export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

