"use client"
import { useState } from "react"
import React from "react"
import { productTypes } from "../../types/types"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBagIcon } from "lucide-react"


const ProductCard : React.FC <productTypes> = ({id, name, shortDescription, description, sizes, colors, images, price,   })=>{

    const [productTypes, setProductTypes] = useState({
        size: sizes[0],
color: colors[0]
    })

function handleProducChange( type : "size" | "color", value: string) {
setProductTypes( pre=>({
    ...pre,
    [type]: value
})

)
}


return (
<div className="shadow-lg rounded-lg overflow-hidden ">
    
    <Link href={`/products/${id}`}>
    <div className="relative aspect-square">
        <Image src={images[productTypes.color]} alt="the product image" fill style={{objectFit: "cover"}} />
    </div>
    </Link>
  <div className="flex flex-col gap-4 p-4">
<h1 className="font-medium"> {name}</h1>
<p className="text-sm text-gray-500"> {shortDescription}</p>
<div className="flex items-center gap-4 text-xs">
<div className="flex flex-col gap-1">
<span className="text-gray-500 "> Size</span>
<select name="size" id="size" className="ring rounded-md px-2 py-1 " onChange={(e)=>handleProducChange("size", e.target.value)}>
    {sizes.map((size)=> <option value={size} className="bg-gray-300">
{size}
    </option>)}
</select>
</div>
<div className="flex flex-row gap-4" id="color">
    <span> colour</span>
{colors.map((colors)=> <div key={colors} >
    <div  className= "w-[14px] h-[14px] rounded-full" style={{backgroundColor: colors}} onClick={()=>handleProducChange("color", colors)} > </div>
      </div> )}
</div>
</div>

  </div>
  <div className="flex items-center justify-between my-3 mx-4">
<p className="font-medium "> ${price.toFixed(2)} </p>
<button className="bg-gray-300 ring-1 ring-gray-200 rounded-md px-2 py-1 cursor-pointer hover:text-white hover:bg-black flex flex-row gap-2">
    <ShoppingBagIcon className="w-4 h-4"/>
     Add to Cart</button>
  </div>
    </div>



)

}


export default ProductCard