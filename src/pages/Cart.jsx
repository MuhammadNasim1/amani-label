import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b py-5"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-28 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-semibold">
                {item.name}
              </h2>

              <p>₹{item.price}</p>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item._id))
                  }
                  className="border px-3 py-1"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item._id))
                  }
                  className="border px-3 py-1"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item._id))
                }
                className="text-red-600 mt-3"
              >
                Remove
              </button>
            </div>

            <p className="font-semibold">
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))
      )}

      <h2 className="text-2xl font-bold text-right mt-6">
        Total: ₹{total}
      </h2>
    </div>
  );
};

export default Cart;