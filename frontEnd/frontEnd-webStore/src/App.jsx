import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import Shop from "./views/Shop";
import ProductDetailsView from "./views/ProductDetailsView";
import CartView from "./views/CartView";
import { CartProvider } from "./context/cart/cartProvider";

function App() {
  return (
    <CartProvider userId={"1"}>
      <div>
        <Switch>
          <Route path="/" component={HomeView}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route
            path="/shop/product/:slug"
            component={ProductDetailsView}
          ></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/cart" component={CartView}></Route>
        </Switch>
      </div>
    </CartProvider>
  );
}

export default App;