import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutUs from "./views/AboutUs";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" component={HomeView}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
