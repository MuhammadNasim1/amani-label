import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const products = [
    {
      _id: "1",
      name: "Premium Black Abaya",
      price: 2499,
      image: "/abaya1.jpg",
    },
    {
      _id: "2",
      name: "Elegant Beige Abaya",
      price: 2999,
      image: "/abaya2.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="rounded-xl shadow-md p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg"
          />

          <h2 className="text-xl font-semibold mt-3">
            {product.name}
          </h2>

          <p className="text-gray-600 mt-2">
            ₹{product.price}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-black text-white px-5 py-3 mt-4 w-full rounded-lg hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;