import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import LoginPage from "views/LoginPage.jsx";

import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/authStyle.jsx";
import login from "assets/img/login.jpeg";

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + login + ")" }}
          >
            <Switch>
              <Route path={"/auth"} component={LoginPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
