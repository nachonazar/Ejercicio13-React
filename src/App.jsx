import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import Clima from "./components/Clima";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [clima, setClima] = useState({});
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");

  useEffect(() => {
    obtenerClima();
  }, [ubicacion, pais]);

  const obtenerClima = async () => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&units=metric&lang=es&appid=6d0181333345780305a81906090f0e2a`
      );
      console.log(respuesta);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos);
        //guardar en el state clima
        setClima(datos);
      }
      else{
        setClima({ error: "La ubicación ingresada no existe" });
      }
    } catch (error) {
      console.error();
    }
  };

  return (
    <>
      <Titulo></Titulo>
      <Formulario setUbicacion={setUbicacion} setPais={setPais}></Formulario>
      {clima.error && (
        <p className="text-center text-danger mt-3">{clima.error}</p>
      )}
      {clima.name && <Clima clima={clima}></Clima>}
    </>
  );
}

export default App;
