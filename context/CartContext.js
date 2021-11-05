import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const checkCart = window.localStorage.getItem("cart");
    const localCart = JSON.parse(checkCart);

    if (localCart?.length) {
      setCart(localCart);
    } else {
      setCart([]);
    }

    return function cleanup() {
      setCart([]);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addItemToCart = (book) => {
    setCart([...cart, book]);
  };

  // Remove item  to cart
  const removeItemToCart = (cartId) => {
    if (!isCartEmpty()) {
      const removeItem = cart;
      setCart(removeItem.filter((book) => book.cartId !== cartId));
    } else {
      console.log("Nothing to remove");
    }
  };

  // Check if cart is empty
  const isCartEmpty = () => {
    return cart?.length > 0 ? false : true;
  };

  const countCartItems = () => {
    return cart?.length ? cart.length : 0;
  };

  const addQuantity = (cartId) => {
    const testCart = cart;
    const item = testCart.filter((crt) => crt.cartId === cartId);
    let updateItem = item[0];

    updateItem.quantity = parseInt(updateItem.quantity) + 1;
    updateItem.total =
      parseFloat(updateItem.price) * parseInt(updateItem.quantity);

    const testCart1 = cart;
    const updatedCart = testCart1.map((crt) =>
      crt.cartId === cartId ? updateItem : crt
    );
    setCart(updatedCart);
  };

  const subtractQuantity = (cartId) => {
    const testCart = cart;
    const item = testCart.filter((crt) => crt.cartId === cartId);
    let updateItem = item[0];

    if (updateItem.quantity === 1) {
      return;
    }
    updateItem.quantity = parseInt(updateItem.quantity) - 1;
    updateItem.total =
      parseFloat(updateItem.price) * parseInt(updateItem.quantity);

    const testCart1 = cart;
    const updatedCart = testCart1.map((crt) =>
      crt.cartId === cartId ? updateItem : crt
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemToCart,
        isCartEmpty,
        countCartItems,
        addQuantity,
        subtractQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
