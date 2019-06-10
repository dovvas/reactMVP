import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { alertActions } from "../_actions";
import { history } from "../_helpers";
import CircularProgress from "@material-ui/core/CircularProgress";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import { connect } from "react-redux";
import { userActions } from "../_actions";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      // login form
      loginEmail: "",
      loginEmailState: "",
      loginPassword: "",
      loginPasswordState: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.dispatch(userActions.logout);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      //clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.loginEmail && this.state.loginPassword) {
      this.props.dispatch(
        userActions.login(this.state.loginEmail, this.state.loginPassword)
      );
    }
  }
  change(event, stateName, type) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "password":
        if (this.verifyLength(event.target.value, 1)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    switch (type) {
      case "checkbox":
        this.setState({ [stateName]: event.target.checked });
        break;
      default:
        this.setState({ [stateName]: event.target.value });
        break;
    }
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  render() {
    const { classes } = this.props;
    const { loggedIn } = this.props;
    const { logginIn } = this.props;
    const { alert } = this.props;
    console.log("logginIn");
    console.log(logginIn);

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form onSubmit={this.handleSubmit}>
              <Card login className={classes[this.state.cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>Log in</h4>
                  <div>
                    {!loggedIn && (
                      <div className={`alert ${alert.type}`}>
                        {alert.message}
                      </div>
                    )}
                    {logginIn && <CircularProgress />}
                  </div>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    success={this.state.loginEmailState === "success"}
                    error={this.state.loginEmailState === "error"}
                    labelText="Email Address *"
                    id="loginemail"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event =>
                        this.change(event, "loginEmail", "email"),
                      type: "email"
                    }}
                  />
                  <CustomInput
                    success={this.state.loginPasswordState === "success"}
                    error={this.state.loginPasswordState === "error"}
                    labelText="Password *"
                    id="loginpassword"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event =>
                        this.change(event, "loginPassword", "password"),
                      type: "password"
                    }}
                  />
                  <div className={classes.formCategory}>
                    <small>*</small> Required fields
                  </div>
                </CardBody>
                {this.state.loginEmail === "" ||
                this.state.loginPassword === "" ? (
                  ""
                ) : (
                  <CardFooter className={classes.justifyContentCenter}>
                    <div className={classes.center}>
                      <Button
                        color="rose"
                        onClick={this.loginClick}
                        type="submit"
                      >
                        Login
                      </Button>
                    </div>
                  </CardFooter>
                )}
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  const { logginIn } = state.authentication;
  const { alert } = state;
  const { dispatch } = state;
  return {
    dispatch,
    loggedIn,
    logginIn,
    alert
  };
}
export default connect(mapStateToProps)(withStyles(loginPageStyle)(LoginPage));
