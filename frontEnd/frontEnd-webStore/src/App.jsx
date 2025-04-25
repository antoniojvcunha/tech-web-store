import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" component={HomeView}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
