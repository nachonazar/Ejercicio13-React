import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = ({ setUbicacion, setPais }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="container mt-5">
      <Form
        onSubmit={handleSubmit((data) => {
          setUbicacion(data.ubicacion);
          setPais(data.pais);
          reset();
        })}
      >
        <div className="d-flex gap-4 justify-content-center">
          <Form.Group className="mb-3" controlId="formUbicacion">
            <Form.Label className="mx-2">Ubicación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una ubicación"
              {...register("ubicacion", {
                required: "La ubicación es obligatoria",
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe tener como máximo 50 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: "Solo se permiten letras y espacios",
                },
              })}
            />
            {errors.ubicacion && (
              <Form.Text className="text-danger">
                {errors.ubicacion.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPais">
            <Form.Label className="mx-2">País</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese un país"
              {...register("pais", {
                required: "El país es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 56,
                  message: "Debe tener como máximo 56 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: "Solo se permiten letras y espacios",
                },
              })}
            />
            {errors.pais && (
              <Form.Text className="text-danger">
                {errors.pais.message}
              </Form.Text>
            )}
          </Form.Group>
        </div>

        <div className="text-center mt-2">
          <Button variant="info" type="submit" className="rounded-0">
            Consultar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
