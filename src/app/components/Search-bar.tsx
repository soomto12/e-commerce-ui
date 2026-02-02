import { Search } from "lucide-react"

const SearchBar = ()=>{
    return( 
        <div className=" hidden sm:flex items-center gap-2 rounded-md  border-2 border-gray-100 px-3">
        <Search  className="w-4 h-4 text-gray-500 " />
        <input type="text"   className="tex-sm outline-0"  />
        </div>
    )
}

export default SearchBar