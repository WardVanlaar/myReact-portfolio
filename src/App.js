import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
