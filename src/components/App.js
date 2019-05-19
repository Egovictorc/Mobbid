import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./pages/homepage/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import Customer from "./pages/Customer";
import NotFound from "./pages/NotFound";
import Footer from "./sections/Footer";
import '../css/style.css';
import FormPage from "./pages/form/FormContainer";


const App = () => {

  let routes = [
    {path: "/", component: Home},
    {path: "/pages/About/", component: About},
    {path: "/pages/Blog/", component: Blog},
    {path: "/pages/Contact/", component: Contact},
    {path: "/pages/Works/", component: Works},
    {path: "/pages/Customer/", component: Customer},
    {path: "/form/FormPage/", component: FormPage},
  ]

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>

          {
            routes.map( route => <Route exact strict path={route.path} component={route.component} key={route.component} />
          )}
{/*       <Route exact strict path="/" component={Home} />
          
          <Route exact strict path="/pages/About/" component={About} />

          <Route exact strict path="/pages/blog/" component={Blog} />
          <Route exact strict path="/pages/contact/" component={Contact} /> */}
          
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
