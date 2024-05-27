// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import EventPage from "./components/EventPage";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/event/:id" component={EventPage} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
