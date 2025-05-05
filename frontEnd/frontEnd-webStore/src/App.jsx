import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import Shop from "./views/Shop";
import ProductDetailsView from "./views/ProductDetailsView";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" component={HomeView}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/shop/product/:id" component={ProductDetailsView}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
