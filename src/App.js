import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable'
import Cached from "@material-ui/icons/Cached";
// import Navbar from "./components/sections/Navbar";



import Home from "./pages/homepage/Home";

// START HERE 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import Customer from "./pages/Customer";
import NotFound from "./pages/NotFound";

// import FormPage from "./pages/form/FormContainer";
import FormPage from "./pages/form/FormContainer";
// import './css/style.css';

// STOP HERE

// Use SASS for Styling instead of CSS
import './sass/main.scss';

import ErrorBoundary from './components/ErrorBoundary';

// START HERE FOR CODE SPLITTING
// const Loading = (props)=> {
//   if(props.error){
//     return <div> Error loading page</div>
//   } else if(props.timedOut) {
//     return <div> connection timed out</div>
//   } else if (props.delayPass){
//     return <div> loading ...</div>
//   }else {
//     return <div>loading ... <Cached /></div>
//   }
// }

// // No need to delay importing the home/ Landing page
// // const Home = Loadable( {
// //   loader: ()=> import("./pages/homepage/Home"),
// //   loading: Loading,
// //   // delay: 5000
// // })

// const About = Loadable({
//   loader: ()=> import(`./pages/About`),
//   loading: Loading,
//   // delay: 5000
// })
// const Contact = Loadable({
//   loader: ()=> import(`./pages/Contact`),
//   loading: Loading,
//   // delay: 5000
// })
// const Blog = Loadable({
//   loader: ()=> import(`./pages/Blog`),
//   loading: Loading,
//   // delay: 5000
// })
// const Works = Loadable({
//   loader: ()=> import(`./pages/Works`),
//   loading: Loading,
//   // delay: 5000
// })
// const NotFound = Loadable({
//   loader: ()=> import(`./pages/NotFound`),
//   loading: Loading,
//   // delay: 5000
// })
// const Customer = Loadable({
//   loader: ()=> import(`./pages/Customer`),
//   loading: Loading,
//   // delay: 5000
// })
// const FormPage = Loadable({
//   loader: ()=> import(`./pages/form/FormContainer`),
//   loading: Loading,
//   // delay: 5000
// })

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
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/about/" component={About} />
        <Route exact strict path="/contact/" component={Contact} />
        <Route exact strict path="/blog/" component={Blog} />
        <Route exact strict path="/works/" component={Works} />
        <Route exact strict path="/customer/" component={Customer} />
        <Route exact strict path="/formpage/" component={FormPage} />
        
          {/* {
            routes.map( route => <Route exact strict path={route.path} component={route.component} key={route.component} />
          )} */}

{/*       <Route exact strict path="/" component={Home} />
          
          <Route exact strict path="/pages/About/" component={About} />

          <Route exact strict path="/pages/blog/" component={Blog} />
          <Route exact strict path="/pages/contact/" component={Contact} /> */}
          
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
