import React, {useEffect} from 'react';
import Tab from '@material-ui/core/Tab';
import { CUSTOMER_DASHBOARD, ORDER_DASHBOARD, PRODUCT_DASHBOARD, USER_DASHBOARD, CUSTOMER_DETAILS } from '../../constants/routesConstant';
import { Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import CloseIcon from '@material-ui/icons/Close';
import { DashboardNav, DashboardNavSelected, 
      FulfillmentNav, FulfillmentNavSelected,
      CustomerNav, CustomerNavSelected,
      ProductNav, ProductNavSelected,
      UserNav, UserNavSelected } from '../../constants/images/sideNavIcon';
import { useLocation} from "react-router-dom";
import './menu.css';

const Menu = ({open, setOpen}) => {
  const [navSelected, setNavSelected] = React.useState(0);
  const location = useLocation();
  const [showNavbar, setShowNavbar] = React.useState(true);
  const handleNavChange = (e, value) => {
    setNavSelected(value);
  } 

  useEffect(() => {
    if(location.pathname === CUSTOMER_DETAILS ){
      setShowNavbar(false);
    }else{
      setShowNavbar(true);
    }
  }, [location]);

  

  return (
    <nav className={`${open ? 'hamburgerMenu' : " hamburgerMenu hamburgerMenuShortcut"} ${showNavbar ? '' : 'hideNavbar'}`}  style={{transform:  open ? 'translateX(0)' : 'translateX(0%)'}}>
      {
        open ?
        <div className="navbarHeader">
          <CloseIcon onClick={() => setOpen(!open)}/>
          <p>Fulfillment UI</p>
        </div> : ""
      }
      <Tabs
        orientation="vertical"
        value={navSelected}
        onChange={handleNavChange}
        className="sideNavTab"
      >
        <Tab label={open ? 'Dashboard' : ''} icon={navSelected === 0 ? DashboardNavSelected : DashboardNav} value={0} component={Link} to={ORDER_DASHBOARD} />
        <Tab label={open ? 'Fulfillment' : ''} icon={navSelected === 1 ? FulfillmentNavSelected : FulfillmentNav} value={1} component={Link} to={ORDER_DASHBOARD}  />
        <Tab label={open ? 'Customer' : ''} icon={navSelected === 2 ? CustomerNavSelected : CustomerNav} value={2} component={Link} to={CUSTOMER_DASHBOARD}/>
        <Tab label={open ? 'Product' : ''} icon={navSelected === 3 ? ProductNavSelected : ProductNav} value={3} component={Link} to={PRODUCT_DASHBOARD}/>
        <Tab label={open ? 'User' : ''} icon={navSelected === 4 ? UserNavSelected : UserNav} value={4} component={Link} to={USER_DASHBOARD}/>
      </Tabs>
    </nav>
  )
}
export default Menu;