// src/pages/HomePage.js

import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  hero: {
    textAlign: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  section: {
    padding: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container className={classes.root}>
        <div className={classes.hero}>
          <Typography variant="h2">Welcome to My Shop</Typography>
          <Typography variant="h5">Find the best products at unbeatable prices</Typography>
          <Button variant="contained" color="secondary" className={classes.button}>
            Shop Now
          </Button>
        </div>
        <div className={classes.section}>
          <Typography variant="h4" gutterBottom>
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {/* Example product cards */}
            <Grid item xs={12} sm={6} md={4}>
              <div className="product-card">
                <Typography variant="h6">Product 1</Typography>
                <Typography variant="body1">$100.00</Typography>
                <Button variant="outlined" color="primary">
                  View Details
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="product-card">
                <Typography variant="h6">Product 2</Typography>
                <Typography variant="body1">$200.00</Typography>
                <Button variant="outlined" color="primary">
                  View Details
                </Button>
              </div>
            </Grid>
            {/* Add more product cards as needed */}
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
