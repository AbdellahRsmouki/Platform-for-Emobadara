// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.jsx";
import UserProfile from "./views/UserProfile/UserProfile.jsx";
//import TableList from "./views/TableList/TableList.jsx";
//import Icons from "./views/Icons/Icons.jsx";

const dashboardRoutes = [
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/kids",
    name: "kids",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
];

export default dashboardRoutes;
