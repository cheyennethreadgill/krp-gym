import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
// import slide1 from "../../images/Home/header/home-slide-2.jpg";
// import slide2 from "../../images/Home/header/home-slide-3.jpg";
// import slide3 from "../../images/Home/header/home-slide-1.jpg";
import headerImgs from "./headerImgs";
import sliderlogo from "../../images/Home/header/slider-logo.png";

const Header = ({ darkMode }) => {
  return (
    <section className="home_header bg-dark ">
      <Carousel
        data-bs-theme="dark"
        className="home_header_carousel "
      >
        {headerImgs.map((img) => {
          return (
            <Carousel.Item key={img.id}>
              <Image
                src={img.img}
                className=" home_header_carousel_img"
              />
              <Carousel.Caption className="home_header_carousel_caption ">
                <h1 className="animate__animated animate__fadeIn">
                  <Image
                    fluid
                    src={sliderlogo}
                    alt="logo"
                    className="px-3 home_header_carousel_logo "
                  />
                </h1>
                <a
                  href="/PricingPlan"
                  className="mt-3 btn-dark m-0 m-auto animate__animated animate__fadeInUp animate__delay-1s"
                >
                  View More
                  <div className="button-container">
                    <Button variant="outline-dark">
                      <span></span>
                    </Button>
                  </div>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Header;
