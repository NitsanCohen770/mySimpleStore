import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Card, Button } from 'react-bootstrap';

const ProductItem = props => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => dispatch(actions.addToCart(props))}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
