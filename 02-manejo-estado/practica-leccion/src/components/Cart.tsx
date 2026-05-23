
import formatCurrency from "../helpers";
import type { CartItemType } from "../type";

type CartProps = {
  cart: CartItemType[];
};

function Cart({ cart }: CartProps) {
  const isEmpty = cart.length === 0;

  return (
    <div className="absolute right-0 top-full z-20 w-96 pt-3">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="text-xs font-semibold uppercase  text-slate-500">Carrito</p>
       
      </div>

      <div className="max-h-80 overflow-y-auto">
        {isEmpty ? (
          <div className="px-5 py-10 text-center text-sm text-slate-500">
            Tu carrito está vacío. Agrega un producto para verlo aquí.
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {cart.map((item) => (
              <li key={item.id} className="flex gap-4 px-5 py-4 transition-colors hover:bg-slate-50">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100 p-2">
                  <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {formatCurrency(item.price)} x {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      </section>
    </div>
  );
}

export default Cart;