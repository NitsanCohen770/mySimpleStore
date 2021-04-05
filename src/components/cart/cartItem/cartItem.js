import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import { Card, Button } from 'react-bootstrap';

const CartItem = props => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.quantity}</Card.Text>
        <Button
          variant="danger"
          onClick={() => dispatch(actions.deleteFromCart(props))}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
