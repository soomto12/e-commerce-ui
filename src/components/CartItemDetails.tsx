import Image from "next/image"



const CartItemDetails = ({image, title, qunatity, price,color, deleteHandler}: {image?: string, title: string, qunatity:number, price: number, color:string , deleteHandler?: ()=>{}} )=>{
return(
<>
<div className="flex flex-row items-center gap-3">
    <div>

    </div>
    <div className=" flex flex-col gap-3">
<p> {title} </p>
<p> qunatity: {qunatity}</p>
<p> colour: {color}</p>
<p>price : {price} </p>
    </div>
</div>
</>
)


}
export default CartItemDetails






 
