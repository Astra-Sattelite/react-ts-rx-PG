import { Container, Navbar, Nav } from 'react-bootstrap'
import '../../assets/App.scss'

export function Landing() {
  return (
    <>
      <Header />
      <Container>
      </Container>
    </>
  )
}

function Header() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              height="40pct"
              className="navbarBrandLogo"
            />
            {' '}Bootstrap
          </Navbar.Brand>
        </Navbar>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todo">Todo</Nav.Link>
            <Nav.Link href="/counter">Counter</Nav.Link>
          </Nav>
        </Navbar>
      </Navbar>
    </>
  )
}