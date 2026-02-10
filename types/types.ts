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

export type  CartType =  productTypes & { qunatity : number, selectedSize : String, selectedcolor : string}
  
