// CartItemList.jsx
import React from "react";
import CartItem from "./Cartitem"

const Cartitemlist = ({ items }) => (
  <>
    {items.map((item, index) => (
      <CartItem
        key={index}
        image={item.image}
        title={item.title}
        quantity={item.quantity}
        size={item.size}
        price={item.price}
      />
    ))}
  </>
);

export default Cartitemlist;
