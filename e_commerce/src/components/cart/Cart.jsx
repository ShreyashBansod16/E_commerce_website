// Cart.jsx
import React from "react";

import CartHeader from "./comp/CartHeader";
import CartItemList from "./comp/Cartitemlist";
import CartSummary from "./comp/CartSummary";
import CartActions from "./comp/CartAction";

const Cart = () => {
  const cartItemsData = [
    {
      image: "https://cdn.usegalileo.ai/stability/bee4f59c-0da6-4e35-8ecb-f0153113e432.png",
      title: "Nike Free Metcon 5 Men's Training Shoes",
      quantity: 1,
      size: 11,
      price: 120.00,
    },
    {
      image: "https://cdn.usegalileo.ai/stability/09dd309b-d64a-4ae7-aab5-5b92aae8e891.png",
      title: "Nike Free Metcon 5 Women's Training Shoes",
      quantity: 1,
      size: 11,
      price: 120.00,
    },
    {
      image: "https://cdn.usegalileo.ai/stability/126c97ed-8417-479b-bac5-5a6c274a1b7e.png",
      title: "Nike Free Metcon 5 Men's Training Shoes",
      quantity: 1,
      size: 11,
      price: 120.00,
    },
  ];

  const subtotal = cartItemsData.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = "Free";
  const tax = 10.35;
  const total = subtotal + tax;

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-secondary/10 overflow-x-hidden"
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
    >
      <div className="flex flex-col bg-white border-secondary border-2 rounded-3xl mx-auto max-w-screen-lg">
       
        <div className="layout-container flex h-full grow flex-col items-start">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <CartHeader />
              <CartItemList items={cartItemsData} />
              <CartSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
              <CartActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
