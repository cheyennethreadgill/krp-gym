import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import HeaderAccent from "../Global/headerAccent";
import { Container } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";

const Newsletter = () => {
  return (
    <section className='home_newsletter pt-5 '>
      <Container className='pt-lg-5 '>
        <Row className='gap-3 gap-lg-5 '>
          <Col
            lg='4'
            sm=''
            className='me-lg-5'
          >
            <Form>
              <Form.Group>
                <Form.Label>
                  <HeaderAccent />
                  <h2 className=' fs-1 fw-bold text-uppercase'>Newsletter</h2>
                </Form.Label>
                <div className='input-container'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    className=''
                  ></Form.Control>
                  {/* <InputGroup.Text className="d-flex justify-content-center align-items-center"></InputGroup.Text> */}
                  <div className='button-container'>
                    <Button
                      variant='outline-dark'
                      type='submit'
                      className=''
                    >
                      <span></span>
                    </Button>
                  </div>
                </div>
                <Form.Text>
                  <p className='fw-semibold fs-6'>
                    Subscribe to our newsletter
                  </p>
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
          <Col
            lg='6'
            sm=''
            className='ms-lg-5'
          >
            <h3 className='pb-3 fs-2 fw-bold'>
              GET IN SHAPE WITH OUR PRO TRAINERS. REACH YOUR BODY GOALS IN NO
              TIME, CONTACT US
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using distribution of letters, as opposed to using.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className='h1-primary fw-bold pt-lg-5 '>Routines</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
