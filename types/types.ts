  import z from "zod"
  
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






export const ShippingformSchma = z.object({ 
name: z.string().min(1, "name is requires"),
email: z.email().min(1, "email is required"),
phoneNumber:z.string().min(7, "phone number should be a least 7 digits").max(12, "phone number should not exceed 10 digits"),
address: z.string().min(1, "adress is required"),
city:z.string().min(1, "city is required")
}) 
 
 export  type ShippingFormInput  = z.infer<typeof ShippingformSchma>