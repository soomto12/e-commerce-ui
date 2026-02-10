import Link  from "next/link"
import { ShoppingCart } from "lucide-react"
const ShoppingCartItem = ()=>{
    return (
        <>
        <Link className="relative" href="/cart">
        <ShoppingCart className="w-4 h-4 text-gray-600"/>
        <span className="absolute -top-3 -right-3 bg-amber-500 rounded-full text-gray-400 h-4 w-4 flex item-center"> 0</span>
        </Link>
        </>

    )
}
export default ShoppingCartItem