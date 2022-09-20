import React from 'react'
import '../scss/style.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logobg2.png';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <Navbar sticky='top' collapseOnSelect style={{height: "90px", backgroundColor: "#ffffff", boxShadow: "0px 10px 60px 0px rgb(0 0 0 / 10%)"}}>
      <Container>
        <Navbar.Brand href="#home" style={{paddingRight: "110px"}}><img style={{width: "160px"}} src={Logo} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='nav__fonts'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='ano__navlinks nav__fonts'>Services</Nav.Link>
            <Nav.Link href="#features" className='ano__navlinks nav__fonts'>About us</Nav.Link>
            <Nav.Link href="#features" className='ano__navlinks nav__fonts'>Help</Nav.Link>
            <Nav.Link href="#features" className='ano__navlinks nav__fonts'>News</Nav.Link>
            <Nav.Link href="#features" className='ano__navlinks nav__fonts'>Contact us</Nav.Link>
          </Nav>
          <Nav>
            {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
            <Button className='quote__btn'>Get a Quote</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;