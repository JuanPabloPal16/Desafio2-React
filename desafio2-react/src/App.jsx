import { useState } from 'react'
import './App.css';
//IMPORT DEL NAV
import Cuerpo from './Components/Cuerpo/Cuerpo';
//ESTILOS DEL NAV CON BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT DEL SALUDO EN EL MAIN
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cuerpo/>
    <ItemListContainer saludo='Bienvenido a la pagina wed' />
    </>

  );
}

export default App
