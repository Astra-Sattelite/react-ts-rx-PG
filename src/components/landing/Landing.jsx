import { Container, Navbar, Nav } from 'react-bootstrap'

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
      <Navbar bg="dark">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              height="30px"
              width="100px"
              className="d-inline-block align-top"
            />
            React Bootstrap
          </Navbar.Brand>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Nav 
          // className="mr-auto"
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todo">Todo</Nav.Link>
            <Nav.Link href="/counter">Counter</Nav.Link>
          </Nav>
        </Navbar>
      </Navbar>
    </>
  )
}