import { Card, Button,  } from "react-bootstrap"
const Item =({producto})=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180">{producto.Img}</Card.Img> 
            <Card.Body >
                <Card.Title>{producto.Nombre}</Card.Title>
                <Card.Text>
                {producto.Descripcion}
                </Card.Text>
                <Card.Text>
                    {producto.Precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}

export default Item