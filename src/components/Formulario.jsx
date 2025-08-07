import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div className="container mt-5">
        <Form>
      <div className="d-flex gap-4 justify-content-center">
          <Form.Group className="mb-3" controlId="formUbicacion">
            <Form.Label>Ubicación</Form.Label>
            <Form.Control type="text" placeholder="Ingrese una ubicación" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPais">
            <Form.Label>País</Form.Label>
            <Form.Control type="text" placeholder="Ingrese un país" />
          </Form.Group>
          </div>
          <div className="text-center mt-2"><Button variant="info" type="submit" className="rounded-0">Consultar</Button></div>
      </Form>
    </div>
  );
};

export default Formulario;
