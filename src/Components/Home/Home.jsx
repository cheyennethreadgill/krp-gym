import MainNav from "../Global/MainNav";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Routines from "./Routines";
import HomeShop from "./HomeShop";
import HomeTrainer from "./HomeTrainer";
import Footer from "../Global/Footer";
import { useState } from "react";

const Home = ({ cart, cartLength, items, handleCartIncrease }) => {
  const [price, setPrice] = useState(0);
  const [increase, setIncrease] = useState(price);
  return (
    <section>
      <Header
        cartLength={cartLength}
        cart={cart}
      />
      <Newsletter />
      <Routines />
      <HomeTrainer />
      <HomeShop
        items={items}
        handleCartIncrease={handleCartIncrease}
        cartTotal={increase}
        cart={cart}
      />
      <Footer />
    </section>
  );
};

export default Home;
