import { Container } from "react-bootstrap";
import HeaderAccent from "./headerAccent";
import Image from "react-bootstrap/Image";

const PageHeadersInfo = ({ name, img }) => {
  return (
    <section className=' text-light jumbotron headers-info-jumbotron'>
      <div>
        <Image
          className='headers-info-jumbotron_img'
          src={img}
        ></Image>

        <h1 className='h1-secondary py-5 fw-bold lead text-light headers-info-jumbotron_heading'>
          <HeaderAccent />
          {name}
        </h1>
      </div>
    </section>
  );
};

export default PageHeadersInfo;
