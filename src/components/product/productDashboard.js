import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CancelIcon from '@material-ui/icons/Cancel';
import FilterListIcon from '@material-ui/icons/FilterList';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import ProductList from './productList';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CloseIcon from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';
import { productFilter, productColumn } from '../../constants/dropdownConstant';
import ProductModalForm from './createProduct/createProductModalForm';
import './productDashboard.css';

class ProductDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            advanceProductFilter: false,
            productModalForm: false,
            productColumnListView: false,
            productListAnchorEl: null,
            productColumnList: productColumn,
        }
        this.wrapperRef = React.createRef(null);
        this.eleRef = React.createRef(null);
    }

    handleProductColumnFilterView = (e) => {
        this.setState({
            productColumnListView: !this.state.productColumnListView,
            productListAnchorEl: this.state.productColumnListView ? null : e.currentTarget
        });
    }

    handleAdvanceFilter = () => {
        this.setState({
            advanceProductFilter: !this.state.advanceProductFilter
        });
    }

    handleModalShow = () => {
        this.setState({
            productModalForm: !this.state.productModalForm
        });
    }
    handleChangeProductListColumn = (object) => {
        let productColumnList = this.state.productColumnList;
        let newProductColumns = productColumnList.map(column => {
            if (column.name === object.name) {
                column.show = !object.show
            }
            return column;
        });
        this.setState({
            productColumnList: newProductColumns
        })
    }
    handleProductColumnFilter = () => {
        return this.state.productColumnList.map(column => {

            return (
                <div className="productColumnItem" key={column.id}>
                    <Checkbox checked={column.show} onChange={(e) => this.handleChangeProductListColumn(column)}
                        icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon />}
                        label={column.name} name="checkedH" />
                    <p>{column.name}</p>
                </div>
            )
        })
    }

    productFilterTextField = () => {
        return productFilter.map(filter => {
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
    setElementRef = (node) => {
        this.eleRef = node;
    }
    handleClose = (e) => {

        if (this.eleRef && !this.eleRef.contains(e.target)) {
            this.setState({
                productColumnListView: !this.state.productColumnListView,
                productListAnchorEl: null
            });
        }
    }

    render() {

        return (
            <>
                <ProductModalForm modalView={this.state.productModalForm} modalClose={this.handleModalShow} />
                <Grid container spacing={3}>
                    <Grid item xs={10} className="orderDashboard">
                        <h2>Products</h2>
                        <div className="orderListDropdown">
                            <h3>Showing All :</h3>
                            <Select
                                defaultValue=""
                                variant='standard'
                                id="order-status"
                                IconComponent={ExpandMoreIcon}
                                native
                            >
                                <option value={1}>Available Products</option>
                                <option value={2}>Unavailable Products</option>
                            </Select>
                        </div>
                    </Grid>
                    <Grid item xs={2} className="orderDropdown customerDropdown">
                        <Button variant="outlined" onClick={this.handleModalShow}>
                            Add Product
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="orderFilters productFilters">
                        {this.state.advanceProductFilter ?
                            <div className="orderAdvanceFilters">
                                {this.productFilterTextField()}
                                <CancelIcon onClick={this.handleAdvanceFilter} />
                            </div>
                            :
                            <div className="orderFilterSearch">
                                <IconButton aria-label="menu" className="searchIcon">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase className="searchBar"
                                    placeholder="Search Product"
                                />
                                <Divider orientation="vertical" />
                                <IconButton aria-label="directions" onClick={this.handleAdvanceFilter} className="filterOption">
                                    <FilterListIcon />
                                </IconButton>
                            </div>
                        }
                    </Grid>
                    <Grid item xs={12} className="productListColumnList">
                        <p onClick={this.handleProductColumnFilterView} aria-describedby='simple-popover'>Customise Columns</p>
                    </Grid>
                    <Grid item xs={12} className="orderHistoryTableContainer productTableContainer">
                        {this.state.productColumnListView &&
                            <Popover
                                ref={this.wrapperRef}
                                id='simple-popover'
                                open={this.state.productColumnListView}
                                anchorEl={this.state.productListAnchorEl}
                                onClose={this.state.handleProductColumnFilterView}
                                onClick={this.handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <div className="productColumnListContainer" ref={this.setElementRef}>
                                    <div className="productColumnListHeader">
                                        <Grid item xs={11} className="listOfColumnHeader">
                                            List Of Columns
                                        </Grid>
                                        <Grid item xs={1}>
                                            <CloseIcon onClick={this.handleProductColumnFilterView} />
                                        </Grid>
                                    </div>
                                    <div className="productColumnListCheckbox">
                                        {this.handleProductColumnFilter()}
                                    </div>
                                </div>
                            </Popover>
                        }
                        <ProductList productColumn={this.state.productColumnList} />
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default ProductDashboard;