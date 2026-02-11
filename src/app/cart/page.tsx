"use client"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { CartType } from "../../../types/types"
import ShoppingCart from "@/components/CartItem"
import ShippingAdress from "@/components/ShippingAdress"

// cartDummyData
const CartItem : CartType[] = [
     {
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
    qunatity: 1,
    selectedcolor:"gray",
    selectedSize:"m"


  },
 {
      id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
selectedcolor: "black",
selectedSize:"l",
qunatity: 1

  },

 {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    qunatity:3,
    selectedcolor:"gray",
    selectedSize:"m"
 }
]

const step = [{
  id:1,
  title : "shopping Cart"
},
{
  id:2,
  title: "shipping Method",

},
{
id:3,
title: "payment Method"
}

]


const Cart = ()=>{

const useParams = useSearchParams();
const router = useRouter()


const activestep = parseInt(useParams.get("step") || '1' ) 

    return(
        <>
        
<div className="flex flex-col justify-center gap-4 items-center mt-8" id="header">

<h1 className="text-2xl font-medium"> Your Shopping cart</h1>
<div className="flex md:flex-row  "> 

     <div className="flex md:flex-row flex-col justify-center gap-7 text-xl">
      {step.map((steps)=> (
<div className={`flex flex-row gap-6 border-b-2 pb-4 ${steps.id === activestep ? "border-black" : "border-gray-300"}`} key={steps.id}>
<div className={`w-4 h-4 flex items-center text-white rounded-full justify-center p-4 ${steps.id === activestep ? "bg-black" : "bg-gray-200"} `}> {steps.id}</div>
<p> {steps.title}</p>
</div>

      ))
        
      }
     
     </div>
    
     
</div>
 {/* step& details */}
<div className=" w-full flex flex-col md:flex-row"> 
  {activestep === 1 && <ShoppingCart/> }
{activestep ===2 && <ShippingAdress/>}
     </div>
</div>
        
        </>
    )
}




export default Cart