import React, { Suspense } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import routes from "routes.js";
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/adminStyle.jsx";
import image from "assets/img/wood.jpg";
import logo from "assets/img/logo-white.svg";
import { Translation } from "react-i18next";
import { connect } from "react-redux";
import Loader from "../components/Loader/Loader";

var ps;
const mainLayout = "/admin";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      image: image,
      color: "junoDarkColor",
      hasImage: true,
      fixedClasses: "dropdown",
      localStorageParam: true,
      rtlActive: false
    };

    if (localStorage.getItem("user") === null) {
      this.state.localStorageParam = false;
    }
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
    window.removeEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  getRoute() {
    return this.props.location.pathname !== "/full-screen-maps";
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }

      return (
        <Route
          path={mainLayout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    });
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getActiveRoute = routes => {
    //let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(mainLayout + routes[i].path) !== -1) {
        return (
          <Translation>
            {(t, { i18n }) => <span>{t(routes[i].name)}</span>}
          </Translation>
        );
      }
    }
    //return activeRoute;
  };
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div className={classes.wrapper}>
        <Suspense fallback={<Loader />}>
          <Sidebar
            routes={routes}
            logoText1={
              <Translation>
                {(t, { i18n }) => <span>{t("mainTitle")}</span>}
              </Translation>
            }
            logoText2={
              <Translation>
                {(t, { i18n }) => <span>{t("MainSubtitle")}</span>}
              </Translation>
            }
            logo={logo}
            image={this.state.image}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color={this.state.color}
            bgColor={this.state.bgColor}
            rtlActive={this.state.rtlActive}
            layout={mainLayout}
            {...rest}
          />
        </Suspense>
        <div className={mainPanel} ref="mainPanel">
          <Suspense fallback={<Loader />}>
            <AdminNavbar
              rtlActive={this.state.rtlActive}
              handleDrawerToggle={this.handleDrawerToggle}
              brandText={this.getActiveRoute(routes)}
              {...rest}
            />
          </Suspense>

          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>
                <Switch>{this.getRoutes(routes)}</Switch>
              </div>
            </div>
          ) : (
            <div className={classes.map}>
              <Switch>{this.getRoutes(routes)}OLAKLA</Switch>
            </div>
          )}
          <Suspense fallback={<Loader />}>
            <Footer fluid rtlActive={this.state.rtlActive} />
          </Suspense>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  console.log("loggedIn");
  console.log(loggedIn);
  return {
    loggedIn
  };
}

export default connect(mapStateToProps)(withStyles(appStyle)(Dashboard));
