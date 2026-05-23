import type { ProductType } from "../../type/types"

type ProductTypeProps = {
    item: ProductType,
    addToCart: (item: ProductType) => void
}


function Card({ item, addToCart }: ProductTypeProps) {

    const { image, price, title } = item;

    return (
        <div className="w-full max-w-55 overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1">
            <div className="flex h-48 items-center justify-center bg-slate-100 p-4">
                <img src={image} alt={title} className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105" />
            </div>

            <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-4">
                    <h2 className="text-sm font-semibold leading-snug text-slate-900">{title}</h2>
                    <h3 className="shrink-0 text-sm font-bold text-slate-900">${price}</h3>
                </div>

                <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="w-full rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
                >
                    Añadir al carrito
                </button>
            </div>

        </div>
    )
}

export default Card