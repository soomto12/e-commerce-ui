"use client"
import { Minus, ShoppingCart } from "lucide-react"
import { productTypes } from "../../types/types"
import { useState } from "react"
import { Plus } from "lucide-react"


import { useSearchParams, useRouter, usePathname } from "next/navigation"



export const ProductInteraction = ({product, selectedSize, selectedColor,onAddToCart, Quantity, HandleQuantityChange} : {
    product:productTypes
    selectedSize:string
    selectedColor: string
    onAddToCart: ()=> void
    Quantity: number
    HandleQuantityChange: (value: string)=> void
})=>{
    

const router = useRouter()
const pathName= usePathname()
const searchParams = useSearchParams()



function HandleTypeChange(type : "size"| "color", value: string ){
const params = new URLSearchParams(searchParams )
 params.set(type, value)
router.push(`${pathName}?${params.toString()}`, {scroll:false})
}







    return(
<div className="flex flex-col gap-4 mt-4">
    <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500"> size</span>
        <div className="flex items-center gap-2">
{product.sizes.map((size)=> (
    <div key={size} className={`cursor-pointer rounded-xs border-2 p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300"} ` }>

        <div className={`flex text-center justify-center  w-6 h-6 ${selectedSize === size ? `text-white bg-black `: "text-black bg-white"}`} onClick={()=> HandleTypeChange("size", size)}> {size}</div>
    </div>
))}

        </div>
    </div>
{/* color*/}
    <div className="flex flex-col gap-2"> 
<span className="text-gray-700"> colors </span>
<div className="flex items-center gap-2">
    {product.colors.map((color)=>(
        <div key={color} className={`border-2  cursor-pointer ${selectedColor === color ? "border-black ": "border-white" }`} onClick={()=> HandleTypeChange("color", color)} >
           <div className={`w-6 h-6`} style={{backgroundColor: color}} ></div>
              </div>
    ))}   

</div>
    </div>
   
<div className="flex flex-col gap-2 text-sm">
    <span className="text-gray-500"> Quantity: {Quantity} </span>
    <div className="flex items-center gap-2">

   
    <button className="cursor-pointer border-2 w-10 border-gray-300 p-1" onClick={()=>HandleQuantityChange("decrement")} >
<Minus/>
    </button>
    
    <button className=" cursor-pointer border-2 border-gray-300 p-1 w-10" onClick={()=>HandleQuantityChange("increment")}> 
<Plus/>
    </button>
     </div>
</div>
{/* button*/}
<button className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium "  onClick={onAddToCart} >  
    <Plus className="w-4 h-4"/>
    Add to cart
</button>
<button className="ring-1  ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex item-center  justify-center cursor-pointer gap-2 text-sm font-medium">
<ShoppingCart/>
Buy this Item
</button>

</div>

    )
}