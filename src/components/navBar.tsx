import Link from "next/link"
import Image from "next/image"
import SearchBar from "./Search-bar"
import { HomeIcon} from "lucide-react"
import { Bell } from "lucide-react"
import ShoppingCartItem from "./shoppingCart"
const NavBar = ()=>{


    return (
<nav className="w-full flex flex-row justify-between border-b border-gray-200">
<Link href="/" className="flex flex-center">
<Image src="/logo.png" alt="the website logo" width={36} height={36}/>
<p className="text-md font-medium hidden md:block"> TRENDLAMA </p>
</Link>
<div className="flex items-center gap-4 ">
<Link href={"/"}>
     <HomeIcon className="h-4 w-4 text-gray-400"/>

    </Link>
    <ShoppingCartItem/>
<Bell className="h-4 w-4 text-gray-400"/>

    <SearchBar/> 
    <Link href={"login"}>
    <p> Sigh In</p>
    </Link>
    
   

</div>
 
    </nav>

    )
    

}

export default NavBar