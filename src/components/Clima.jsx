import React from "react";
import { Card } from "react-bootstrap";

const Clima = ({ clima }) => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {clima.name}, {clima.sys?.country}
          </Card.Title>
          <Card.Text>
            <div>
              <h1>{clima.main?.temp}°C</h1>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="row">
            <div className="col">
              <small className="d-block">Viento</small>
              <span>{clima.wind?.speed} m/s</span>
            </div>
            <div className="col">
              <small className="d-block">Presión</small>
              <span>{clima.main?.pressure} hPa</span>
            </div>
            <div className="col">
              <small className="d-block">Humedad</small>
              <span>{clima.main?.humidity}%</span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Clima;
    