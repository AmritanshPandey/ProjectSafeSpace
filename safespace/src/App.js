import { useEffect } from "react";
import { gsap } from "gsap";
import Banner from "./components/banner";
import Blogs from "./components/blogs";
import Header from "./components/header";
import IntroOverlay from "./components/introOverlay";
import "./styles/App.scss";

function App() {

  useEffect(() => {

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);



      
    });
  }, []);
  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
     <Blogs /> 
    </div>
  );
}

export default App;
