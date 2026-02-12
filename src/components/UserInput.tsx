

interface Input {
    title: string,
    placeholder : string
    type: string

}

const UserInput = ({title, placeholder,type, ...props} : Input)=>{
    return(
        <>
        <div className="mt-4">
 <p className="text-sm text-gray-500 mb-4  "> {title}</p>
<input className=" text-center w-90 border border-gray-900S rounded-lg" placeholder={placeholder} type={type} {...props}  />

        </div>
       
        </>
    )
}


export default UserInput