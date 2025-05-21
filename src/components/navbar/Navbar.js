import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ThemeContext } from "../../Context/theme";

import Container from "react-bootstrap/Container";
import logoLight from "../../Assets/logoLight.png";
import logoDark from "../../Assets/logoDark.png";

import { Link } from "react-router-dom"; // Make sure Link is imported
import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [{ themename, toggeltheme }] = useContext(ThemeContext);

  // Handler for scroll event to change navbar color
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Effect to apply dark mode class to body and toggle switch
  useEffect(() => {
    const body = document.body;
    // Query for the toggle-inner element directly, as it might not be immediately available on mount
    const toggle = document.querySelector(".toggle-inner");
    if (themename === "dark") {
      body.classList.add("dark-mode");
      if (toggle) { // Check if toggle exists before adding class
        toggle.classList.add("toggle-active");
      }
    } else {
      body.classList.remove("dark-mode");
      if (toggle) { // Check if toggle exists before removing class
        toggle.classList.remove("toggle-active");
      }
    }
  }, [themename]); // Re-run when themename changes

  // Add scroll event listener when component mounts
  // Remove event listener when component unmounts to prevent memory leaks
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []); // Empty dependency array ensures this runs only once on mount/unmount

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Changed Navbar.Brand to use 'as={Link}' and 'to="/"' */}
        {/* This ensures react-router-dom handles the navigation, respecting HashRouter */}
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img
            src={themename === "light" ? logoDark : logoLight}
            className="img-fluid logo"
            alt="brand"
            style={{width: "48", height: "40"}} // Inline style for width/height
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav.Item>
            <div className="theme-switch">
              <div id="toggle" onClick={toggeltheme}>
                <div className="toggle-inner" />
              </div>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
