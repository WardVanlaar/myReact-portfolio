import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import MyWork from "./components/Portfolio";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <MyWork></MyWork>
      </main>
    </div>
  );
}

export default App;
