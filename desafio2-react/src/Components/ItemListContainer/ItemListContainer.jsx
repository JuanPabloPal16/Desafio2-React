//IMPORT DE LOS ESTILOS
import '../estilo/estilo.css'
export default function ItemListContainer(props){
    const {saludo} = props
    return(
        <>
        <h1 className='titulo'>{saludo}</h1>
        </>
    )
}