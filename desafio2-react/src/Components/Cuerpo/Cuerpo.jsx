//import logo from '../../logo.svg'
import { Navbar, Container, Nav } from "react-bootstrap"

export default function Cuerpo(){
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#INICIO">LASLOCAS:IND</Navbar.Brand>
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