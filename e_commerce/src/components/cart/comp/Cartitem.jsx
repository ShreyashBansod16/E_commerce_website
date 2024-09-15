// CartItem.jsx
import React from "react";

const Cartitem = ({ image, title, quantity, size, price }) => (
  <div className="flex gap-4 bg-white px-4 py-3 justify-between">
    <div className="flex items-start gap-4">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-[#181311] text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#8a6b60] text-sm font-normal leading-normal">
          Quantity: {quantity} @ ${price}
        </p>
        <p className="text-[#8a6b60] text-sm font-normal leading-normal">
          Size: {size}
        </p>
      </div>
    </div>
    <div className="shrink-0">
      <div className="flex items-center gap-2 text-[#181311]">
        <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f5f1f0] cursor-pointer">
          -
        </button>
        <input
          className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none appearance-none"
          type="number"
          value={quantity}
        />
        <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f5f1f0] cursor-pointer">
          +
        </button>
      </div>
    </div>
  </div>
);

export default Cartitem;
