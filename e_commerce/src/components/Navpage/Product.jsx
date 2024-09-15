import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our</h1>
        <h2 className="text-4xl font-bold text-secondary">Products</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover our wide range of products designed to fit your needs and style. Explore and shop the latest trends now!
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col max-w-sm rounded-lg border-2  overflow-hidden shadow-lg shadow-slate-500 bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="flex flex-col flex-grow p-4">
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </p>
              <div className="text-xl font-semibold mb-4">${product.price}</div>
              <div className="mt-auto flex justify-center">
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
