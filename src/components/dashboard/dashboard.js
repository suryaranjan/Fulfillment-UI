import React from 'react';
import Navbar from '../navbar/navbar';
import CustomerDashboard from '../customer/customerDashboard';
import OrderDashboardContainer from '../../containers/orderDashboardContainer'; 
import Container from '@material-ui/core/Container';
import { CUSTOMER_DASHBOARD, ORDER_DASHBOARD, FULFILLMENT_DASHBOARD, 
     CUSTOMER_DETAILS, PRODUCT_DASHBOARD, USER_DASHBOARD } from '../../constants/routesConstant';
import {Switch,  Route } from "react-router-dom";
import Footer from '../Footer/footer'
import CustomerInfoDashboard from '../customer/customerDetails/customerInfoDashboard';
import ProductDashboard from '../product/productDashboard';
import UserDashboard from '../user/userDashboard';
import Menu from '../hamburgerMenu/menu';
import './dashboard.css';

class Dashbaord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navbar: false
        }
    }
    hanldeNavbar = () => {
        this.setState({
            navbar: !this.state.navbar
        })
    }
    render(){

        return(
            <div>
                <Navbar/>
                <div className="dashboardBox">
                    <Menu open={this.state.navbar} setOpen={this.hanldeNavbar} />
                    <Container maxWidth="xl"  className="dashboardContainer" >
                        <Switch>
                            {/* Order Dashboard */}
                            <Route exact  path={ORDER_DASHBOARD} component={OrderDashboardContainer} />

                            {/* Fulfillment Dashboard */}
                            <Route exact  path={FULFILLMENT_DASHBOARD} component={OrderDashboardContainer} />

                            {/* Customer Dashbaord */}
                            <Route exact  path={CUSTOMER_DASHBOARD} component={CustomerDashboard}/>
                            <Route path={CUSTOMER_DETAILS} component={CustomerInfoDashboard} />
                            
                            {/* Product Dashboard */}
                            <Route exact  path={PRODUCT_DASHBOARD} component={ProductDashboard}/>
                            
                            {/* User Dashboard */}
                            <Route exact  path={USER_DASHBOARD} component={UserDashboard}/>

                        </Switch>
                    </Container>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Dashbaord;