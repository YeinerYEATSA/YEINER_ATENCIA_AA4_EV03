
import React from 'react';
import Product from '../components/Product';

function ProductList() {
  const productos = [
    { name: "Zapatillas deportivas", price: 120000 },
    { name: "Camiseta React", price: 45000 },
    { name: "Gorra JS", price: 30000 },
  ];

  return (
    <div>
      <h2>Catálogo de productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productos.map((item, idx) => (
          <Product key={idx} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
