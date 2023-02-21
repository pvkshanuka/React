import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown((perStatus) => !perStatus);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
