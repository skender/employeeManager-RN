import React, { Component } from "react";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers/index";
import firebase from "firebase";
import Router from "./src/Router";

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAeELgS43VC_cCcvDUYh8I7lOL69YNmv98",
      authDomain: "manager-1e836.firebaseapp.com",
      databaseURL: "https://manager-1e836.firebaseio.com",
      projectId: "manager-1e836",
      storageBucket: "manager-1e836.appspot.com",
      messagingSenderId: "235700069266"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
