import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { months } from '../../../constants/dropdownConstant';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';
import './createProductModalForm.css';

const ProductModalForm = (props) => {
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const showModal = props.modalView; 
    const closeModal = () => {
        if(showModal){
            props.modalClose();
        }
    }
    ModalCloseHelper(wrapperRef, modalRef, closeModal); 

    return(
        <div className="customerModalFormContainer" ref={wrapperRef} style={{display: showModal ? 'block' : 'none'}}>
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true"  className="customerInfoContainer productModalForm customerModalForm">
                <Grid item xs={11} className="customerModalHeader">
                    <h4>Add Product</h4>
                </Grid>
                <Grid item xs={1} className="customerModalHeader customerModalFormCancel">
                    <CloseIcon onClick={props.modalClose}/>
                </Grid>
                <Divider className="headerDivider"/>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader">
                    Identification
                </Grid>
                <Grid item xs={12} className="customerInfoEditForm productModalInfoForm">
                    <div className="customerAddressFormBox productModalFormBox ">
                        <label >Product Name</label>
                        <TextField
                            variant="outlined"
                            placeholder="Product Name"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox productModalFormBox">
                        <label >SKU</label>
                        <TextField
                            variant="outlined"
                            placeholder="SKU"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox productModalFormBox">
                        <label >Finished Goods ID</label>
                        <TextField
                            variant="outlined"
                            placeholder="Goods ID"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                </Grid>
                <Divider className="generalDivider"/>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader">
                    Inventory
                </Grid>
                <Grid item xs={12} className="customerInfoEditForm productInventoryEditForm">
                    <div> 
                        <div className="customerAddressFormBox productInventoryForm ">
                            <label >Product Qty Onhand</label>
                            <TextField
                                type="number"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: false,
                                }}
                                placeholder="Quantity"
                            />
                        </div>
                        <div className="customerAddressFormBox productInventoryForm ">
                            <label >Product Sig Default</label>
                            <TextField
                                id={`outlined-updated-date`}
                                type="text"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: false,
                                }}
                                placeholder="Product Sig"
                            />
                        </div>
                        <div className="customerAddressFormBox productInventoryForm ">
                            <label >Units Per Package</label>
                            <TextField
                                id={`outlined-updated-date`}
                                type="Number"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: false,
                                }}
                                placeholder="Units Per Package"
                            />
                        </div>
                        <div className="customerAddressFormBox  productInventoryForm">
                            <label >Product Self Life</label>
                            <div className="productSelfLife">
                                <TextField
                                    id={`outlined-updated-date`}
                                    type="Number"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    placeholder="Units Per Package"
                                />
                                <Autocomplete
                                    disableClearable
                                    defaultValue={0}
                                    clearOnBlur={false}
                                    options={months.map((option) => option.title)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Months"
                                        variant="outlined"
                                        InputProps={{ ...params.InputProps, type: 'search' }}
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                    />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="productFormCheckBox">
                        <div className="userModalFormCheckBox">
                            <Checkbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon />}  name="checkedH" />
                            <label>Sales As Packaged</label>
                        </div>
                        <div className="userModalFormCheckBox">
                            <Checkbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon />}  name="checkedH" />
                            <label>Out Of Stock</label>
                        </div>
                        <div className="userModalFormCheckBox">
                            <Checkbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon />}  name="checkedH" />
                            <label>Inventory Auto Qty</label>
                        </div>
                    </div>
                </Grid>
                <Divider className="generalDivider"/>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader">
                    Pricing
                </Grid>
                <Grid item xs={12} className="customerModalFormAddressSection">
                    <div className="customerAddressFormBox productInventoryForm ">
                        <label >Cost Per Unit</label>
                        <TextField
                            variant="outlined"
                            type="number"
                            placeholder="Cost Per Unit"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox productInventoryForm ">
                        <label >SRP Per Unit</label>
                        <TextField
                            variant="outlined"
                            type="number"
                            placeholder="SRP"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox productInventoryForm ">
                        <label >Minimum Price</label>
                        <TextField
                            variant="outlined"
                            type="number"
                            placeholder="Minimum Price"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox productInventoryForm ">
                        <label >Maximum Price</label>
                        <TextField
                            variant="outlined"
                            placeholder="Max Price"
                            type="number"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                </Grid>
                <div className="customerAddressFormButton customerModalFormButton productModalFormButton">
                    <Grid item xs={6}  className="customerAddressFormBox cancelButton">
                        <Button variant="outlined" onClick={props.modalClose}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={6}  className="customerAddressFormBox saveButton">
                        <Button variant="contained" >
                            Save
                        </Button>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default ProductModalForm;