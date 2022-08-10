import React from 'react'
import { Nav, Navbar,Container} from 'react-bootstrap'

const Reactbootnav = () => {
  return (
    <Navbar bg='light' expand='lg'>
        <Container>
            <Navbar.Brand href='#home'>REACT</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='about'>About</Nav.Link>
                    <Nav.Link href='product'>Product</Nav.Link>
                    <Nav.Link href='contact'>Contact</Nav.Link>
                    <button>cart</button>

                </Nav>
                
            </Navbar.Collapse>
            
        </Container>

    </Navbar>
  )
}

export default Reactbootnav