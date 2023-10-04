import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../../images/Global/logo.png";
import Socials from "./socials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-primary text-light">
      <Container className="py-5">
        <Row className="py-5 gap-3">
          <Col
            lg="3"
            className="me-5"
          >
            <Image
              fluid
              src={logo}
              className="mb-3 mb-lg-5  pb-lg-4"
            ></Image>
          </Col>

          <Col
            lg="8"
            md="12"
            sm="12"
          >
            <h5 className="fw-light ">
              Please feel free to send us an e-mail at kropp@qodeinteractive.com
              for any additional inquiries
            </h5>
          </Col>
          <Col
            lg="3"
            className="me-lg-5"
          >
            <h3 className="fs-4 fw-bold">About</h3>
            <p className="text-light">
              Shape up your site with Kropp, a theme especially made for fitness
              & gym websites.
            </p>
          </Col>
          <Col
            lg="8"
            sm={{ order: 1 }}
          >
            <Row>
              <Col lg="4">
                <h3 className="fs-4 fw-bold">Working Hours</h3>
                <ul className="p-0">
                  <li className="text-light list-unstyled">
                    Monday-Friday <br></br> 05:30 - 12:30
                  </li>
                  <br></br>
                  <li className="text-light  list-unstyled">
                    Weekdays <br></br> 05:30 - 12:30
                  </li>
                </ul>
              </Col>
              <Col lg="4">
                <h3 className="fs-4 fw-bold">Location</h3>
                <p className="text-light">
                  68 Main St, Brooklyn <br></br>NY 11201, United States
                </p>
                <br></br>
                {/* <a href="mailto:kropp@qodeinteractive.com">
                  mailto:kropp@qodeinteractive.com
                </a> */}
                {/* <a href="phone:+ (1) 718 - 000 - 0211"></a> */}
              </Col>
              <Col lg="4">
                <Form>
                  <Form.Group>
                    <Form.Label>
                      <h2 className="fs-4 fw-bold text-uppercase">Start Now</h2>
                    </Form.Label>
                    <div className="input-container">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="form-control-light"
                      ></Form.Control>
                      {/* <InputGroup.Text className="d-flex justify-content-center align-items-center"></InputGroup.Text> */}
                      <div className="button-container">
                        <Button
                          variant="outline-light"
                          type="submit"
                          className=""
                        >
                          <span></span>
                        </Button>
                      </div>
                    </div>
                    <Form.Text>
                      <p className="fw-semibold fs-6">
                        Subscribe to our newsletter
                      </p>
                    </Form.Text>
                  </Form.Group>
                </Form>
                <Socials />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="copyright  bg-dark py-3 d-flex align-items-center">
        <Container className="">
          <p className="p-0 m-0 text-light">
            Copyright 2023 |
            <Link
              to="/Contact"
              className="text-light"
            >
              Contact |
            </Link>
            <Link
              to="/"
              className="text-light"
            >
              Privacy Policy
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
