import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import css from './NavBar.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState } from 'react';



const NavBar = () => {
   const [state, setstate] = useState(false);
   const mariam =() =>{
    if (window.scrollY>=700) 
    {
      setstate(true)
    }
   }
   window.addEventListener('scroll', mariam)
    return (
      <div >

      <div className={css.header}>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className={css.coverimgOne}>
        <Carousel.Caption>
          <div className={css.textNavBar}>
        <h2>Welcome</h2>
        <h1>Creamy Hot and Ready to Serve</h1>
        <h5>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h5>
        <button>Order Now</button>
        <button>View Menu</button>

          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
       <div className={css.coverimgTow}>
        <Carousel.Caption>
        <div className={css.textNavBar}>
          <h2>Welcome</h2>
          <h1>AMAZING TASTE $ BEAUTIFUL PLACE</h1>
          <h5>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h5>
          <button>Order Now</button>
          <button>View Menu</button>
       </div>
        </Carousel.Caption>
       </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className={css.coverimgThree}>
        <Carousel.Caption>
        <div className={css.textNavBar}>
        <h2>Welcome</h2>
          <h1>The Best Coffee Testing Experience</h1>
          <h5>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h5>
          <button>Order Now</button>
          <button>View Menu</button>
        </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      
             </Carousel>
             <div className={css.navBar}>
            <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">COFFEE <br/> <h5>BLEND</h5></Navbar.Brand>
        <div className={css.NavBarcontaner}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">MENU</Nav.Link>
                <Nav.Link href="#link">SERVICES</Nav.Link>
                <Nav.Link href="#link">BLOG</Nav.Link>
                <Nav.Link href="#link">ABOUT</Nav.Link>
                <NavDropdown title="SHOP" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    single product
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Checkout
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">CONTACT</Nav.Link>
                <Nav.Link href=""><FaShoppingCart/></Nav.Link>
                <Link to={"login"}>Login</Link>
            </Nav>
            </Navbar.Collapse>
        </div>
        </Container>
            </Navbar>
            </div>
            </div>
            <div className={`${css.btn} ${state? css.show :""}`}>
            <button onClick={()=>window.scrollTo(0,0)}><FaAngleDoubleUp/></button>
            </div>
      </div>

    );
}

export default NavBar;
