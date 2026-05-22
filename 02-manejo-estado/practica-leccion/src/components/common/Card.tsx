import type { ProductType } from "../../type/types"

type ProductTypeProps = {
    item: ProductType,
    addToCart: (item: ProductType) => void 
}


function Card({ item }: ProductTypeProps ) {

    const {  image, price, title  } = item;
    
  return (
    <div>
        <img src={image} alt="" />
    </div>
  )
}

export default Card