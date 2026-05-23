import Cart from "./Cart";
import type { CartItemType } from "../type";

type HeaderTypeProps = {
  cart: CartItemType[];
  removeFromCart: (id: number) => void;
};

function Header({ cart, removeFromCart }: HeaderTypeProps) {
  return (
    <header className="border-b border-slate-200 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-black text-slate-900">Mini carrito de compras</h1>
        </div>

        <div className="group relative">
          <button
            type="button"
            className="flex items-center gap-3 rounded-full border bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="h-5 w-5">
	          <path d="M0 0h24v24H0z" fill="none" />
	          <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
              </svg>

            </span>

            <span>Ver carrito</span>
          </button>

          <Cart cart={cart} onRemove={removeFromCart} />
        </div>
      </div>
    </header>
  );
}

export default Header;