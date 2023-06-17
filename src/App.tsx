import React from "react";
import "./App.css";
import { Home } from "./pages/home";
import { Nav } from "./pages/home/header";

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
    </div>
  );
}

export default App;
