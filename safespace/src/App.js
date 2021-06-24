import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Route } from "react-router-dom";
// CSS
import "./styles/App.scss";

//components

import Header from "./components/header";
import Navigation from "./components/navigation";

//pages
import BlogList from "./pages/blogsList";
import About from "./pages/about";
import GetInTouch from "./pages/getIntouch";
import Home from "./pages/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/blogs", name: "Home", Component: BlogList },
  { path: "/about", name: "Home", Component: About },
  { path: "/getintouch", name: "Home", Component: GetInTouch },
];

//routes

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
