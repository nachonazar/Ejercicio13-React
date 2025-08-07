import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [clima, setClima] = useState({});

  useEffect(() => {
    obtenerClima();
  }, []);

  const obtenerClima = async () => {
    const respuesta = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires,AR&units=metric&lang=es&appid=6d0181333345780305a81906090f0e2a"
    );
    console.log(respuesta)
    if(respuesta.status === 200){
      const datos = await respuesta.json()
      console.log(datos)
      //guardar en el state clima
      setClima(datos)
    }
  };

  return (
    <>
      <Titulo></Titulo>
      <Formulario></Formulario>
    </>
  );
}

export default App;
