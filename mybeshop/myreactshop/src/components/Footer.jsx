// src/components/Footer.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => (
  <footer style={{ padding: '20px 0', textAlign: 'center', backgroundColor: '#f1f1f1' }}>
    <Container>
      <Typography variant="body1">© 2024 My Shop. All rights reserved.</Typography>
    </Container>
  </footer>
);

export default Footer;
