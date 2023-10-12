import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import headerImgs from './headerImgs';
import sliderlogo from '../../images/Home/header/slider-logo.png';
import MainNav from '../Global/MainNav';

const Header = ({ darkMode, cartLength, cart }) => {
  return (
    <section className='home_header bg-dark '>
      <MainNav
        // cartTotal={increase}
        cartLength={cartLength}
        cart={cart}
        // darkMode
      />
      <Carousel
        data-bs-theme='dark'
        className='home_header_carousel '
      >
        {headerImgs.map((img) => {
          return (
            <Carousel.Item
              className=''
              key={img.id}
            >
              <Image
                // ----------------------------------------------------Add title property name to header image list
                alt={img.title}
                src={img.img}
                className=' home_header_carousel_img'
              />
              <Carousel.Caption className='home_header_carousel_caption '>
                <h1 className='animate__animated animate__fadeIn'>
                  <Image
                    src={sliderlogo}
                    alt='logo'
                    className='px-3 home_header_carousel_logo '
                  />
                </h1>
                <a
                  href='/PricingPlan'
                  className='mt-3 btn-dark m-0 m-auto animate__animated animate__fadeInUp animate__delay-1s'
                >
                  View More
                  <div className='button-container'>
                    <Button
                      aria-label='View More Pricing Plans'
                      variant='outline-dark'
                    >
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
