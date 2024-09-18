import React from 'react';
import { Container, Typography, Button, TextField, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Admin Panel
      </Typography>
      <Typography variant="h6">Add New Product</Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="Product Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Price" type="number" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Description" multiline rows={4} fullWidth />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" className={classes.button}>
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default Admin;
