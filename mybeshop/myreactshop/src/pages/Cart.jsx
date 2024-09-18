import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = styled((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Cart = () => {
  const classes = useStyles();

  // Example cart items
  const cartItems = [
    { id: 1, name: 'Product 1', quantity: 2, price: 20.0 },
    { id: 2, name: 'Product 2', quantity: 1, price: 15.0 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Shopping Cart
      </Typography>
      <List className={classes.list}>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity} - $${item.price.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Checkout
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button} component={Link} to="/">
        Continue Shopping
      </Button>
    </Container>
  );
};

export default Cart;
