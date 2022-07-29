import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

import Header from "./Pages/Components/Header";
import Footer from "./Pages/Components/Footer";

import Home from "./Pages/Home";
import Rankings from "./Pages/Rankings";
import Factors from "./Pages/Factors";
import Register from "./Pages/Register";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Rankings">
          <Rankings />
          </Route>
          <Route path="/Factors">
            <Factors />
          </Route>
          <Route path ="/Register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
