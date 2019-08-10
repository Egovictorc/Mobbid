import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable'
import Cached from "@material-ui/icons/Cached";
import getLoading from './components/Loading'
// import Navbar from "./components/sections/Navbar";

// Use SASS for Styling instead of CSS
import './sass/main.scss';
// import Home from "./pages/homepage/Home";

// START HERE 
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
// import Works from "./pages/Works";
// import Customer from "./pages/Customer";
// import NotFound from "./pages/NotFound";

// import FormPage from "./pages/form/FormContainer";
// import FormPage from "./pages/form/FormContainer";
// import './css/style.css';

// STOP HERE



// START HERE FOR CODE SPLITTING


const LoadableHome = Loadable( {
  loader: ()=> import("./pages/homepage/Home"),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})

const LoadableAbout = Loadable({
  loader: ()=> import(`./pages/About`),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})
const LoadableContact = Loadable({
  loader: ()=> import(`./pages/Contact`),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})
const LoadableBlog = Loadable({
  loader: ()=> import(`./pages/Blog`),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})
const LoadableWorks = Loadable({
  loader: ()=> import(`./pages/Works`),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})
const LoadableNotFound = Loadable({
  loader: ()=> import(`./pages/NotFound`),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})
const LoadableCustomer = Loadable({
  loader: ()=> import(`./pages/Customer`),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})
const LoadableFormPage = Loadable({
  loader: ()=> import(`./pages/form/FormContainer`),
  loading: getLoading,
  delay: 300,
  timeout: 10000
})

// STOP HERE


const App = () => {

  // let routes = [
  //   {path: "/", component: Home},
  //   {path: "/pages/About/", component: About},
  //   {path: "/pages/Blog/", component: Blog},
  //   {path: "/pages/Contact/", component: Contact},
  //   {path: "/pages/Works/", component: Works},
  //   {path: "/pages/Customer/", component: Customer},
  //   {path: "/form/FormPage/", component: FormPage},
  // ]

  // useEffect( ()=> {
  //   Loadable.preloadReady()
  // }, [])
  return (
    <BrowserRouter>
      <div className="container">
        {/* FOR HTML HEAD META TAGS */}
      {/* <Helmet title="Mobbid" meta={ [ 
          {name: 'description', content: 'mobbid ng, mobbid app, mobbid ride'},
        {name: 'keywords', content: 'mobbid ng, mobbid ride, mobbid'},
        {name: 'author', content: 'Ego victor, Anelechi chiebuka' } ] } link={[
          {rel: 'preload', href: 'static/media/nunito-v10-latin-700.eot?#iefix', as: 'font'},
          {rel: 'preload', href: "static/media/nunito-v10-latin-regular.woff2", as: 'font', type: "font/woff2"},
          {rel: 'preload', href: "static/media/nunito-v10-latin-600.woff2", as: 'font', type: "font/woff2"},
          {rel: 'preload', href: "static/media/nunito-v10-latin-700.woff2", as: 'font', type: "font/woff2"}, */}
          {/* {rel: 'preload', href: './css/style.css', as: 'style'}, */}
        {/* ]} />  */}

        {/* <Helmet>
          <title>Title</title>
          <meta name="author" content="ego" />
          <meta name="description" content="ego" />
        </Helmet> */}

        {/* <ErrorBoundary>
        <Navbar />
        </ErrorBoundary> */}
        <Switch>
        <Route exact strict path="/" component={LoadableHome} />
        <Route exact strict path="/about/" component={LoadableAbout} />
        <Route exact strict path="/contact/" component={LoadableContact} />
        <Route exact strict path="/blog/" component={LoadableBlog} />
        <Route exact strict path="/works/" component={LoadableWorks} />
        <Route exact strict path="/customer/" component={LoadableCustomer} />
        <Route exact strict path="/formpage/" component={LoadableFormPage} />
        
          {/* {
            routes.map( route => <Route exact strict path={route.path} component={route.component} key={route.component} />
          )} */}

{/*       <Route exact strict path="/" component={Home} />
          
          <Route exact strict path="/pages/About/" component={About} />

          <Route exact strict path="/pages/blog/" component={Blog} />
          <Route exact strict path="/pages/contact/" component={Contact} /> */}
          
          <Route component={LoadableNotFound} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
