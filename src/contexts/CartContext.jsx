import { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

const defaultCartState = {
  products: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let existingCartItemIndex = state.products.findIndex(
        (product) => product.id === action.product.id
      );

      let updatedItems = [...state.products];

      if (existingCartItemIndex !== -1) {
        updatedItems[existingCartItemIndex] = {
          ...state.products[existingCartItemIndex],
          amount:
            state.products[existingCartItemIndex].amount + action.product.amount,
        };
      } else {
        updatedItems = [...state.products, action.product];
      }

      return {
        products: updatedItems,
        totalPrice: state.totalPrice + action.product.price * action.product.amount,
      };

    case "REMOVE_ITEM":
      return {
        products: [
          ...state.products.filter((product) => product.id !== action.id),
        ],
        totalPrice:
          state.totalPrice -
          state.products.find(({ id }) => id === action.id).price,
      };

    case "CLEAR_ITEM":
      return {
        products: [],
        totalPrice: 0,
      };

    default:
      break;
  }
};

export default function CartContextProvider({ children }) {
  const [offCanvasState, setOffCanvasState] = useState(false);
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

  const contextValue = {
    offCanvasState,
    setOffCanvasState,
    products: cartState.products,
    totalPrice: cartState.totalPrice,
    addItem: (product) => {
      cartDispatch({ type: "ADD_ITEM", product });
    },
    removeItem: (id) => {
      cartDispatch({ type: "REMOVE_ITEM", id });
    },
    clearItem: () => {
      cartDispatch({ type: "CLEAR_ITEM" });
    },
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
