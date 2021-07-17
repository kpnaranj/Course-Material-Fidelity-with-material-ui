import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// Function ElevationScroll - helps the Render to move pages
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        {/* It starts to add elements with the bar */}
        <Toolbar>NarshDevLops</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
