import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Rating from "../ui/Rating";

export default function ProductCard({ product }) {
  const { addItem, setOffCanvasState } = useContext(CartContext);

  const shopNowButtonHandler = () => {
    addItem(product);
    setOffCanvasState(true);
  };
  
  return (
    <li>
      <Card>
        <img
          src={product.img}
          alt={`${product.name} image`}
          className="group-hover:scale-110 transition-transform duration-[400ms]"
        />

        <div id="content" className="p-5 border-t">
          <div>
            <h3 className="text-xl font-semibold leading-snug text-indigo-950">
              {product.name}
            </h3>
            <p className="text-slate-500 line-clamp-4">{product.description}</p>
          </div>

          <Rating className="mt-3" rate={product.rate} />

          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-thin text-indigo-950">
              <b className="font-semibold">{product.price}</b>₺
            </p>
            {product.stock === Number(0) ? (
              <Badge
                badgeText={`Stoklar Tükendi`}
                className="bg-red-50 text-red-700 ring-red-700/10"
              />
            ) : (
              <Badge badgeText={`Stok: ${product.stock}`} />
            )}
          </div>

          <div className="flex gap-3 mt-5">
            <Button
              className="!px-0 w-full rounded !font-normal !text-base"
              onClick={() => addItem(product)}
              disabled={product.stock <= 0 ? true : false}
            >
              Sepete Ekle
            </Button>
            <Button
              className="!px-0 w-full rounded !font-normal !text-base !bg-transparent !text-indigo-950 hover:!bg-indigo-500 hover:!text-slate-50 hover:!scale-100"
              onClick={shopNowButtonHandler}
              disabled={product.stock <= 0 ? true : false}
            >
              Hemen Satın Al
            </Button>
          </div>
        </div>
      </Card>
    </li>
  );
}
