import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store, history } from "./_helpers";
import { PrivateRoute } from "components/PrivateRoute";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import RtlLayout from "layouts/RTL.jsx";

import "./i18n"; //trans

import "assets/scss/material-dashboard-pro-react.scss?v=1.5.0";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Redirect from="/" exact to="/auth" />
        <Route path="/auth" component={AuthLayout} />
        <PrivateRoute path="/admin" component={AdminLayout} />
        <PrivateRoute path="/rtl" component={RtlLayout} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
