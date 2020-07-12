import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { countries, addressType } from '../../../../constants/dropdownConstant';

class CustomerAddressForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    countryToFlag = (isoCode) => {
        return typeof String.fromCodePoint !== 'undefined'
            ? isoCode
                .toUpperCase()
                .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
            : isoCode;
    }

    render(){
        return (
            <Grid container spacing={3} className="customerInfoContainer">
                <Grid item xs={9} className="customerInfoHeader">
                    <h4>Edit Address</h4>
                </Grid>
                <Grid item xs={3} className="customerInfoHeader customerAddressFormEdit">
                    <Checkbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon/>} label="Default Address" name="checkedH" />
                    <h4>Default Address</h4>
                </Grid>
                <Grid item xs={6} className="customerAddressFormBox">
                    <label >First Name</label>
                    <TextField
                        variant="outlined"
                        placeholder="Enter First Name"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={6}  className="customerAddressFormBox">
                    <label >Last Name</label>
                    <TextField
                        variant="outlined"
                        placeholder="Enter Last Name"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={6}  className="customerAddressFormBox">
                    <label >Address1</label>
                    <TextField
                        variant="outlined"
                        placeholder="Enter Address1"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={6} className="customerAddressFormBox">
                    <label >Address2</label>
                    <TextField
                        variant="outlined"
                        placeholder="Enter Address2"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={3}  className="customerAddressFormBox">
                    <label >Country</label>
                    <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => option.label}
                        renderOption={(option) => (
                            <React.Fragment>
                                <span>{() => this.countryToFlag(option.code)}</span>
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
                </Grid>
                <Grid item xs={3}  className="customerAddressFormBox">
                    <label >State/Province</label>
                    <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => option.label}
                        renderOption={(option) => (
                            <React.Fragment>
                                <span>{() => this.countryToFlag(option.code)}</span>
                                {option.label} ({option.code}) +{option.phone}
                            </React.Fragment>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            placeholder="State"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={3}  className="customerAddressFormBox">
                    <label >City</label>
                    <TextField
                        variant="outlined"
                        placeholder="City"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={3}  className="customerAddressFormBox">
                    <label >Postal Code</label>
                    <TextField
                        variant="outlined"
                        placeholder="Postal Code"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={3}  className="customerAddressFormBox addressTypeDropdown">
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
                </Grid>
                <div className="customerAddressFormButton">
                    <Grid item xs={6}  className="customerAddressFormBox cancelButton">
                        <Button variant="outlined" >
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
        )
    }
}

export default CustomerAddressForm;