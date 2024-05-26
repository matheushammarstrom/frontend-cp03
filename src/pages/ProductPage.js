import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import '../styles/ProductPage.scss';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));


  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
