import React from 'react'
import { Nav, Navbar,Container, Button} from 'react-bootstrap'
import Cart from './Cart';
import './Reactnav.css';




const Reactbootnav = () => {
  return (
    <Navbar bg='success' expand='lg'>
        <Container>
            <Navbar.Brand href='#home'>KRITANYA ELECTRONICS </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link  className='nav-item' href='/'>Home</Nav.Link>
                    <Nav.Link  className='nav-item'href='about'>About</Nav.Link>
                    <Nav.Link  className='nav-item' href='product'>Product</Nav.Link>
                    <Nav.Link  className='nav-item' href='contact'>Contact</Nav.Link>
                    <Cart/>
                    

                </Nav>
                
            </Navbar.Collapse>
            
        </Container>

    </Navbar>
    
    
  )
  
}

export default Reactbootnav