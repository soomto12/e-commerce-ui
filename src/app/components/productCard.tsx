import React from "react"
import { productTypes } from "../../../types/types"
import Link from "next/link"
import Image from "next/image"

const ProductCard : React.FC <productTypes> = ({id, name,shortDescription, sizes, colors, images, price,   })=>{

return (
<div className="shadow-lg rounded-lg overflow-hidden ">
    
    <Link href={`/products/${id}`}>
    <div className="relative aspect-[]">
        <Image src={images[colors[4]]}alt="the product image" fill />
    </div>
    </Link>
    
    </div>

)

}


export default ProductCard