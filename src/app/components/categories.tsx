"use client"

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";


import { useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];


const Categories = ()=>{
const params = useSearchParams()

const selectedCatrgory = params.get("category")


const ChangeParams = ()=>{
    
}

console.log(selectedCatrgory)
    return (
        <div className=" grid sm:grid-col-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-gray-100 p-2 rounded-lg mt-4 text-sm" >
{categories.map((item,idex)=> <div key={idex}className={`flex flex-row items-center p-2 justify-center rounded-lg gap-3 ${item.slug === selectedCatrgory ? "bg-white" : null}`}> 
    {item.name}
    {item.icon}
    
     </div>)}
        </div>
    )
}

export default Categories