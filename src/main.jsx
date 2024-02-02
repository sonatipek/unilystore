import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";
import Footer from "./components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <Header />
    <App />
    <Footer />
  </CartContextProvider>
);
