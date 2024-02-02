import {
  XMarkIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { setOffCanvasState, totalPrice, products, clearItem } =
    useContext(CartContext);
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-50 bg-black opacity-50 animate-fade-0.5"
        onClick={() => setOffCanvasState(false)}
      ></div>
      <div className="bg-slate-50 shadow-lg fixed h-full z-50 right-0 top-0 p-5 px-7 animate-fade-left w-full sm:w-6/12 md:w-4/12 xl:w-2/12  overflow-y-auto">
        <div className="border-b flex items-center justify-between">
          <h5 className="text-xl font-bold leading-10 text-indigo-950">
            Sepetim
          </h5>
          <button type="button" onClick={() => setOffCanvasState(false)}>
            <XMarkIcon className="size-8" />
          </button>
        </div>

        {products.length > 0 ? (
          <>
            <ul className="mt-5">
              {products.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
            </ul>

            <div className="flex items-center justify-between mt-4">
              <p className="font-medium text-lg text-indigo-950">
                Toplam Tutar:
              </p>
              <p className="font-light text-slate-600 text-base">
                <b className="text-indigo-950 font-normal text-lg">
                  {totalPrice < 0 ? "0" : totalPrice.toFixed(2)}
                </b>
                ₺
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-10">
              <Button className="w-full rounded-lg">Sipariş Ver</Button>
              <Button
                className="w-full !bg-transparent !text-red-950 !border-red-500 rounded-lg"
                icon={{ setIcon: <TrashIcon className="size-4" /> }}
                onClick={clearItem}
              >
                Temizle
              </Button>
            </div>
          </>
        ) : (
          <>
            <img
              src="/undraw_empty_cart.svg"
              alt="empty cart"
              className="w-3/4 mx-auto mt-8"
            />
            <p className="text-slate-400 text-center mt-3">
              Sepetinde henüz ürün yok.
            </p>
            <Button
              className="!px-0 w-full mt-4"
              icon={{ setIcon: <ShoppingBagIcon className="size-5" /> }}
              onClick={() => setOffCanvasState(false)}
            >
              <a href="/#shop-list">Hemen Alışverişe Başla</a>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
