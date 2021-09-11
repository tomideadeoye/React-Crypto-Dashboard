import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import HomeScreen from "./screens/HomeScreen";
import CurrencyScreen from "./screens/CurrencyScreen";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/HomeScreen/" exact component={HomeScreen} />
      <Route path="/CurrencyScreen/" exact component={CurrencyScreen} />
    </Router>
  );
}

export default App;
