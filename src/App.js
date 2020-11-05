import React, { Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ToastContainer />
      <Switch>
        <Route
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route path="/" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default App;
