

interface Input {
    title: string,
    placeholder : string

}

const UserInput = ({title, placeholder} : Input)=>{
    return(
        <>
        <p className="text-sm text-gray-500 mb-4"> {title}</p>
<input className=" flex items-center  " placeholder={placeholder} type="text"   />
        </>
    )
}


export default UserInput