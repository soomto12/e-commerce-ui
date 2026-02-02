"use client"

import React from "react"
import { productTypes } from "../../../types/types"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const ProductCard : React.FC <productTypes> = ({id, name, shortDescription, description, sizes, colors, images, price,   })=>{


    const [image , setimage] = useState(images[colors[0]])

const HandleChangeImage = (color : string)=>{ 
if( color === "blue"  ){
setimage(
    images[colors[1]]
)
}

if(color === "red"){
setimage(images[colors[2]])
}

if(color === "pink"){
setimage( images[colors[3]])
}
}


return (
<div className="shadow-lg rounded-lg overflow-hidden ">
    
    <Link href={`/products/${id}`}>
    <div className="relative aspect-[]">
        <Image src={image}alt="the product image" fill />
    </div>
    </Link>
    <p onClick={()=>HandleChangeImage("pink")}> pink</p>
    <p onClick={()=>HandleChangeImage("red")}> red</p>
    <p onClick={()=>HandleChangeImage("blue")}> blue</p>
    
    </div>

)

}


export default ProductCard