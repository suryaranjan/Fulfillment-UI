import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import CustomerList from './customerList';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';
import CustomerModalForm from './createCustomer/customerModalForm';
import { customerFilters } from '../../constants/dropdownConstant';
import './customerDashboard.css';


class CustomerDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            customerAdvanceFilter: false,
            customerModalFormView: false
        }
    }
    handleAdvanceFilter = () => {
        this.setState({
            customerAdvanceFilter: !this.state.customerAdvanceFilter
        });
    }
    handleCustomerModalForm = () => {
        this.setState({
            customerModalFormView: !this.state.customerModalFormView
        });
    }
    customerFiltersTextField = () => {  
        return customerFilters.map( filter => {
            return (
                <TextField
                    key={filter.name}
                    id={`outlined-${filter.name}`}
                    className={filter.name === "Email" ? 'emailFilter' : ''}
                    type={filter.name === "Date Of Birth" && "date"}
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
                <CustomerModalForm modalView={this.state.customerModalFormView} modalClose={this.handleCustomerModalForm}/>
                <Grid container spacing={3}>
                    <Grid item xs={10} className="orderListDropdown">
                        <h3>Showing All :</h3>
                        <Select 
                            autoWidth={true} 
                            defaultValue="" 
                            variant='standard' 
                            id="customer-status"
                            IconComponent={ExpandMoreIcon}
                            native={true}
                        >
                            <option value={1}>Active Customers</option>
                            <option value={2}>Inactive Customer</option>
                        </Select>
                    </Grid>
                    <Grid item xs={2} className="customerDropdown">
                        <Button variant="outlined" onClick={this.handleCustomerModalForm}>
                            Create Customer
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="orderFilters customerFilters">
                        { this.state.customerAdvanceFilter ? 
                            <div className="orderAdvanceFilters">
                                {this.customerFiltersTextField()}
                                <CancelIcon className="cancelIcon" onClick={this.handleAdvanceFilter}/>
                            </div>
                            :
                            <div className="orderFilterSearch">
                                <IconButton  aria-label="menu" className="searchIcon">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase className="searchBar"
                                    placeholder="Search Customer"
                                />
                                <Divider  orientation="vertical" />
                                <IconButton  aria-label="directions" onClick={this.handleAdvanceFilter} className="filterOption">
                                    <FilterListIcon  />
                                </IconButton> 
                            </div>
                        }
                    </Grid>
                    <Grid item xs={12} className="customerTableContainer">
                        <CustomerList/>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default CustomerDashboard;