import { useState } from "react";
import PageHeadersInfo from "../Global/PageHeadersInfo";
import MainNav from "../Global/MainNav";
import header from "../../images/Team/Team-header.jpg";
import members from "../Team/teamList";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Footer from "../Global/Footer";
import HeaderAccent from "../Global/headerAccent";
import Socials from "../Global/socials";
// import {useLoadScript}

const Contact = ({ darkMode, cartLength }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="contact">
      <MainNav
        darkMode
        cartLength={cartLength}
      />
      <PageHeadersInfo
        name="Contact Us"
        img={require("../../images/Contact/contact-header.jpg")}
      />
      <section className="map"></section>
      <section className="bg-dark py-5">
        <Container>
          <Row className=" text-light py-5 gap-5">
            <Col
              lg="5"
              sm=""
              className="ms-lg-5"
            >
              <h3 className="pb-3 fs-1 fw-bold">
                Contact us and find your nearest gym
              </h3>
              <p className="text-light">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using distribution of letters, as opposed to using.
              </p>
            </Col>
            <Col lg="6">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    controlId="validationCustom04"
                  >
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <a className="mt-3 btn-light">
                  See More
                  <div className="button-container">
                    <Button
                      type="submit"
                      variant="outline-light"
                    ></Button>
                  </div>
                </a>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </section>
  );
};

export default Contact;

{
  /* <Container className="py-5">
          <Row className=" text-light py-5 gap-5">
            <Col
              lg="4"
              sm=""
              className="ms-lg-5"
            >
              <h3 className="pb-3 fs-1 fw-bold">
                Contact us and find your nearest gym
              </h3>
              <p className="text-light">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using distribution of letters, as opposed to using.
              </p>
            </Col>
            <Col lg="7">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="text-light "
              >
                <Form.Group className="text-center ">
                  <Row className="pb-4">
                    <Col>
                      <Form.Control
                        required
                        className=""
                        placeholder="Name"
                      ></Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        required
                        className=""
                        placeholder="Email"
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row className="pb-4">
                    <Col>
                      <Form.Control
                        required
                        className=""
                        placeholder="Your Message"
                        as="textarea"
                        style={{ height: "10rem" }}
                      ></Form.Control>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>

              <Button
                type="submit"
                className="btn-main-light border-white fs-6"
              >
                See More
              </Button>
            </Col>
          </Row>
        </Container> */
}
