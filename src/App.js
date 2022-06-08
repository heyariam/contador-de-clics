import './App.css';
import "./hoja-de-estilo/Boton.css";
import Boton from './componentes/Boton';
import freecodecamplogo from "./imagenes/freecodecamplogo.png";

function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
      <img 
        className="freecodecamp-logo"
        src={freecodecamplogo}
        alt="Logo de freecodecamp"/>
      </div>
      <div className="contenedor-principal">
        <Boton
          texto= "Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
