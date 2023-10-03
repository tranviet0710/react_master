import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Breadcrumb from "./Breadcrumb";

function App() {
  return (
    <Router>
      <div className="App">
        <Breadcrumb />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
