import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skill/Skills";
import Work from "./components/Works/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
