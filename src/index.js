import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './components/reducers/rootReducer';

import { getFirestore, reduxFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

//   FROM HERE
// const createStoreWithFirebase = compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),reduxFirestore(fbConfig),
// reactReduxFirebase(fbConfig))(createStore)
// // const createStoreWithFirebase = compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))),reduxFirestore(firebase, fbConfig))(createStore)

// const initState = {};

  // const store = createStoreWithFirebase (rootReducer, initState );
//    createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))),
// reduxFirestore(fbConfig),
// reactReduxFirebase(fbConfig)
// )
//   const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))),
// reduxFirestore(fbConfig),
// reactReduxFirebase(fbConfig)
// )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();