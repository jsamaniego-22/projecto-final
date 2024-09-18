import React, { Component } from 'react';
import ErrorFallback from './ErrorFallback'; // Asegúrate de tener este componente
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de reserva
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de reporte de errores
    console.error("Error capturado en ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de reserva
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
