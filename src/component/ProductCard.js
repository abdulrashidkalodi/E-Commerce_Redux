import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get('https://fakestoreapi.com/products') // Replace with your actual API endpoint
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error}</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {products.map((product) => (
        <div 
          key={product.id}
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            width: '250px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff'
          }}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
          />
          <div style={{ marginTop: '10px' }}>
            <h5 style={{ fontSize: '1.2em', margin: '0.5em 0' }}>{product.name}</h5>
            <p style={{ fontSize: '1em', color: '#333' }}>${product.price}</p>
            <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '16px' }}>
              {product.description}
            </p>
            <button
              style={{
                padding: '10px 15px',
                fontSize: '1em',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              onClick={() => alert(`Added ${product.name} to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;