import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/home";
import Others from "./pages/others";
import Services from "./pages/services";
import theme from "./components/Theme";
import Button from "@material-ui/core/Button";
import Header from "./components/Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Created Browser routes for pages */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Others />
          </Route>
          <Route path="/customsoftware">
            <Services />
          </Route>
          <Route path="/mobileapps">
            <Others />
          </Route>
          <Route path="/websites">
            <Services />
          </Route>
          <Route path="/revolution">
            <Others />
          </Route>
          <Route path="/about">
            <Services />
          </Route>
          <Route path="/contact">
            <Others />
          </Route>
          <Route path="/estimate">
            <Services />
          </Route>
        </Switch>
      </Router>

      <Button variant="contained">Click me!</Button>
    </ThemeProvider>
  );
}
