import { useEffect } from "react";
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

function App() {



  
  useEffect(() => {
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });
  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
