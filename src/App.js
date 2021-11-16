import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";

import { makeStyles } from "@material-ui/core";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "#ffffff",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.App}>
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/coins/:id" component={CoinPage} />
      </div>
    </Router>
  );
}

export default App;
