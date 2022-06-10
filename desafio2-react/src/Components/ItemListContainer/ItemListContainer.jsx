//IMPORT DE LOS ESTILOS
import '../estilo/estilo.css'
import { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer({saludo}){
    const [productos, setProductos]= useState([])
    
    useEffect(()=>{
        getFetch()
        .then((res)=>{
            setProductos(res)
        })
        .catch(err => console.log(err))
    })
    console.log(productos)
    
    
    
    return(
        <>
        <h1 className='titulo'>{saludo}</h1>

        <div className='divCars'>
            <ItemList productos={productos}/>
        </div>
        
        
        </>
    )
}