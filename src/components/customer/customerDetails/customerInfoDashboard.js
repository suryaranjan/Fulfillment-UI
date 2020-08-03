import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import DescriptionIcon from '@material-ui/icons/Description';
import order from '../../../constants/images/orderLogo';
import CustomerInfo from './customerInfoDetails/customerInfo';
import CustomerAlertMessageBox from './customerInfoDetails/customerAlertMessageBox';
import CustomerOrdeListView from './customerOrder/customerOrderListView';
import CustomerNoteListView from './customerNotes/customerNoteListView';
import CustomerAddress from './customerAddress/customerAddress';
import CustomerCreditCard from './customerCreditCard/customerCreditCard';
import Button from '@material-ui/core/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateOrderModalForm from '../../order/createOrder/createOrderModalForm';
import OrderCompleteModal from '../../order/createOrder/orderCompleteModal';
import OrderDetailsModalView from '../../order/orderDetails/orderDetailsView';
import './customerInfoDashboard.css';

const customer = {
    firstName: 'Mazikeen',
    lastName: 'Smith',
    customerId: 128745,
    dob: '01/08/1980',
    email: 'itdept@mqrx.com',
    phone: '(310) 888 2222956'
}

class CustomerInfoDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabSelected: 0,
            orderAlertView: false,
            orderModalView: false,
            orderDetailsModalView: false,
            showOrderPlaced: false
        }
    }

    handleOrderPlacedModalView = () => {
        this.setState({
            orderModalView: false,
            orderDetailsModalView: !this.state.orderDetailsModalView
        })
    }

    handleOrderDetailsModalView = () => {
        this.setState({
            orderDetailsModalView: !this.state.orderDetailsModalView,
            showOrderPlaced: false,
            orderModalView: false
        })
    }

    handleTabChange = (event, newValue) => {
        this.setState({
            tabSelected: newValue,
        });
    }

    handleEditPayments = () => {
        this.setState({
            editPayment: true
        })
    }

   
    handleOrderAlertView = (value) => {
        this.setState({
            orderAlertView: value
        })
    }

    handleOrderModal = () => {
        this.setState({
            orderModalView: !this.state.orderModalView
        })
    }
    
    render(){
        return (
            <>
                {this.state.orderModalView ?
                    <CreateOrderModalForm 
                        modalView={this.state.orderModalView} 
                        modalClose={this.handleOrderModal} 
                        placeOrder={this.handleOrderPlacedModalView}/> : ''
                }
                {this.state.showOrderPlaced ?
                    <OrderCompleteModal completeText={"Order Placed"} 
                        modalView={this.state.showOrderPlaced}
                        modalClose={this.handleOrderPlacedModalView}/> : ''
                }
                {this.state.orderDetailsModalView ?
                    <OrderDetailsModalView 
                        modalView={this.state.orderDetailsModalView}
                        modalClose={this.handleOrderDetailsModalView}/> : ''
                }
                <Grid container spacing={3} className="customerInfoTagContainer">
                    <Grid item xs={9} className="customerInfoTag">
                        <FiberManualRecordIcon/>
                        <h4 className="customerHeadTag">
                            {customer.firstName}
                            {customer.lastName}
                            <span>&bull;</span>
                            {customer.customerId}
                            <span>&bull;</span>
                            {customer.dob}
                            <span>&bull;</span>
                            {customer.email}
                            <span>&bull;</span>
                            {customer.phone}
                        </h4>
                    </Grid> 
                    <Grid item xs={3} className="customerButtonNavigation">
                        
                        <Button variant="outlined" >
                            Create New Order
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="customerInfoBoardContainer">
                    <Grid item xs={1} className="customerTabNavabar">
                        <Tabs
                            orientation="vertical"
                            variant=""
                            value={this.state.tabSelected}
                            onChange={this.handleTabChange}
                            aria-label="Vertical tabs example"
                            className="customerDetailsTab"
                        >
                            <Tab value={0} label="CUSTOMER" icon={<PersonIcon/>} />
                            <Tab value={1} label="ADDRESS" icon={<LocationOnIcon/>} />
                            <Tab value={2} label="PAYMENTS" icon={<CreditCardIcon/>} />
                            <Tab value={3} label="ORDER" icon={order} />
                            <Tab value={4} className="lastLogo" label="NOTES" icon={<DescriptionIcon/>} />
                        </Tabs>
                    </Grid>
                    <div className="customerTabContent">
                        <div className={`customerDetailsInfo ${this.state.tabSelected === 3 ? 'customerOrderDetailsInfo': ''}`}>
                            
                            { this.state.tabSelected === 0 && <CustomerInfo/> }
                            
                            { this.state.tabSelected === 1 && <CustomerAddress/> }
                            
                            { this.state.tabSelected === 2 && <CustomerCreditCard/> }
                            
                            {this.state.tabSelected === 3 && <CustomerOrdeListView modalView={this.state.orderModalView} handleOrderModalView={this.handleOrderModal}/> }
                            
                            {this.state.tabSelected === 4 && <CustomerNoteListView/> }

                        </div>
                        <div className={`customerDetailsAlertNotes ${this.state.tabSelected === 3 && 'orderDashboardWithAlert'} ${this.state.orderAlertView ? 'customerOrderAlertView' : ''}`}>
                            <CustomerAlertMessageBox orderView={this.state.tabSelected === 3 ? true : false} setOrderAlertView={this.handleOrderAlertView}/>
                        </div>
                    </div>
                </Grid>
            </>
        
        )
    }
    
}

export default CustomerInfoDashboard;