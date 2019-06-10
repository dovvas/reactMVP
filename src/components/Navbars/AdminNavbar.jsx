import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import { history } from "../../_helpers";

// material-ui icons
import Menu from "@material-ui/icons/Menu";
import { useTranslation, Translation } from "react-i18next";
import Button from "components/CustomButtons/Button.jsx";
import adminNavbarStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

function AdminNavbar({ ...props }) {
  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    if (lng === "gr") {
      history.push("/rtl");
    } else {
      history.push("/admin");
    }
  };
  const { classes, color, brandText } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {i18n.language === "en" ? (
            <Button color="wood" size="sm" onClick={() => changeLanguage("gr")}>
              <Translation>
                {(t, { i18n }) => <span>{t("lang_GR")}</span>}
              </Translation>
            </Button>
          ) : (
            <Button color="wood" size="sm" onClick={() => changeLanguage("en")}>
              <Translation>
                {(t, { i18n }) => <span>{t("lang_EN")}</span>}
              </Translation>
            </Button>
          )}
        </div>
        <GridContainer justify="center" style={{ textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={6}>
            <Hidden mdUp implementation="css">
              <Button href="#" className={classes.title} color="transparent">
                {brandText}
              </Button>
            </Hidden>
          </GridItem>
        </GridContainer>

        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AdminNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "wood"
  ]),
  brandText: PropTypes.object
};

export default withStyles(adminNavbarStyle)(AdminNavbar);
