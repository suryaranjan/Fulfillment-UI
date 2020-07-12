import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { salutations, gender, countries, addressType } from '../../../constants/dropdownConstant';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';
import './customerModalForm.css';

const CustomerModalForm = (props) => {
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const showModal = props.modalView; 
    const closeModal = () => {
        if(showModal){
            props.modalClose();
        }
    }
    ModalCloseHelper(wrapperRef, modalRef, closeModal); 

    const countryToFlag = (isoCode) => {
        return typeof String.fromCodePoint !== 'undefined'
            ? isoCode
                .toUpperCase()
                .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
            : isoCode;
    }

    return(
        <div className="customerModalFormContainer" ref={wrapperRef} style={{display: showModal ? 'block' : 'none'}}>
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true"  className="customerInfoContainer customerModalForm">
                <Grid item xs={11} className="customerModalHeader">
                    <h4>Add Customer</h4>
                </Grid>
                <Grid item xs={1} className="customerModalHeader customerModalFormCancel">
                    <CloseIcon onClick={props.modalClose}/>
                </Grid>
                <Divider className="headerDivider"/>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader">
                    Identification
                </Grid>
                <Grid item xs={12} className="customerInfoEditForm">
                    <div className="customerAddressFormBox customerModalFormBox salutation">
                        <label >Salutation</label>
                        <Autocomplete
                            disableClearable
                            defaultValue={0}
                            clearOnBlur={false}
                            closeIcon={<></>}
                            options={salutations.map((option) => option.title)}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="Mr."
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox">
                        <label >First Name</label>
                        <TextField
                            variant="outlined"
                            placeholder="First Name"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox">
                        <label >Middle Name</label>
                        <TextField
                            variant="outlined"
                            placeholder="Middle Name"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox">
                        <label >Last Name</label>
                        <TextField
                            variant="outlined"
                            placeholder="Last Name"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox suffix customerModalFormBox">
                        <label >Suffix</label>
                        <Autocomplete
                            disableClearable
                            defaultValue={0}
                            clearOnBlur={false}
                            closeIcon={<></>}
                            options={salutations.map((option) => option.title)}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="Suffix"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox gender">
                        <label >Gender</label>
                        <Autocomplete
                            disableClearable
                            defaultValue={0}
                            clearOnBlur={false}
                            closeIcon={<></>}
                            options={gender.map((option) => option.title)}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="Gender"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox">
                        <label >Date Of Birth</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="date"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                </Grid>
                <Divider className="generalDivider"/>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader">
                    Address
                </Grid>
                <Grid item xs={12} className="customerInfoEditForm">
                    <div className="customerAddressFormBox customerModalFormBox customerFormAddress1">
                        <label >Address 1</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Address 1"
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox customerFormAddress1">
                        <label >Address 2</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Address 2"
                        />
                    </div>
                    <div className="customerAddressFormBox country customerModalFormBox">
                        <label >Country</label>
                        <Autocomplete
                            options={countries}
                            getOptionLabel={(option) => option.label}
                            renderOption={(option) => (
                                <React.Fragment>
                                    <span>{() => countryToFlag(option.code)}</span>
                                    {option.label} ({option.code}) +{option.phone}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                placeholder="Country"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: false,
                                }}
                                />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox country customerModalFormBox">
                        <label >State/Province</label>
                        <Autocomplete
                            options={countries}
                            getOptionLabel={(option) => option.label}
                            renderOption={(option) => (
                                <React.Fragment>
                                    <span>{() => countryToFlag(option.code)}</span>
                                    {option.label} ({option.code}) +{option.phone}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                placeholder="State/Province"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: false,
                                }}
                                />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox">
                        <label >Postal Code</label>
                        <TextField
                            variant="outlined"
                            placeholder="Postal Code"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                </Grid>
                <Grid item xs={6} className="customerModalFormAddressSection">
                    <div className="customerAddressFormBox customerModalFormBox city">
                        <label >City</label>
                        <TextField
                            variant="outlined"
                            placeholder="City"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox city addressTypeDropdown">
                        <label >Address Type</label>
                        <Autocomplete
                            disableClearable
                            defaultValue={0}
                            clearOnBlur={false}
                            options={addressType.map((option) => option.title)}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Address Type"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                </Grid>
                <Divider className="generalDivider"/>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader">
                    Contact
                </Grid>
                <Grid item xs={8} className="customerInfoEditForm contactForm">
                    <div className="customerAddressFormBox customerModalFormBox customerFormAddress1">
                        <label >Email Address</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox customerFormAddress1">
                        <label >Phone Number</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox phoneType ">
                        <label >Phone Type</label>
                        <Autocomplete
                            disableClearable
                            defaultValue={0}
                            clearOnBlur={false}
                            options={addressType.map((option) => option.title)}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Phone Type"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                </Grid>
                <div className="customerAddressFormButton customerModalFormButton">
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

export default CustomerModalForm;