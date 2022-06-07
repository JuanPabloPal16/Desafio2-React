import React, {useState} from "react"
import '../estilo/estilo.css'

export default function ItemCount({stock , onAdd}){
    const [count, setCount] = useState(1)
    
    const agregar = () => {
        count == stock ? alert('NO PUEDES AGREGAR MAS PRENDAS') : setCount (count + 1)
    } 

    const sacar= () => {
        count == 0 ? alert('NO TIENES NINGUN PRODUCTO AGREGADO') : setCount (count - 1)
    };

    
        
    return(
        <div>
            <h2 className="tituloPrenda">PRENDA EN EL CARRITO</h2>
            <h3 className="numeroPrenda">{count}</h3>
            <button className="botonResta" onClick={sacar}>-</button>
            <button className="botonSuma" onClick={agregar}>+</button>
            <button className="agregarCarrito" onClick={console.log('Se agrego al carrito')}>AGREGAR AL CARRITO</button>
        </div>
       
    )}