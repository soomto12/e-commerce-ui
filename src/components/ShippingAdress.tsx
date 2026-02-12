import UserInput from "./UserInput"
import { ShippingFormInput  } from "../../types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,SubmitHandler } from "react-hook-form"
import { ShippingformSchma } from "../../types/types"
import { useState } from "react"
import { Message } from "./Error"
const ShippingAdress = ()=>{


const {register, handleSubmit, formState: {errors}} = useForm<ShippingFormInput>({
    resolver: zodResolver(ShippingformSchma)
})

const [shippingForm, setShippingform] = useState <ShippingFormInput>()


const handleSubmitForm: SubmitHandler<ShippingFormInput> = (data)=>{
setShippingform(data)
console.log(shippingForm)
}



    return(
       

        
       <div  className="flex flex-col md:flex-row gap-3">
            <div className="w-150 shadow-2xl rounded-2xl border-0 p-4">
               
<h1 className="font-bold mb-5 "> Shipping Address</h1>

  <form onSubmit={handleSubmit(handleSubmitForm)}>
    
           <div className="space-y-3">
             
<UserInput title="email" placeholder="emmanu233@gmail.com" {...register("email")} type="text"/>
{errors.email && ( <Message message={errors.email?.message}/>)}
<UserInput title="phone" placeholder="08105715588" {...register("phoneNumber")} type="text"/>
{errors.phoneNumber && <Message message={errors.phoneNumber?.message}/>}
<UserInput title="Adress" placeholder="23 bolajiBanwo" {...register("address")} type="text"/>
{errors.address && <Message message={errors.address.message}/>}
<UserInput title="city" placeholder="lagos" {...register("city")} type="text"/>
{errors.city && <Message message={errors.city.message}/>}
<UserInput title="name" placeholder="emmanuel" {...register("name")} type="text"/>
{errors.name&& <Message message={errors.name.message}/>}
 </div>   
  <button type="submit"  className="w-full rounded-xl bg-black hover:bg-gray-900 py-2 justify-center text-white flex mt-4">
  continue
  </button>
</form> 
            


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
    )
}

export default ShippingAdress
