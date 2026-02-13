  // i need to write the regex code later
import z, { } from "zod"
  
  export interface productTypes {
id : string | number,
name : string,
shortDescription: string,
description: string,
price: number,
sizes : string[],
colors: string[],
images: Record<string, string>
}


export type CartType = productTypes & {
   qunatity: number,
    selectedcolor:string,
    selectedSize: string
}



export const ShippingformSchma = z.object({ 
name: z.string().min(1, "name is requires"),
email: z.email().min(1, "email is required"),
phoneNumber:z.string().min(7, "phone number should be a least 7 digits").max(12, "phone number should not exceed 10 digits"),
address: z.string().min(1, "adress is required"),
city:z.string().min(1, "city is required")
}) 
 
 export  type ShippingFormInput  = z.infer<typeof ShippingformSchma>


 export const PaymentSchema  = z.object({
  name: z.string().min(1, "card name is required"),
  cardNumber: z.string().min(16, "card number is required").max(16, "Card numeber is required"),
  expirationDate : z.string().min(3, "Cvv is required").max(3, "Cvv is required")

 })


 export type paymentMethod = z.infer<typeof PaymentSchema>

export interface CartItem  {
  item :CartType[]
}


