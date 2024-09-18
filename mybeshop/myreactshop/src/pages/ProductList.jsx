import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = styled((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ProductList = () => {
  const classes = useStyles();

  // Example product list
  const products = [
    { id: 1, name: 'Product 1', price: 20.0, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 15.0, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">${product.price.toFixed(2)}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/product/${product.id}`}
                  className={classes.button}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
