import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Cart from "./pages/cart";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
