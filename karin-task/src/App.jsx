import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Vocals from "./pages/Vocals";
import Guitar from "./pages/Guitar";
import Bass from "./pages/Bass";
import Drums from "./pages/Drums";

export default function App() {
  return (
    <div className="navigation">
      <h1>R . E . M</h1>
      <Navigation />
      <Switch>
        <Route path="/Vocals">
          <Vocals />
        </Route>
        <Route path="/Guitar">
          <Guitar />
        </Route>
        <Route path="/Bass">
          <Bass />
        </Route>
        <Route path="/Drums">
          <Drums />
        </Route>
      </Switch>
    </div>
  );
}
