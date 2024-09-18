// src/components/Admin.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Admin = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProduct(prevProduct => ({ ...prevProduct, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }
    axios.post('/api/add-product/', formData)
      .then(response => alert('Product added'))
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h1>Admin - Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Product Description" required></textarea>
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Admin;
