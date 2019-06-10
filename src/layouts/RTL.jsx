/*eslint-disable*/
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

import rtlStyle from "assets/jss/material-dashboard-pro-react/layouts/rtlStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo-white.svg";
import Loader from "../components/Loader/Loader";
import { Translation } from "react-i18next";

var ps;
const rtlLayout = "/rtl";
class RTL extends React.Component {
  state = {
    mobileOpen: false,
    miniActive: false,
    image: image,
    color: "blue",
    bgColor: "black",
    hasImage: true,
    rtlActive: true,
    fixedClasses: "dropdown"
  };
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleBgColorClick = bgColor => {
    this.setState({ bgColor: bgColor });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  sidebarMinimize() {
    this.setState({ miniActive: !this.state.miniActive });
  }
  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(rtlLayout + routes[i].path) !== -1) {
        return (
          <Translation>
            {(t, { i18n }) => <span>{t(routes[i].name)}</span>}
          </Translation>
        );
      }
    }
    return activeRoute;
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (rtlLayout === "/rtl") {
        return (
          <Route
            path={rtlLayout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive
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
            miniActive={this.state.miniActive}
            rtlActive={this.state.rtlActive}
            layout={rtlLayout}
            {...rest}
          />
          <div className={mainPanel} ref="mainPanel">
            <Suspense fallback={<Loader />}>
              <AdminNavbar
                rtlActive={this.state.rtlActive}
                sidebarMinimize={this.sidebarMinimize.bind(this)}
                miniActive={this.state.miniActive}
                handleDrawerToggle={this.handleDrawerToggle}
                brandText={this.getActiveRoute(routes)}
                {...rest}
              />
            </Suspense>
            <div className={classes.content}>
              <div className={classes.container}>{this.getRoutes(routes)}</div>
            </div>
            <Footer fluid rtlActive={this.state.rtlActive} />
          </div>
        </Suspense>
      </div>
    );
  }
}

RTL.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(rtlStyle)(RTL);
