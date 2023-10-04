import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import image1 from "../../images/Home/routine/home-routine-1.png";
import image2 from "../../images/Home/routine/home-routine-2.png";
import image3 from "../../images/Home/routine/home-routine-3.png";
import image4 from "../../images/Home/routine/home-routine-4.png";
import image5 from "../../images/Home/routine/home-routine-5png.png";

const Routines = () => {
  return (
    <section className="home_routines bg-light position-relative pb-5 ">
      <Container className="pt-5 pb-3">
        <Row className="pt-5">
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image src={image1}></Image>
            <h3 className="fs-2 fw-bold">Abs</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image src={image2}></Image>
            <h3 className="fs-2 fw-bold">back</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image src={image3}></Image>
            <h3 className="fs-2 fw-bold">arms</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image src={image4}></Image>
            <h3 className="fs-2 fw-bold">legs</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image src={image5}></Image>
            <h3 className="fs-2 fw-bold">shoulders</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Routines;
