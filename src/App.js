import "./App.css";
import React, { useState } from "react";
import Items from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMain from "./components/NavBarMain";

function App() {
  return (
    <div className="App">
      <NavBarMain />
      <br />
      <Items itemID={0} />
      <Items itemID={1} />
      <Items itemID={2} />
      <Items itemID={3} />
      <Items itemID={4} />
      <Items itemID={5} />
    </div>
  );
}

export default App;
