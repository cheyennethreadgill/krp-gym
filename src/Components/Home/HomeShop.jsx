import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap";

import ProductComp from "../../Products/ProductComp";

const HomeShop = ({
  cart,
  items,
  handleClick,
  cartTotal,
  handleCartIncrease,
}) => {
  return (
    <section className="home_shop position-relative pb-5 ">
      <Container className="pt-5 pb-3">
        {/* {cart.length > 0 ? (
          <div className="">
            <h1>View Your Cart</h1>
            <a className="btn btn-dark">View Cart</a>
          </div>
        ) : null} */}
        <span>
          <svg
            className="qodef-svg--title-decoration qodef-title-decoration"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(-268 -1379)">
              <rect
                width="40"
                height="2"
                transform="translate(268 1398)"
                fill="currentColor"
              ></rect>
              <rect
                width="40"
                height="2"
                transform="translate(289 1379) rotate(90)"
                fill="currentColor"
              ></rect>
            </g>
          </svg>
        </span>
        <h3 className="fs-1 fw-bold pb-3">Shop</h3>
        <Row>
          {items.map((item) => {
            return (
              <ProductComp
                item={item}
                key={item.id}
                cart={cart}
                // handleClick={handleClick}
                // cartTotal={cartTotal}
                handleCartIncrease={handleCartIncrease}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default HomeShop;
