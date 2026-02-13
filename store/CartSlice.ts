import { CartItem } from "../types/types";
import { createSlice } from "@reduxjs/toolkit";

const InitialCart : CartItem= {
    item  : []
}


 export const  cartSlice = createSlice({
    initialState: InitialCart,
    name: "cart",
    reducers:{
        addItemToCart : (state, action)=>{
const existingItem = state.item.find((item)=> item.id === action.payload.id)
if (!existingItem) {
    state.item.push(action.payload)
    
}else{
    existingItem.qunatity ++
}

        }
    }

    
})

 export const  {addItemToCart}= cartSlice.actions
export default cartSlice.reducer