import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader/Preloader"; // Adjusted path for consistency
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./Context/theme";
import {
  HashRouter as Router, // Changed BrowserRouter to HashRouter
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [{ themename }] = React.useContext(ThemeContext);

  useEffect(() => {
    // Set a timer to hide the preloader after 1200 milliseconds
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Apply the theme class and 'app' class to the main container
    <div className={`${themename} app`}>
      {/* Use HashRouter for robust routing on GitHub Pages */}
      <Router>
        {/* Preloader component, shown based on 'load' state */}
        <Preloader load={load} />
        {/* Main application container, applies 'no-scroll' or 'scroll' based on preloader state */}
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          {/* Navbar component */}
          <Navbar />
          {/* Component to scroll to top on route changes */}
          <ScrollToTop />
          {/* Define application routes */}
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            {/* Projects page route */}
            <Route path="/project" element={<Projects />} />
            {/* About page route */}
            <Route path="/about" element={<About />} />
            {/* Fallback route: redirects any unmatched path to the home page */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* Footer component */}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
