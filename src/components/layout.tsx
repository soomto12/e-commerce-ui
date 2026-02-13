"use client"
import { store } from "../../store"
import { Provider } from "react-redux"
import NavBar from "./navBar"
import Footer from "./footer"

 export const Layout = ({children} : any)=>{
    return(
        <>
        
       <Provider store={store}>

      
         <div className="mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-6xl">
         
          <NavBar/>
   
    {children}
     

<Footer/>
        </div>
         </Provider>
        </>
    )
}