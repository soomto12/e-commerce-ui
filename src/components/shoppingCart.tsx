import Link  from "next/link"
import { ShoppingCart } from "lucide-react"

import {  useSelector } from "react-redux"
const ShoppingCartItem = ()=>{

    

    const cart : [] = useSelector((state:any)=> state.cart.item)

    
    return (
        <>
        <Link className="relative" href="/cart">
        <ShoppingCart className="w-4 h-4 text-gray-600"/>
        <span className="absolute -top-4 -right-3 bg-amber-500 rounded-full text-gray-400 h-4 w-4 mr-1 flex item-center"> 
        {cart.length}
        </span>
        </Link>
        </>

    )
}
export default ShoppingCartItem