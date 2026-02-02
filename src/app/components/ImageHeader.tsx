import Image from "next/image"

export const ImageHeader = ()=>{
return (
    <div style={{ position: "relative", width: "100%", height: "400px" }} >
    <Image src="/featured.png" fill alt="the hearder image" style={{objectFit: "cover"}} />
    </div>
)
}