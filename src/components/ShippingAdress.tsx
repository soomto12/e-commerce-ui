import UserInput from "./UserInput"


const ShippingAdress = ()=>{
    return(
        <>
        <div className="flex flex-col md:flex-row gap-3">
            <div className="w-150 shadow-2xl rounded-2xl border-0 p-4">
               
<h1 className="font-bold mb-5 "> Shipping Address</h1>

               <UserInput title="name" placeholder="text"/> 
<UserInput title="email" placeholder="email"/>
<UserInput title="phone" placeholder="08105715588"/>
<UserInput title="Adress" placeholder="23 bolajiBanwo"/>
<UserInput title="city" placeholder="lagos"/>
<div className="w-full rounded-xl bg-black hover:bg-gray-900 py-2 justify-center text-white flex mt-4"> 
  <p  > Continue</p> 
</div>
            </div>

            <div className="w-100 flex flex-col  h-60 ml-8 p-5 gap-4 rounded-2xl shadow-lg mt-5">
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

  

</div>

        </div>
        </>
    )
}

export default ShippingAdress