import React , {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ProfileIconDropdownMenu from './profileIconDropdown';
import PartnerDropdownMenu from './partnerDropdown';
import Burger from '../hamburgerMenu/burger';
import Menu from '../hamburgerMenu/menu';
import Avatar from '@material-ui/core/Avatar';
import mhLogo from '../../constants/images/mh-logo.svg'
import ModalCloseHelper from '../sharedComponent/modalCloseHelper';
import "./navbar.css";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
}));

const Navbar = () => {

  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);
  const navbarRef = React.useRef(null);
  const closeNavbar = () => setNavbar(false);
  ModalCloseHelper(null, navbarRef, closeNavbar);

  return (
    <div className={`navbarContainer ${classes.grow}`}>
      <AppBar position="static">
        <Toolbar>
          <div ref={navbarRef}>
            <Burger open={navbar} setOpen={setNavbar} />
            {navbar && <Menu open={navbar} setOpen={setNavbar} />}
          </div>
          <Avatar variant="square" src={mhLogo} className={` ${classes.title} mh-logo`}></Avatar>
          <PartnerDropdownMenu/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications">
              <Badge badgeContent={17} >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <ProfileIconDropdownMenu/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
