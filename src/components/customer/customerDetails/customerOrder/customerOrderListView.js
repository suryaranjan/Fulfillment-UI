import React from 'react';
import Grid from '@material-ui/core/Grid';
import { customerOrderFilters, orderTypeDropdown } from '../../../../constants/dropdownConstant';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import CustomerOrderCardView from './customerOrderCardView';
import './customerOrderView.css';

const customerOrder = [
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    },
    {
        orderId: '12345342232232',
        orderDate: '07 Jan 2020',
        status: 'Pending',
        city: 'Houston',
        tracking: '64829475627283746538748927374',
        total: 578.24,
        quantity: 7
    }
]

const CustomerOrdeListView = (props) => {
    const [advanceOrderFilters, setAdvanceOrderFilters] = React.useState(false);
    
    const renderOrderList = () => {
        return customerOrder.map( (data, index) => {
            return <CustomerOrderCardView handleOrderModalView={props.handleOrderModalView} key={index} order={data}/>
        })
    }

    const handleAdvanceFilter = () => {
        setAdvanceOrderFilters(!advanceOrderFilters);
    }

    const renderOrderFilter = () => {
        return customerOrderFilters.map( filter => {
            return <TextField
                    key={filter.name}
                    id={`outlined-${filter.name}`}
                    className={filter.name === "Tracking#" ? 'emailFilter' : ''}
                    type={filter.name === "Date Of Birth" && "date"}
                    label={filter.name}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    placeholder={filter.subName}
                />
        })
    }
    return(
        <Grid container spacing={3} className="customerInfoContainer">
            <Grid item xs={12} className="customerInfoHeader">
                <h4>Orders</h4>
            </Grid>
            { !advanceOrderFilters ?
                 <Grid item xs={12} className="noteFilters">
                    <div className="orderFilterSearch">
                        <IconButton  aria-label="menu" className="searchIcon">
                            <SearchIcon />
                        </IconButton>
                        <InputBase className="searchBar"
                            placeholder="Search Order"
                        />
                        <IconButton  aria-label="directions" onClick={handleAdvanceFilter} className="filterOption">
                            <FilterListIcon  />
                        </IconButton> 
                    </div>
                 </Grid> :
                <Grid item xs={12} className="orderFilters customerOrderFilters">
                    {renderOrderFilter()}
                    <Autocomplete
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
                            placeholder="Select Order Type"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        )}
                    />
                    <CancelIcon className="cancelIcon" onClick={handleAdvanceFilter}/>
                 </Grid>
            }
            <Grid item xs={12} className="customerOrderList">
                {renderOrderList()}
            </Grid>
        </Grid>
    )
}

export default CustomerOrdeListView;