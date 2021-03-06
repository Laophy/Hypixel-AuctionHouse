import "./App.css";
import React from "react";
import Items from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMain from "./components/NavBarMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuctionAll from "./components/AuctionAll";
import Login from "./components/Login";
import Bazzar from "./components/Bazzar";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NavBarMain />
            <Items itemID={0} />
            <Items itemID={1} />
            <Items itemID={2} />
            <Items itemID={3} />
          </Route>
          <Route path="/home">
            <NavBarMain />
            <Items itemID={0} />
            <Items itemID={1} />
            <Items itemID={2} />
            <Items itemID={3} />
          </Route>
          <Route path="/profile">
            <NavBarMain />
            <Profile />
          </Route>
          <Route path="/profiles">
            <NavBarMain />
            <Profile />
          </Route>
          <Route path="/login">
            <NavBarMain />
            <Login />
          </Route>
          <Route path="/bazzar">
            <NavBarMain />
            <Bazzar />
          </Route>
          <Route path="/bin-weapons">
            <NavBarMain />
            <p>View all buy it now weapons.</p>
            <br />
          </Route>
          <Route path="/bin-all">
            <NavBarMain />
            <AuctionAll />
          </Route>
          <Route path="/auction-all">
            <NavBarMain />
            <AuctionAll />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
