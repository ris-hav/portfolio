import React from "react";
import Header from "./Header";
import Control from "./Control";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Port from "./Port";

export default function App() {
  return (
    <>
      <div className="main-content">
        <Header />
        <main>
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Control />
        <Port />
      </div>
    </>
  );
}
