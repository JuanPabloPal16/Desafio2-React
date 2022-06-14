const ItemDetail = ({producto}) =>{
    return (
        <div>
            <h2>{producto.Nombre}</h2>
            <h3>{producto.Descripcion}</h3>
            <h4>{producto.Precio}</h4>
        </div>
      )
}

export default ItemDetail