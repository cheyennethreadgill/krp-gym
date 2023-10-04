import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "../src/styles/Index/index.css";
import Home from "./Components/Home/Home";
import PricingPlan from "./Components/PricingPlan/PricingPlan";
import Contact from "./Components/Contact/Contact";
import Team from "./Components/Team/Team";
import Cart from "./Components/Cart/Cart";
import MainNav from "./Components/Global/MainNav";
import Rout from "./Components/Global/Rout";
import products from "../src/Products/products";

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(products);
  // const [darkMode, setdarkMode] = useState(false);
  var darkMode = false;

  // Remove Item------------------------------------------
  function removeItem(id) {
    // console.log(id)
    cart.find((item) => {
      if (id === item.id) {
        return id !== item.id;
      }
    });
    if (cart.length >= 0) {
      setCart(
        cart.filter((item) => {
          return id !== item.id;
        })
      );
    }
  }

  // Increase Quantity---------------------------------------------------
  function increaseQty(prod) {
    const existingProduct = cart.find((item) => {
      return prod.id === item.id;
    });
    // console.log(existingProduct)

    if (existingProduct) {
      setCart(
        cart.map((item) => {
          console.log(existingProduct.quantity);
          return item.id === prod.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item;
        })
      );
    }
  }

  // decrease Quantity------------------------------------------------------
  function decreaseQty(prod) {
    const existingProduct = cart.find((item) => {
      return prod.id === item.id;
    });
    // console.log(existingProduct);
    if (existingProduct) {
      setCart(
        cart.map((item) => {
          console.log(existingProduct.quantity);
          return prod.id === item.id
            ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
            : item;
        })
      );
    }
    if (existingProduct.quantity < 1) {
      setCart(
        cart.filter((item) => {
          return prod.id !== item.id;
        })
      );
    }
  }

  // calculate Grand total-----------------------------------------
  const grandTotal = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  function handleCartIncrease(id) {
    let isPresent = false;
    const existingProduct = cart.find((item) => {
      return id === item.id;
    });
    if (existingProduct) {
      alert("Item already added");
    } else {
      items.filter((item) => {
        // console.log(item[0]);
        if (id === item.id) {
          isPresent = true;
          setCart([...cart, { ...item, quantity: 1 }]);
        }
      });
    }
  }
  // console.log(cart);
  return (
    <BrowserRouter>
      <Rout
        removeItem={removeItem}
        decreaseQty={decreaseQty}
        increaseQty={increaseQty}
        grandTotal={grandTotal}
        handleCartIncrease={handleCartIncrease}
        items={items}
        cart={cart}
        setCart={setCart}
        cartLength={cart.length}
        darkMode={darkMode}
      />
    </BrowserRouter>
  );
};

export default App;
