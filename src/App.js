import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Routes from "./routes";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Header />
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
