import React from 'react';
import ProductCard from '../components/ProductCard';
import CustomCarousel from '../components/Carousel';
import products from '../data/products';
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <CustomCarousel />
        <div className="row mt-4">
          {products.map(product => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
