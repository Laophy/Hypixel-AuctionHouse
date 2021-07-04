import "./App.css";
import React from "react";
import Items from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMain from "./components/NavBarMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuctionAll from './components/AuctionAll'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBarMain />
          <br />
        </Route>
        <Route path="/home">
          <NavBarMain />
          <br />
          <Items itemID={0} />
          <Items itemID={1} />
          <Items itemID={2} />
          <Items itemID={3} />
          <Items itemID={4} />
          <Items itemID={5} />
          <Items itemID={6} />
          <Items itemID={7} />
          <Items itemID={8} />
          <Items itemID={9} />
          <Items itemID={10} />
          <Items itemID={11} />
        </Route>
        <Route path="/profile">
          <NavBarMain />
          <p>View you personal profile when logged in.</p>
          <br />
        </Route>
        <Route path="/profiles">
          <NavBarMain />
          <p>Load other players profiles here.</p>
          <br />
        </Route>
        <Route path="/login">
          <NavBarMain />
          <p>Login via firebase Auth.</p>
          <br />
        </Route>
        <Route path="/bazzar">
          <NavBarMain />
          <p>View Bazzar prices and sort by profit.</p>
          <br />
        </Route>
        <Route path="/bin-weapons">
          <NavBarMain />
          <p>View all buy it now weapons.</p>
          <br />
        </Route>
        <Route path="/bin-all">
          <NavBarMain />
          <p>View all buy it now items.</p>
          <br />
        </Route>
        <Route path="/auction-all">
          <NavBarMain />
          <p>View all auction items.</p>
          <AuctionAll />
          <br />
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
