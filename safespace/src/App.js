import { useEffect } from "react";
import Banner from "./components/banner";
import Blogs from "./components/blogs";
import Header from "./components/header";
import "./styles/App.scss";

function App() {

  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh',  `${vh}px`);

    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Banner />
     <Blogs /> 
    </div>
  );
}

export default App;
