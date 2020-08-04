import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import FilterListIcon from '@material-ui/icons/FilterList';
import { IconButton } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import UserList from './userList';
import UserModalForm from './createUser/userModalForm';
import { userFilter, userRoleDropdown } from '../../constants/dropdownConstant';
import './user.css';

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userAdvanceFilter: false,
            userModalFormView: false
        }
    }

    handleAdvanceFilter = () => {
        this.setState({
            userAdvanceFilter: !this.state.userAdvanceFilter
        })
    }
    handleUserModalForm = () => {
        this.setState({
            userModalFormView: !this.state.userModalFormView
        });
    }
    userFilterTextField = () => {
        return userFilter.map(filter => {
            if (filter.id === "user-roles") {
                return (
                    <Autocomplete
                        key={filter.id}
                        className="orderFiltersAutoComplete"
                        disableClearable
                        defaultValue={0}
                        clearOnBlur={false}
                        options={userRoleDropdown.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="User Type"
                                margin="normal"
                                placeholder="User Type"
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
        })
    }

    render() {
        return (
            <>
                <UserModalForm modalView={this.state.userModalFormView} modalClose={this.handleUserModalForm} />
                <Grid container spacing={3}>
                    <Grid item xs={10} className="orderDashboard">
                        <h2>Users</h2>
                        <div className="orderListDropdown">
                            <h3>Showing All :</h3>
                            <Select
                                defaultValue=""
                                variant='standard'
                                id="order-status"
                                IconComponent={ExpandMoreIcon}
                                native
                            >
                                <option value={1}>Active Users</option>
                                <option value={2}>Inactive Users</option>
                            </Select>
                        </div>
                    </Grid>
                    <Grid item xs={2} className="orderDropdown customerDropdown">
                        <Button variant="outlined" onClick={this.handleUserModalForm}>
                            Add User
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="orderFilters">
                        {this.state.userAdvanceFilter ?
                            <div className="orderAdvanceFilters userAdvanceFilter">
                                {this.userFilterTextField()}
                                <CancelIcon className="cancelIcon" onClick={this.handleAdvanceFilter} />
                            </div>
                            :
                            <div className="orderFilterSearch">
                                <IconButton aria-label="menu" className="searchIcon">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase className="searchBar"
                                    placeholder="Search User"
                                />
                                <Divider orientation="vertical" />
                                <IconButton aria-label="directions" onClick={this.handleAdvanceFilter} className="filterOption">
                                    <FilterListIcon />
                                </IconButton>
                            </div>
                        }
                    </Grid>
                    <Grid item xs={12} className="orderHistoryTableContainer">
                        <UserList />
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default UserDashboard;