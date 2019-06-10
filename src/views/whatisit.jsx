import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TypographyStyle from "assets/jss/material-dashboard-pro-react/components/typographyStyle.jsx";

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
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

class whatisit extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      active: props.active
    };
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
            <div className={classes.typo}>
             

            
            </div>
            <br />
            <div className={classes.typo}>
              <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla consectetur, aliquet nibh sed, porttitor turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie molestie imperdiet. Integer nisi nibh, varius ut semper eget, scelerisque sed purus. Nullam non cursus nisl" />
            </div>
            <h5>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla consectetur, aliquet nibh sed, porttitor turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie molestie imperdiet. Integer nisi nibh, varius ut semper eget, scelerisque sed purus. Nullam non cursus nisl
            </h5>

            <ExpansionPanel
              expanded={this.state.active === "panel1"}
              onChange={this.handleChange("panel1")}
              id="panel1"
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: classes.expansionPanelSummary,
                  expanded: classes.expansionPanelSummaryExpaned,
                  expandIcon: classes.expansionPanelSummaryExpandIcon
                }}
              >
                <h4 className={classes.title}>Lorem Ipsum</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla consectetur, aliquet nibh sed, porttitor turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie molestie imperdiet. Integer nisi nibh, varius ut semper eget, scelerisque sed purus. Nullam non cursus nisl
                  <br />
                  Nullam dapibus blandit tortor sit amet condimentum. Donec finibus eu sem at convallis. Nam condimentum mi et quam viverra bibendum. Nullam varius elementum quam a faucibus. In vitae facilisis augue, sed posuere erat. Mauris pharetra neque vulputate nunc tristique hendrerit. In et mauris vel metus tristique ullamcorper quis eu purus. Vestibulum libero justo, dapibus eleifend ex in, rhoncus pellentesque nunc.
                </p>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={this.state.active === "panel2"}
              onChange={this.handleChange("panel2")}
              id="panel2"
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: classes.expansionPanelSummary,
                  expanded: classes.expansionPanelSummaryExpaned,
                  expandIcon: classes.expansionPanelSummaryExpandIcon
                }}
              >
                <h4 className={classes.title}>Lorem Ipsum2</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla consectetur, aliquet nibh sed, porttitor turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie molestie imperdiet. Integer nisi nibh, varius ut semper eget, scelerisque sed purus. Nullam non cursus nisl. Nullam dapibus blandit tortor sit amet condimentum. Donec finibus eu sem at convallis. Nam condimentum mi et quam viverra bibendum. Nullam varius elementum quam a faucibus. In vitae facilisis augue, sed posuere erat. Mauris pharetra neque vulputate nunc tristique hendrerit. In et mauris vel metus tristique ullamcorper quis eu purus. Vestibulum libero justo, dapibus eleifend ex in, rhoncus pellentesque nunc.
                </p>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={this.state.active === "panel3"}
              onChange={this.handleChange("panel3")}
              id="panel3"
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: classes.expansionPanelSummary,
                  expanded: classes.expansionPanelSummaryExpaned,
                  expandIcon: classes.expansionPanelSummaryExpandIcon
                }}
              >
                <h4 className={classes.title}>Lorem Ipsum3</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla consectetur, aliquet nibh sed, porttitor turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie molestie imperdiet. Integer nisi nibh, varius ut semper eget, scelerisque sed purus. Nullam non cursus nisl. Nullam dapibus blandit tortor sit amet condimentum. Donec finibus eu sem at convallis. Nam condimentum mi et quam viverra bibendum. Nullam varius elementum quam a faucibus. In vitae facilisis augue, sed posuere erat. Mauris pharetra neque vulputate nunc tristique hendrerit. In et mauris vel metus tristique ullamcorper quis eu purus. Vestibulum libero justo, dapibus eleifend ex in, rhoncus pellentesque nunc.
                </p>
                <p />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <h5>
             Suspendisse potenti. Nunc luctus, lectus eget tempor rhoncus, ante mauris interdum leo, id facilisis magna orci vel metus. Nunc euismod imperdiet libero in venenatis. Duis gravida, est sed imperdiet pharetra, ligula dui gravida tortor, nec euismod ipsum nunc in leo. Donec varius orci in mollis ultricies. Aliquam accumsan, eros in scelerisque tincidunt, magna urna volutpat nunc, non mattis metus nisi quis augue. Nam vel turpis nec tellus consectetur sollicitudin. Nunc elit turpis, cursus et pretium a, tempus vitae elit. Maecenas aliquam, leo eu feugiat facilisis, elit magna cursus diam, sed pellentesque sapien erat non quam. Duis ultrices sed mi eget molestie. Cras pharetra turpis sed pulvinar iaculis. Vestibulum molestie, nisi nec placerat fringilla, elit odio ullamcorper ligula, non malesuada nibh justo ac libero. Proin dignissim metus nisi, porta convallis orci semper vitae. Sed elementum sapien libero, vitae consequat velit mollis id. Proin laoreet ut orci sed pulvinar.
            </h5>
          </CardBody>
        </Card>
      </div>
    );
  }
}

whatisit.propTypes = {
  classes: PropTypes.object.isRequired
  // index of the default active collapse
};

export default withStyles(TypographyStyle)(whatisit);

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
// function whatisit({ ...props }) {
//   return (

//   );
// }

// whatisit.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(style)(whatisit);
