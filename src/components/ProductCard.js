import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" as={Link} to={`/product/${product.id}`}>Alugar</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
