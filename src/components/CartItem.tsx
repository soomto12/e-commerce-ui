import { CartType } from "../../types/types"
import CartItemDetails from "./CartItemDetails"





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


const ShoppingCart = ()=>{







    return  (
        <div className="flex flex-row ">
            {/* cart Item */}
            
          <div className="   shadow-2xl  rounded-l-sm py-2 px-3 w-150 m-3 ">
<h1 className="text-lg font-bold"> Cart items</h1>
{CartItem.map((item) => {

  return (
    <CartItemDetails
      key={item.id}
      image={item.images[0]}
      title={item.name}
      qunatity={item.qunatity}
      price={item.price}
      color={item.selectedcolor}
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
  <p> Continue</p> 
</div>
  

</div>




        </div>
    )
}

export default ShoppingCart