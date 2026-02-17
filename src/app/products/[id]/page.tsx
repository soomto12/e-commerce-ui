"use client"
import { ProductInteraction } from "@/components/ProductInteraction"
import Image from "next/image"
import { productTypes } from "../../../../types/types"
import { addItemToCart } from "../../../../store/CartSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
const productDetails : productTypes =  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },


  }


 const ProductPage =  ( )=>{

const dispatch = useDispatch()
    const value =  useSearchParams();

    const selectedColor = value.get('color') ||( productDetails.colors[0] as string)

    const selectedSize = value.get('size')|| (productDetails.sizes[0] as string )

  
function AddItemToCart (){
dispatch(addItemToCart( { id: productDetails.id, image: productDetails.images[selectedColor] ,size:selectedSize , price:productDetails.price, title:productDetails.name , color:selectedColor, qunatity: Quantity   }))
}
const [Quantity, setQuantity] = useState(1)

function HandleChangeQuantity(type : "increment" | "decrement"){

    if (type === "increment") {
        setQuantity((prev) => prev +1)
 
    }

    if (type === "decrement") {
        setQuantity((prev)=> prev-1)
    }
  }



    
    return (
      <div className="flex flex-col gap-4 lg:flex-row md:gap-12">
            <div className="w-full lg:w-5/12 relative aspect-[2/3]">
                <Image src={productDetails.images[selectedColor]} alt={productDetails.name} fill className="object-contain rounded-md" />
            </div>
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
                <p className="text-2xl font-medium">{productDetails.name}</p>
                <p>{productDetails.description}</p>
                <h2 className="text-lg font-semibold">${productDetails.price.toFixed(2)}</h2>
<ProductInteraction selectedColor={selectedColor} product={productDetails} selectedSize={selectedSize}  onAddToCart={AddItemToCart} Quantity={Quantity}  HandleQuantityChange={()=> HandleChangeQuantity}/>
            </div>
        </div>


       
    )
}

export default ProductPage