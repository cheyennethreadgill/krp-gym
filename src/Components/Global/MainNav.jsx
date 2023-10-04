import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Logo from "../../images/Global/logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Cart from "../Cart/Cart";

const MainNav = ({ darkMode, cart, cartLength }) => {
  return (
    <section
      className={
        darkMode ? "position-relative bg-dark " : "position-relative bg-light "
      }
    >
      <Navbar
        expand="lg"
        className={
          darkMode
            ? "main-nav py-4 position-initial z-3 w-100 "
            : "main-nav py-4 position-absolute z-3 w-100 "
        }
      >
        <Container
          fluid
          className="main-nav_container"
        >
          <Navbar.Brand className="d-none d-lg-block">
            <Image
              src={Logo}
              width={150}
              className={
                darkMode ? "main-nav_logo_light " : "main-nav_logo_dark "
              }
            />
          </Navbar.Brand>

          <Navbar.Brand className="d-lg-none">
            <Image
              src={Logo}
              width={120}
              className="main-nav_mobile_logo "
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className=" main-nav_toggle"
            aria-controls="responsive-navbar-nav"
          ></Navbar.Toggle>
          <Navbar.Collapse className="justify-content-between ">
            <Nav className="  fw-semibold main-nav py-4 gap-3">
              <Nav.Link>
                <Link
                  to="/"
                  className={darkMode ? "text-light" : "text-dark"}
                >
                  Home
                  <span>
                    <i className="d-lg-none fa-solid fa-angle-right"></i>
                  </span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/Team"
                  className={darkMode ? "text-light" : "text-dark"}
                >
                  Team
                  <span>
                    <i className="d-lg-none fa-solid fa-angle-right"></i>
                  </span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/PricingPlan"
                  className={darkMode ? "text-light" : "text-dark"}
                >
                  Pricing
                  <span>
                    <i className="d-lg-none fa-solid fa-angle-right"></i>
                  </span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/Contact"
                  className={darkMode ? "text-light" : "text-dark"}
                >
                  Contact
                  <span>
                    <i className="d-lg-none fa-solid fa-angle-right"></i>
                  </span>
                </Link>
              </Nav.Link>
            </Nav>
            <Row>
              <Link
                to="/Cart"
                className={darkMode ? "text-light" : "text-dark"}
              >
                Cart
                <span
                  className={
                    darkMode
                      ? "pb-1 main-nav_link text-light fw-bold"
                      : "pb-1 main-nav_link text-primary fw-bold"
                  }
                >
                  ({cartLength})
                </span>
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right"></i>
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
