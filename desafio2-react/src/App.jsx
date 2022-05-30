import { useState } from 'react'
//import logo from './logo.svg'
import './App.css';
import Cuerpo from './Components/Cuerpo/Cuerpo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Cuerpo/>
  );
}

export default App
