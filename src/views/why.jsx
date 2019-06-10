import React, { Suspense } from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import accordionStyle from "assets/jss/material-dashboard-pro-react/components/accordionStyle.jsx";
import FormGroup from "@material-ui/core/FormGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Check";
import Checkbox from "@material-ui/core/Checkbox";
import { Translation } from "react-i18next";

const Loader = () => (
  <div>
    <div>loading...</div>
  </div>
);
class Typography extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      active: props.active
    };
    this.secondary = false;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      secondary: !state.secondary
    }));
  }
  handleChange = panel => (event, expanded) => {
    this.setState({
      active: expanded ? panel : -1
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card>
          <CardBody>
            <Suspense fallback={<Loader />}>
              <Checkbox
                checked={this.state.secondary}
                onClick={this.handleClick}
              />
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Translation>
                      {(t, { i18n }) => <span>{t("lorem")}</span>}
                    </Translation>
                  }
                  secondary={
                    this.state.secondary ? (
                      <Translation>
                        {(t, { i18n }) => (
                          <span>{t("loremText")}</span>
                        )}
                      </Translation>
                    ) : null
                  }
                />
              </ListItem>
             
            </Suspense>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Typography.propTypes = {
  classes: PropTypes.object.isRequired
  // index of the default active collapse
};

export default withStyles(accordionStyle)(Typography);

// const style = {
//   typo: {
//     paddingLeft: "25%",
//     marginBottom: "40px",
//     position: "relative"
//   },
//   note: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     bottom: "10px",
//     color: "#c0c1c2",
//     display: "block",
//     fontWeight: "400",
//     fontSize: "13px",
//     lineHeight: "13px",
//     left: "0",
//     marginLeft: "20px",
//     position: "absolute",
//     width: "260px"
//   }
// };
// function Typography({ ...props }) {
//   return (

//   );
// }

// Typography.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(style)(Typography);
