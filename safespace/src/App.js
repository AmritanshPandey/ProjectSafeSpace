import { useEffect } from "react";
import { gsap } from "gsap";
import Header from "./components/header";
import Home from "./pages/home";
import "./styles/App.scss";

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
      <Home />
    </>
  );
}

export default App;
