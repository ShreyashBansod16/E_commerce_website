import React from 'react';
import cat1 from "../../assets/Menu/apparel.png";
import cat2 from "../../assets/Menu/electronic.png";
import cat3 from "../../assets/Menu/groceries.png";
import cat4 from "../../assets/Menu/sports.png";

const MenuData = [
  {
    id: 1,
    title: "Apparel",
    link: "/",
    img: cat1,
  },
  {
    id: 2,
    title: "Electronics",
    link: "/",
    img: cat2,
 
  },
  {
    id: 3,
    title: "Sports Equipment",
    link: "/",
    img: cat4,
   
  },
  {
    id: 4,
    title: "Everyday Groceries",
    link: "/",
    img: cat3,
  
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <h1 className="text-2xl font-bold text-left pb-10 uppercase">Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuData.map((menu) => (
            <div
              key={menu.id}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-[60px] mb-4 scale-110 transform-translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
