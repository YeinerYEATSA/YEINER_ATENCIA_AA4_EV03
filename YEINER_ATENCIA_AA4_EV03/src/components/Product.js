
import React from 'react';

function Product({ name, price }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', margin: '1rem' }}>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Product;
