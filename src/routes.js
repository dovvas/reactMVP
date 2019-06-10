import Charts from "views/Charts.jsx";
import Dashboard from "views/Dashboard.jsx";
import FullScreenMap from "views/FullScreenMap.jsx";
import Icons from "views/Icons.jsx";
import SweetAlert from "views/SweetAlert.jsx";
import TimelinePage from "views/Timeline.jsx";
import ReactTables from "views/ReactTables.jsx";
import Typography from "views/Typography.jsx";
import LoginPage from "views/Typography.jsx";
import whatisit from "views/whatisit.jsx";
import why from "views/why.jsx";
import ValidationForms from "views/ValidationForms.jsx";

// @material-ui/icons
import iDashboardIcon from "@material-ui/icons/DashboardRounded";
import iTimeline from "@material-ui/icons/Timeline";
import iMapon from "@material-ui/icons/MapRounded";
import iNearMe from "@material-ui/icons/NearMeOutlined";
import iEuroSymbol from "@material-ui/icons/EuroSymbol";
import iInfo from "@material-ui/icons/InfoOutlined";

var dashRoutes = [
  {
    path: "/typography",
    name: "menu1",
    icon: iInfo,
    component: Typography
  },
  {
    path: "/validation-forms",
    name: "menu2",
    icon: iEuroSymbol,
    component: ValidationForms
  },
  {
    path: "/full-screen-maps",
    name: "menu3",
    icon: iNearMe,
    component: FullScreenMap
  },
  {
    path: "/charts",
    name: "menu4",
    icon: iTimeline,
    component: Charts
  },
  {
    path: "/timeline-page",
    name: "menu5",
    icon: iMapon,
    component: TimelinePage
  },
  {
    path: "/sweet-alert",
    name: "menu6",
    icon: iMapon,
    component: SweetAlert
  },
  {
    path: "/icons",
    name: "menu7",
    icon: iMapon,
    component: Icons
  },
  {
    path: "/dashboard",
    name: "menu8",
    icon: iDashboardIcon,
    component: Dashboard
  },
  {
    path: "/table",
    name: "Datatable",
    icon: iDashboardIcon,
    component: ReactTables
  },
  {
    path: "/whatisit",
    name: "whatisit",
    icon: iDashboardIcon,
    component: whatisit
  },
  {
    path: "/why",
    name: "why",
    icon: iDashboardIcon,
    component: why
  },
  {
    path: "/auth",
    name: "logout",
    icon: iDashboardIcon,
    component: LoginPage
  }
];
export default dashRoutes;
