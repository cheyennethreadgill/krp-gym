import PageHeadersInfo from "../Global/PageHeadersInfo";
import MainNav from "../Global/MainNav";
import header from "../../images/Team/Team-header.jpg";
import members from "../Team/teamList";
import { Row, Col, Container, Form, Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Footer from "../Global/Footer";
import HeaderAccent from "../Global/headerAccent";
import Socials from "../Global/socials";

const PricingPlan = ({ darkMode, cartLength }) => {
  return (
    <section className="princing-plan">
      <MainNav
        darkMode
        cartLength={cartLength}
      />
      <PageHeadersInfo
        name="Pricing Plans"
        img={require("../../images/PricingPlan/pricing-plan-header.jpg")}
      />
      <section className="bg-secondary">
        <Container className="py-5">
          <Row className="text-center text-lg-left text-light py-5 gap-4 gap-lg-0">
            <Col
              lg="3"
              md="12"
              sm="12"
            >
              <Card className="bg-dark text-light rounded-5 p-4">
                <Card.Body className="">
                  <Card.Title className="text-light  mb-4 fs-4">
                    Easy Program
                  </Card.Title>
                  <Card.Text>
                    <p className="text-light">
                      <span className=" fs-1 fw-bold">$50</span> / month
                    </p>
                  </Card.Text>
                  <ul className="m-0 p-0">
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col
              text-md-center
              lg="3"
              md="12"
              sm="12"
            >
              <Card className="bg-dark text-light rounded-5 p-4">
                <Card.Body className="">
                  <Card.Title className="text-light  mb-4 fs-4">
                    Easy Program
                  </Card.Title>
                  <Card.Text>
                    <p className="text-light">
                      <span className=" fs-1 fw-bold">$50</span> / month
                    </p>
                  </Card.Text>
                  <ul className="m-0 p-0">
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col
              text-md-center
              lg="3"
              md="12"
              sm="12"
            >
              <Card className="bg-dark text-light rounded-5 p-4">
                <Card.Body className="">
                  <Card.Title className="text-light  mb-4 fs-4">
                    Easy Program
                  </Card.Title>
                  <Card.Text>
                    <p className="text-light">
                      <span className=" fs-1 fw-bold">$50</span> / month
                    </p>
                  </Card.Text>
                  <ul className="m-0 p-0">
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col
              text-md-center
              lg="3"
              md="12"
              sm="12"
            >
              <Card className="bg-dark text-light rounded-5 p-4">
                <Card.Body className="">
                  <Card.Title className="text-light  mb-4 fs-4">
                    Easy Program
                  </Card.Title>
                  <Card.Text>
                    <p className="text-light">
                      <span className=" fs-1 fw-bold">$50</span> / month
                    </p>
                  </Card.Text>
                  <ul className="m-0 p-0">
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                    <Card.Link className="text-light">
                      <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
                        <i class="fs-5 fa-regular fa-square-check"></i>
                        <li className="fw-light fs-5 list-unstyled text-light ">
                          Lorem ipsum dolor
                        </li>
                      </div>
                    </Card.Link>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </section>
  );
};

export default PricingPlan;
