// src/components/Cart.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('/api/cart/')
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const removeFromCart = (productId) => {
    axios.post('/api/remove-from-cart/', { product_id: productId })
      .then(response => {
        setCartItems(cartItems.filter(item => item.product.id !== productId));
        alert('Product removed from cart');
      })
      .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.product.id}>
            <h2>{item.product.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>${item.product.price}</p>
            <button onClick={() => removeFromCart(item.product.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
