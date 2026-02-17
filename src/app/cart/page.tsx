"use client"
import { useSearchParams } from "next/navigation"

import ShoppingCart from "@/components/CartItem"
import ShippingAdress from "@/components/ShippingAdress"

// cartDummyData

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