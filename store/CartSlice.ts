import { CartItems } from "../types/types";
import { createSlice } from "@reduxjs/toolkit";


const items : CartItems = []



 export const  cartSlice = createSlice({
    initialState: {
        item :items
    },
    name: "cart",
    reducers:{
        addItemToCart : (state, action)=>{
const existingItem = state.item.find((item)=> item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color)
if (!existingItem) {
    state.item.push(action.payload)
    
}else{
    existingItem.qunatity ++
}

        },
        removeCartItem : (state, action)=>{
const existingItem = state.item.find((item)=>
    item.id === action.payload.id )

     if (existingItem?.qunatity === 1) {
                state.item = state.item.filter((item) =>
                    item.id !== action.payload.id || item.size !== action.payload.size || item.color!== action.payload.color
                  
                )
            } else if (existingItem) {
                existingItem.qunatity--
            }

        }
    }

    
})

 export const  {addItemToCart, removeCartItem}= cartSlice.actions
export default cartSlice.reducer