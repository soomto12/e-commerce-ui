"use client"
import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";

export const Filter = ()=>{
const router = useRouter()
const searchParams = useSearchParams()
const pathName = usePathname()


const ChangeFilter = (value : string)=>{
const searchParam = new URLSearchParams(searchParams)
searchParam.set("category", value)
router.push(`${pathName}?${searchParam.toString()}`)
}
    return(
        <div className="flex justify-end mt-3 gap-4">
            <span>
                Sort by:
            </span>
            <select name="sort" id="sort" className=" border-2 rounded-lg text-gray-400 text-center text-sm  py-1" onChange={(e)=>ChangeFilter(e.target.value)}>
                <option value="newest">
                    Newest
                </option>
                <option value="oldest">
                    Oldest
                </option><option value="acs">
                    Price:low to high
                </option>
                <option value="decs"> price: high to low</option>


            </select>
        </div>
    )
}