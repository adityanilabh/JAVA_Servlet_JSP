import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Pageone/About";
import Contact from "./Pageone/Contact";
import Menu from "./Pageone/Menu";
export default function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      {/*<About />
      <Contact />*/}
    </>
  );
}
