import { Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const ProductComp = ({ cart, item, handleClick, handleCartIncrease }) => {
  const { id, name, price, img, category } = item;
  return (
    <Col
      className='pb-5 d-flex align-items-stretch'
      lg='3'
      md='6'
      sm='12'
    >
      <Card>
        <div className='home_shop_inner-overlay_container '>
          <Card.Img
            src={img}
            className='img-fluid'
          ></Card.Img>
          <div className='home_shop_inner-overlay_container_body'>
            <Card.Link>
              <Button
                variant='outline-primary'
                className=''
                // -------------------------------------------------------------is this correct?
                name='Add to Cart'
                title='Add To Cart'
                id={`Add ${name} to Cart`}
                onClick={() => {
                  // handleClick(item.price);
                  // console.log(item);
                  handleCartIncrease(item.id);
                  // console.log(item.id);
                  // console.log(`${item.id} has been Added to cart`);
                }}
              >
                Add To Cart
              </Button>
            </Card.Link>
          </div>
        </div>
        <Card.Body className=''>
          <Card.Text>{category}</Card.Text>
          <div className='d-flex  gap-5 justify-content-between'>
            <Card.Title>
              <h4 className='fs-4 fw-bold'>{name}</h4>
            </Card.Title>
            <p className='fs-5 fw-medium'>${price}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductComp;
