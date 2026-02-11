import ProductList from "../components/productList"
import { ImageHeader } from "../components/ImageHeader"
const Homepage = () => {
  return (
    <div>
<ImageHeader/>
    <div >

      <ProductList parms="homepage" />
    </div>
    </div>
    
  )
}

export default Homepage