import { Container } from "react-bootstrap";
import HeaderAccent from "./headerAccent";

const PageHeadersInfo = ({ name, img }) => {
  return (
    <section className=" text-light jumbotron headers-info-jumbotron">
      <div>
        <img
          className="headers-info-jumbotron_img"
          src={img}
        ></img>

        <h1 className="h1-secondary py-5 fw-bold lead text-light headers-info-jumbotron_heading">
          <HeaderAccent />
          {name}
        </h1>
      </div>
    </section>
  );
};

export default PageHeadersInfo;
