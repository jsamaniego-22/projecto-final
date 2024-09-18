import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Header } from '../components/Header'; 
import { Footer } from '../components/Footer'; 

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const CartItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const CartPage = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  return (
    <div>
      <Header />
      <Container>
        <Root>
          <Typography variant="h4" gutterBottom>
            Your Cart
          </Typography>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} key={item.id}>
                <CartItem>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">Price: ${item.price}</Typography>
                  <Typography variant="body1">Quantity: {item.quantity}</Typography>
                  <Button variant="outlined" color="primary" onClick={() => onRemoveItem(item.id)}>
                    Remove
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    Increase Quantity
                  </Button>
                </CartItem>
              </Grid>
            ))}
          </Grid>
        </Root>
      </Container>
      <Footer />
    </div>
  );
};

export default CartPage;
