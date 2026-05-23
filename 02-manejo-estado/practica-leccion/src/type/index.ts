

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
}


export type CartItemType  =  ProductType &{
    quantity:number
}

