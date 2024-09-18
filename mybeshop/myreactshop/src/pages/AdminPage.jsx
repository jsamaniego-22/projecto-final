import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Header } from '../components/Header'; 
import { Footer } from '../components/Footer'; 

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const AdminItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const AdminPage = ({ products, onEditProduct, onDeleteProduct }) => {
  return (
    <div>
      <Header />
      <Container>
        <Root>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <AdminItem>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body1">Price: ${product.price}</Typography>
                  <Button variant="outlined" color="primary" onClick={() => onEditProduct(product.id)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => onDeleteProduct(product.id)}>
                    Delete
                  </Button>
                </AdminItem>
              </Grid>
            ))}
          </Grid>
        </Root>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminPage;
