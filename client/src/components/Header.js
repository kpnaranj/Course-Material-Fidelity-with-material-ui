import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// External function of styles
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": { backgroundColor: "transparent" },
  },
  tabContainer: {
    // Auto sets margin to elements between image and element and move to right
    marginLeft: "auto",
  },
  tab: {
    // We can customize elements in main
    // And import them here with actions
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "25px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

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

// Function Menu Options - Allows to use multiple elements from the list without repeating code
const menuOptions = [
  { name: "Services", link: "/services" },
  { name: "Custom Software", link: "/customsoftware" },
  { name: "Mobile Apps", link: "/mobileapps" },
  { name: "Website Development", link: "/websites" },
];
// Header display of elements
export default function Header(props) {
  // JSS classes setup
  const classes = useStyles();
  // UseState elements setup
  const [link, setLink] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // UseEffect elements setup
  useEffect(() => {
    if (window.location.pathname === "/" && link !== "0") {
      setLink(0);
    } else if (window.location.pathname === "/services" && link !== "1") {
      setLink(1);
    } else if (window.location.pathname === "/revolution" && link !== "2") {
      setLink(2);
    } else if (window.location.pathname === "/about" && link !== "3") {
      setLink(3);
    } else if (window.location.pathname === "/contact" && link !== "4") {
      setLink(4);
    } else if (window.location.pathname === "/estimate" && link !== "5") {
      setLink(5);
    }

    switch (window.location.pathname) {
      case "/":
        if (link !== "0") {
          setLink(0);
        }
        break;

      case "/services":
        if (link !== "1") {
          setLink(1);
          setSelectedIndex(0);
        }
        break;

      case "/customSoftware":
        if (link !== "1") {
          setLink(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (link !== "1") {
          setLink(1);
          setSelectedIndex(2);
        }
        break;

      case "/websites":
        if (link !== "1") {
          setLink(1);
          setSelectedIndex(3);
        }
        break;

      case "/revolution":
        if (link !== "2") {
          setLink(2);
        }
        break;
      case "/about":
        if (link !== "3") {
          setLink(3);
        }
        break;

      case "/contact":
        if (link !== "4") {
          setLink(4);
        }
        break;
      case "/estimate":
        if (link !== "5") {
          setLink(5);
        }
        break;

      default:
        break;
    }
  }, [link]);
  // Handle Menu Click - Allows the elements to select elements
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  // Handle Close - Close Menu and Anchor elements
  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  // Handle Navbar Change - Changes elements of links
  const handleNavbarChange = (event, link) => {
    setLink(link);
  };
  // Handle Menu Item link - Control of multiple elements in the list
  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };
  // Send HTML Render
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          {/* It starts to add elements with the bar */}
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => {
                setLink(0);
              }}
              disableRipple
            >
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>

            <Tabs
              className={classes.tabContainer}
              value={link}
              onChange={handleNavbarChange}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => handleMenuClick(event)}
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              className={classes.button}
              component={Link}
              to="/estimate"
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, index);
                    setLink(1);
                    handleClose();
                  }}
                  // If index is set it is true
                  selected={index === selectedIndex && link === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
