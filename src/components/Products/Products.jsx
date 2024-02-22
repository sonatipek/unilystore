import ProductCard from "./ProductCard";
import { productsData } from "../../productData";
import React from "react";

function Products() {
  return (
    <main className="relative container mx-auto py-16" id="shop-list">
      <ul className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 sm:px-0 gap-y-12 sm:gap-6">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}

const MemoizedProducts = React.memo(Products);

export default MemoizedProducts;