import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Team from "../Team/Team";
import PricingPlan from "../PricingPlan/PricingPlan";
import Contact from "../Contact/Contact";

const Rout = ({
  darkMode,
  cartLength,
  handleCartIncrease,
  items,
  cart,
  setCart,
  removeItem,
  decreaseQty,
  increaseQty,
  grandTotal,
}) => {
  return (
    <Routes>
      <Route
        path="/PricingPlan"
        element={
          <PricingPlan
            darkMode={darkMode}
            cartLength={cartLength}
          />
        }
      />
      <Route
        path="/Contact"
        element={
          <Contact
            darkMode={darkMode}
            cartLength={cartLength}
          />
        }
      />
      <Route
        path="/Team"
        element={
          <Team
            darkMode={darkMode}
            cartLength={cartLength}
          />
        }
      />
      <Route
        path="/"
        element={
          <Home
            handleCartIncrease={handleCartIncrease}
            items={items}
            darkMode={darkMode}
            cartLength={cartLength}
            cart={cart}
          />
        }
      />
      <Route
        path="/Cart"
        element={
          <Cart
            cart={cart}
            items={items}
            setCart={setCart}
            darkMode={darkMode}
            cartLength={cartLength}
            removeItem={removeItem}
            decreaseQty={decreaseQty}
            increaseQty={increaseQty}
            grandTotal={grandTotal}
          />
        }
      />
      <Route
        path="/Checkout"
        element={
          <Checkout
            cart={cart}
            items={items}
            setCart={setCart}
            darkMode={darkMode}
            cartLength={cartLength}
            removeItem={removeItem}
            decreaseQty={decreaseQty}
            increaseQty={increaseQty}
            grandTotal={grandTotal}
          />
        }
      />
    </Routes>
  );
};

export default Rout;
