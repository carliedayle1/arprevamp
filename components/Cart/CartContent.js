import React, { useContext, useState, useMemo } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import QtyForm from "./QtyForm";
import CartContext from "context/CartContext";
import Swal from "sweetalert2";

const CartContent = () => {
  const { cart, removeItemToCart } = useContext(CartContext);

  const setSubTotal = () => {
    if (cart.length === 0) {
      return 0;
    }
    const crt = cart;

    const prices = crt.map((item) => parseFloat(item.total));
    const total = prices.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    return total.toFixed(2);
  };

  const subtotal = useMemo(() => setSubTotal());
  const shippingPrice = useMemo(() => parseFloat(10.0));
  const total = useMemo(() =>
    parseFloat(parseFloat(subtotal) + shippingPrice).toFixed(2)
  );

  const removeCartItemHandler = (cartId) => {
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
  };

  return (
    <>
      <div className="cart-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Book Cover</th>
              <th scope="col">Title</th>
              <th scope="col">Book Type</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody>
            {cart.length ? (
              cart.map((crt) => (
                <tr key={crt?.cartId}>
                  <td className="product-thumbnail">
                    <Link href="/product-details">
                      <a>
                        <img src={crt?.photo} alt="item" />
                      </a>
                    </Link>
                  </td>

                  <td className="product-name">
                    <Link href={`/products/${crt?.slug}`}>
                      <a>{crt?.title}</a>
                    </Link>
                  </td>
                  <td className="product-name">
                    <span>{crt?.bookType}</span>
                  </td>

                  <td className="product-price">
                    <span className="unit-amount">${crt?.price}</span>
                  </td>

                  <td className="product-quantity">
                    <QtyForm {...crt} />
                  </td>

                  <td className="product-subtotal">
                    <span className="subtotal-amount">
                      ${crt?.total.toFixed(2)}
                    </span>

                    <span
                      className="remove"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeCartItemHandler(crt?.cartId)}
                    >
                      <Icon.Trash2 />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="cart-buttons">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="continue-shopping-box">
              <Link href="/bookstore">
                <a className="btn btn-light">Continue Shopping</a>
              </Link>
            </div>
          </div>

          {/* <div className="col-lg-5 col-md-5 col-sm-5 text-right">
            <Link href="/cart">
              <a className="btn btn-light">Update Cart</a>
            </Link>
          </div> */}
        </div>
      </div>

      <div className="cart-totals">
        <h3>Cart Totals</h3>

        <ul>
          <li>
            Subtotal
            <span>{cart.length > 0 ? `$ ${subtotal}` : "~"}</span>
          </li>
          <li>
            Shipping <span>{cart.length > 0 ? `$ ${shippingPrice}` : "~"}</span>
          </li>
          <li>
            Total
            <span>
              <b>{cart.length > 0 ? `$ ${total}` : "~"}</b>
            </span>
          </li>
        </ul>

        <Link href="/checkout">
          <a className="btn btn-primary">Proceed to Checkout</a>
        </Link>
      </div>
    </>
  );
};

export default CartContent;
