// CartSummary.jsx
import React from "react";

const CartSummary = ({ subtotal, shipping, tax, total }) => (
  <div className="p-4">
    <div className="flex justify-between gap-x-6 py-2">
      <p className="text-[#8a6b60] text-sm font-normal leading-normal">
        Subtotal
      </p>
      <p className="text-[#181311] text-sm font-normal leading-normal text-right">
        ${subtotal.toFixed(2)}
      </p>
    </div>
    <div className="flex justify-between gap-x-6 py-2">
      <p className="text-[#8a6b60] text-sm font-normal leading-normal">
        Estimated Shipping
      </p>
      <p className="text-[#181311] text-sm font-normal leading-normal text-right">
        {shipping}
      </p>
    </div>
    <div className="flex justify-between gap-x-6 py-2">
      <p className="text-[#8a6b60] text-sm font-normal leading-normal">
        Estimated Tax
      </p>
      <p className="text-[#181311] text-sm font-normal leading-normal text-right">
        ${tax.toFixed(2)}
      </p>
    </div>
    <div className="flex justify-between gap-x-6 py-2">
      <p className="text-[#8a6b60] text-sm font-normal leading-normal">
        Total
      </p>
      <p className="text-[#181311] text-sm font-normal leading-normal text-right">
        ${total.toFixed(2)}
      </p>
    </div>
  </div>
);

export default CartSummary;
