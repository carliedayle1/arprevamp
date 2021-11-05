import React, { useContext } from "react";
import * as Icon from "react-feather";
import CartContext from "context/CartContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const QtyForm = ({ cartId, quantity }) => {
  const { addQuantity, subtractQuantity, removeItemToCart } =
    useContext(CartContext);

  const addQuantityHandler = () => {
    // cartItem.quantity = cartItem.quantity + 1;
    addQuantity(cartId);
  };

  const subtractQuantityHandler = () => {
    if (quantity === 1) {
      Swal.fire({
        title: "Remove Book",
        text: "Are you sure you want to remove this book?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeItemToCart(cartId);
          Swal.fire(
            "Removed!",
            "The book has been removed from your cart.",
            "success"
          );
        }
      });
      return;
    }
    subtractQuantity(cartId);
  };

  return (
    <div className="input-counter">
      <span className="minus-btn" onClick={subtractQuantityHandler}>
        <Icon.Minus />
      </span>

      <input
        type="text"
        min="1"
        value={quantity}
        readOnly={true}
        onChange={(e) => e}
      />

      <span className="plus-btn" onClick={addQuantityHandler}>
        <Icon.Plus />
      </span>
    </div>
  );
};

export default QtyForm;
