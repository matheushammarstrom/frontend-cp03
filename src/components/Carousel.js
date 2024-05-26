import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../data/products';
import '../styles/Carousel.scss';

const CustomCarousel = () => {
  const carouselItems = products.slice(0, 3);

  return (
    <Carousel>
      {carouselItems.map(product => (
        <Carousel.Item key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.name}
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
