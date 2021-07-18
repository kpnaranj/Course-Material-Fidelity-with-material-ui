// Public libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Private libraries
import logo from "../assets/logo.svg";
// Material UI Frontend elements
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";
// External function of styles
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
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
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // UseState elements setup
  const [link, setLink] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
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
  // Destructure elements - tabs
  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={link}
        onChange={handleNavbarChange}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
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
    </React.Fragment>
  );
  // Destructure elements - drawer
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        Example drawer
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
