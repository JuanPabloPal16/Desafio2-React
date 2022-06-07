import './App.css';
//IMPORT DEL NAV
import Cuerpo from './Components/Cuerpo/Cuerpo';
//ESTILOS DEL NAV CON BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT DEL SALUDO EN EL MAIN
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//IMPORT DE BOTON
import  ItemCount from './Components/VistaContador/VistaContador.jsx';



function App() {
  
  return (
    <>
    <Cuerpo/>
    <ItemListContainer saludo='Bienvenido a la pagina wed' />
    < ItemCount stock = '5'/>
    </>

  );
}

export default App
