import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import './orderDashboard.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import FilterListIcon from '@material-ui/icons/FilterList';
import { IconButton } from '@material-ui/core';
import FulfillOrderModalForm from '../fulfillment/fulfillOrder/fulfillOrderModalForm';
import { orderFilters, orderTypeDropdown } from '../../constants/dropdownConstant';
import OrderHistoryTable from './orderList';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as Service from '../../tempService/tempService';

class OrderDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            orderAdvanceFilter: false,
            fulfillModalShow: false,
            orderListData: [],
            fulfillingOrder: {}
        }
    }

    componentDidMount (){
        Service.getAllOrders().then((data) => {
            this.setState({
                orderListData: data.data.Response
            })
        })
            
    }

    handleFulfillModalShow = (orderId) => {
        if(orderId){
            Service.getOrderItems(orderId).then(data => {
                this.setState({
                    fulfillingOrder: {
                        orderId : orderId,
                        products: data.data.Response
                    }
                });
            });
        }
        this.setState({
            fulfillModalShow: !this.state.fulfillModalShow
        })
    }

    handleAdvanceFilter = () => {
        this.setState({
            orderAdvanceFilter: !this.state.orderAdvanceFilter
        })
    }
    orderFiltersTextField = () => {
        return orderFilters.map( filter => {
            if(filter.id === 'order-id-type'){
                return(
                    <Autocomplete
                        key={filter.id}
                        className="orderFiltersAutoComplete"
                        disableClearable
                        defaultValue={0}
                        clearOnBlur={false}
                        options={orderTypeDropdown.map((option) => option.title)}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Order Type"
                            margin="normal"
                            placeholder="Order Type"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        )}
                    />
                ) 
                        
            }
            return (
                <TextField
                    key={filter.name}
                    id={`outlined-${filter.name}`}
                    className={filter.id}
                    label={filter.name}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    placeholder={filter.subName}
                />
            )
        });
    }

    render(){

        return(
            <>
                {this.state.fulfillingOrder.products ? <FulfillOrderModalForm modalView={this.state.fulfillModalShow} order={this.state.fulfillingOrder} modalClose={this.handleFulfillModalShow}/> : ''}
                <Grid container spacing={3}>
                    <Grid item xs={10} className="orderListDropdown">
                        <h3>Showing All :</h3>
                        <Select  
                            defaultValue="" 
                            variant='standard' 
                            id="order-status"
                            IconComponent={ExpandMoreIcon}
                            native
                        >
                            <option value={1}>Pending Orders</option>
                            <option value={2}>Fulfilled Orders</option>
                            <option value={3}>Problem Orders</option>
                            <option value={4}>Processing Orders</option>
                        </Select>
                    </Grid>
                    <Grid item xs={2} className="orderDropdown customerDropdown">
                        <Button variant="outlined">
                            Create New Order
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="orderFilters">
                        { this.state.orderAdvanceFilter ? 
                            <div className="orderAdvanceFilters">
                                {this.orderFiltersTextField()}
                                <CancelIcon className="cancelIcon" onClick={this.handleAdvanceFilter}/>
                            </div>
                            :
                            <div className="orderFilterSearch">
                                <IconButton  aria-label="menu" className="searchIcon">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase className="searchBar"
                                    placeholder="Search Order"
                                />
                                <Divider  orientation="vertical" />
                                <IconButton  aria-label="directions" onClick={this.handleAdvanceFilter} className="filterOption">
                                    <FilterListIcon  />
                                </IconButton> 
                            </div>
                        }
                    </Grid>
                    <Grid item xs={12} className="orderHistoryTableContainer">
                        <OrderHistoryTable orderList={this.state.orderListData} fulfillOrder={this.handleFulfillModalShow}/>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default OrderDashboard;