import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import { CartContext } from "./contexts/CartContext";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const { offCanvasState } = useContext(CartContext);
  return (
    <>
      {offCanvasState && <Cart />}
      <Hero />
      <Products />
      <Testimonials /> 
    </>
  );
}

export default App;
