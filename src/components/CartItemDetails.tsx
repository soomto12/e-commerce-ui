


import Image from "next/image"
import { ShoppingCarts } from "../../types/types"

const CartItemDetails = ({ image, title, qunatity, price, color, size }: ShoppingCarts) => {
  return (
    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm border min-w-0">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border bg-gray-50">
        <Image src={image} alt={title ?? "product image"} width={80} height={80} className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium text-gray-900 truncate">{title}</h3>
          <p className="text-sm font-semibold text-gray-800">${Number(price).toFixed(2)}</p>
        </div>

        <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Qty</span>
            <span className="font-medium text-gray-700">{qunatity}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Size</span>
            <span className="font-medium text-gray-700">{size}</span>
          </div>

          <div className="flex items-center gap-2 ">
            <span className="text-gray-400">Color</span>
            <span
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color }}
              aria-hidden
            />
            <p className="text-gray-500">{color}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <button className="text-xs text-gray-600 hover:text-red-600">Remove</button>
          <button className="text-xs text-gray-600 hover:underline">Save for later</button>
        </div>
      </div>
    </div>
  )
}

export default CartItemDetails





 
