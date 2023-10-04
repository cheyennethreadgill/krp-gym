import MainNav from "../Global/MainNav";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Routines from "./Routines";
import HomeShop from "./HomeShop";
import HomeTrainer from "./HomeTrainer";
import Footer from "../Global/Footer";
import products from "../../Products/products";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = ({ cart, cartLength, darkMode, items, handleCartIncrease }) => {
  const [price, setPrice] = useState(0);
  const [increase, setIncrease] = useState(price);

  // console.log(cart)

  // function handleClick(val) {
  //   setPrice(price + val);
  //   // console.log(price + val);
  //   setIncrease(increase + val);
  //   console.log(increase);
  // }

  return (
    <section>
      <MainNav
        // cartTotal={increase}
        cartLength={cartLength}
        cart={cart}
        // darkMode
      />
      <Header />
      <Newsletter />
      <Routines />
      <HomeTrainer />
      <HomeShop
        items={items}
        // handleClick={handleClick}
        handleCartIncrease={handleCartIncrease}
        cartTotal={increase}
        cart={cart}
      />
      <Footer />
    </section>
  );
};

export default Home;
