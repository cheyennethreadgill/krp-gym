import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Logo from '../../images/Global/logo.png.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Cart from '../Cart/Cart';
import MobileNav from './MobileNav';

const MainNav = ({ darkMode, cart, cartLength }) => {
  return (
    <section className='position-relative '>
      <Navbar
        expand='lg'
        bg={darkMode ? 'dark' : 'none'}
        data-bs-theme={darkMode ? 'dark' : 'light'}
        className={
          darkMode
            ? 'main-nav py-4 position-initial z-3 w-100 '
            : 'main-nav py-4 position-absolute z-3 w-100'
        }
      >
        <Container
          fluid
          className='main-nav_container'
        >
          <Navbar.Brand className='d-none d-lg-block'>
            <Image
              alt='Company Logo'
              src={Logo}
              width='150px'
              height='100%'
              className={
                darkMode ? 'main-nav_logo_light ' : 'main-nav_logo_dark '
              }
            />
          </Navbar.Brand>

          <Navbar.Brand className='d-lg-none'>
            <Image
              alt='Company Logo'
              src={Logo}
              width='120px'
              height='100%'
              className='main-nav_mobile_logo '
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-label='Mobile Toggle Button'
            className=' main-nav_toggle'
            // aria-controls='responsive-navbar-nav'
          ></Navbar.Toggle>

          <Navbar.Collapse className='justify-content-between '>
            <Nav className='  fw-semibold main-nav py-4 gap-3'>
              <Link
                to='/'
                className='d-flex justify-content-between'
              >
                Home
                <span>
                  <i className='d-lg-none fa-solid fa-angle-right'></i>
                </span>
              </Link>

              <Link
                to='/Team'
                className='d-flex justify-content-between'
              >
                Team
                <span>
                  <i className='d-lg-none fa-solid fa-angle-right'></i>
                </span>
              </Link>

              <Link
                to='/PricingPlan'
                className='d-flex justify-content-between'
              >
                Pricing
                <span>
                  <i className='d-lg-none fa-solid fa-angle-right'></i>
                </span>
              </Link>

              <Link
                to='/Contact'
                className='d-flex justify-content-between'
              >
                Contact
                <span>
                  <i className='d-lg-none fa-solid fa-angle-right'></i>
                </span>
              </Link>
            </Nav>
            <Row>
              <Link
                to='/Cart'
                className='d-flex justify-content-between fw-semibold'
              >
                Cart ({cartLength})
                <span>
                  <i className='d-lg-none fa-solid fa-angle-right'></i>
                </span>
              </Link>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default MainNav;
