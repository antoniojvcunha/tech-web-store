import { Route, Switch } from "wouter";
import { CartProvider } from "./context/cart/cartProvider";
import { AuthProvider } from "./auth/AuthContext";
import HomeView from "./views/HomeView";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import Shop from "./views/Shop";
import ProductDetailsView from "./views/ProductDetailsView";
import CartView from "./views/CartView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { useAuth } from "./auth/useAuth";



function InnerApp() {
  const { user } = useAuth();
  const userId = user?.id || null; 

  return (
    <AuthProvider>
      <CartProvider userId={userId}>
        <div>
          <Switch>
            <Route path="/" component={HomeView} />
            <Route path="/shop" component={Shop} />
            <Route path="/shop/product/:slug" component={ProductDetailsView} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/cart" component={CartView} />
            <Route path="/login" component={LoginView} /> 
            <Route path="/register" component={RegisterView} /> 
          </Switch>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

export default App;