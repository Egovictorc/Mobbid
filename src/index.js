import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './components/reducers/rootReducer';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

  //FROM HERE
//   const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))),
// reduxFirestore(fbConfig),
// reactReduxFirebase(fbConfig)
// )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
