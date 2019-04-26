import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Footer from "./pages/sections/Footer";
import '../css/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          {/* <Route path="/" render={ () => <h1>my home page</h1>} /> */}

          <Route exact strict path="/" component={Home} />

          <Route exact strict path="/pages/About/" component={About} />

          <Route exact strict path="/pages/blog/" component={Blog} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
