// CartActions.jsx
import React from "react";

const CartActions = () => (
  <div className="flex justify-stretch">
    <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f5f1f0] text-[#181311] text-sm font-bold leading-normal tracking-[0.015em]">
        <span className="truncate">Continue Shopping</span>
      </button>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ff8822] text-[#fff] text-sm font-bold leading-normal tracking-[0.015em]">
        <span className="truncate">Checkout</span>
      </button>
    </div>
  </div>
);

export default CartActions;
