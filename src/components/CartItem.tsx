"use client"

import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import CartItemDetails from "./CartItemDetails"
import { ShoppingCarts } from "../../types/types"



const ShoppingCart = ()=>{
  const router = useRouter()
  const cartItem = useSelector((state : any)=> state.cart.item)

function ChangeStep(){

  router.push("/cart?step=2")
}




    return  (
        <div className="flex flex-col md:flex-row ">
            {/* cart Item */}
            
          <div className="   shadow-sm  rounded-sm py-2 px-3 w-150 m-3 space-y-4">
<h1 className="text-lg font-bold"> Cart items</h1>
{cartItem.map((item:ShoppingCarts) => {

  return (
    <CartItemDetails
    id={item.id}
      key={item.id}
      image={item.image}
      title={item.title}
      qunatity={item.qunatity}
      price={item.price}
      color={item.color}
      size={item.size}
    />
  );
})}




          </div>
<div className="w-100 flex flex-col  h-70 ml-8 p-5 gap-4 rounded-2xl shadow-lg mt-5">
<h2> Cart details</h2>
<div className="flex flex-row justify-between">
<p> supplier</p>
<p> 300</p>

</div>
<div className="flex flex-row justify-between">
<p> discount</p>
<p> 0</p>

</div>
<div className="flex flex-row justify-between">
<p>shopping fee</p>

<p> 30</p>

</div>
<div className="flex flex-row justify-between">
<p>total</p>

<p> 1000</p>

</div>
<div className="w-full rounded-xl bg-black hover:bg-gray-900 py-2 justify-center text-white flex"> 
  <p onClick={ChangeStep} > Continue</p> 
</div>
  

</div>




        </div>
    )
}

export default ShoppingCart