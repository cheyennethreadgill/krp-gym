import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import headerImgs from "../../data/headerImgs";
import sliderlogo from "../../images/Home/header/slider-logo.png.webp";
import MainNav from "../Global/MainNav";

const Header = ({ cartLength, cart }) => {
  Header.propTypes = {
    cart: PropTypes.arrayOf.isRequired,
    cartLength: PropTypes.number.isRequired,
  };

  return (
    <section className="home_header bg-dark ">
      <MainNav cartLength={cartLength} cart={cart} />
      <Carousel data-bs-theme="dark" className="home_header_carousel ">
        {headerImgs.map((img) => {
          return (
            <Carousel.Item key={img.id}>
              <Image
                fluid
                height="100%"
                width="100%"
                alt={img.title}
                src={img.img}
              />
              <Carousel.Caption className="home_header_carousel_caption w-50 m-0 m-auto">
                <h1 className="animate__animated animate__fadeIn">
                  <Image
                    height="100%"
                    width="100%"
                    src={sliderlogo}
                    alt="logo"
                    className="px-3 home_header_carousel_logo "
                  />
                </h1>
                <a
                  href="/PricingPlan"
                  className="mt-3 btn-dark m-0 m-auto animate__animated animate__fadeInUp animate__delay-1s">
                  View More
                  <div className="button-container">
                    <Button
                      aria-label="View More Pricing Plans"
                      variant="outline-dark">
                      <span />
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
