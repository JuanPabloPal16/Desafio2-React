//IMPRT DE LAS ETIQUETAS DEL BOOTSTRAP
import { Navbar, Container, Nav, } from "react-bootstrap"
//IMPORT DEL LOGO DEL CARRITO
import cart from '../../asset/img/cart.jpeg'
//IMPORT DE CSS
import '../../estilo/estilo.css'


export default function Cuerpo(){
 //const {parametro} = props
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <img className="carrito" src={cart}/>
          <Container>
          <Navbar.Brand href="#INICIO">LASLOCAS.IND</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#INICIO">INICIO</Nav.Link>
            <Nav.Link href="#PRODCUTOS">PRODUCTOS</Nav.Link>
            <Nav.Link href="#ENVIO">ENVIO</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
      )
}