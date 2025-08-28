import './App.css';
import Boton from './componentes/boton.js'
import Contador from './componentes/contador.js'
import ricardocorzologo from './imagenes/logo-con-circulo-blanco-letra-blancas-sin-fondo.png'
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);


  const manejarClic = () =>{
    setnumClics(numClics + 1);
  }

  const reinciarContador = () => {
    setnumClics(0);
  }


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className= 'rc-logo'
          src={ricardocorzologo}
          alt ='Logo de Ricardo'>
        </img>      
      </div> 
      <div className='contenedor-contador'>
        <Contador
          numClics = {numClics}
        />

        <Boton 
          texto = 'Clic'
          esBotonDeClic = {true}
          manejarClic = {manejarClic}
          />
        <Boton 
        texto = 'Reiniciar'
        esBotonDeClic = {false}
        manejarClic = {reinciarContador}/>
      </div>
          
    </div>
  );
}

export default App;
