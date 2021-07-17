import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";
import Button from "@material-ui/core/Button";
import Header from "./components/Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Button variant="contained">Click me!</Button>
    </ThemeProvider>
  );
}
