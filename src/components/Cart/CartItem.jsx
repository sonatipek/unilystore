import { TrashIcon } from "@heroicons/react/24/outline";
import Badge from "../ui/Badge";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="flex items-center justify-start border-b-2 py-3 gap-2">
      <img src={`${product.img}`} className="size-12" alt="" />

      <div className="w-full">
        <p>{product.name}</p>

        <div className="flex items-center justify-end sm:justify-start gap-3 mr-2">
          <Badge badgeText={product.amount} />
          <p>{product.price}₺</p>
        </div>
      </div>
      <button type="button" onClick={() => removeItem(product.id)} className="">
        <TrashIcon className="size-5 text-indigo-400" />
      </button>
    </li>
  );
}
