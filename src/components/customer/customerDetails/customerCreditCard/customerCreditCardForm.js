import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { years, months } from '../../../../constants/dropdownConstant';

class  CustomerCreditCardForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Grid container spacing={3} className="customerInfoContainer">
                <Grid item xs={9} className="customerInfoHeader">
                    <h4>Edit Credit Card</h4>
                </Grid>
                <Grid item xs={3} className="customerInfoHeader customerAddressFormEdit">
                    <Checkbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon/>} label="Default Address" name="checkedH" />
                    <h4>Default Credit Card</h4>
                </Grid>
                <Grid item xs={6} className="customerAddressFormBox">
                    <label >Credit Card Number</label>
                    <TextField
                        variant="outlined"
                        placeholder="Enter Credit Card Number"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={6}  className="customerAddressFormBox ">
                    <label >Name On Card</label>
                    <TextField
                        variant="outlined"
                        placeholder="Enter Name"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={3}  className="customerAddressFormBox addressTypeDropdown">
                    <label >Expiry Month</label>
                    <Autocomplete
                        disableClearable
                        defaultValue={0}
                        clearOnBlur={false}
                        options={months.map((option) => option.title)}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Expiry Months"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search' }}
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                        )}
                    />
                </Grid>
                <Grid item xs={3}  className="customerAddressFormBox addressTypeDropdown">
                    <label>Expiry Year</label>
                    <Autocomplete
                        disableClearable
                        defaultValue={0}
                        clearOnBlur={false}
                        options={years.map((option) => option.title)}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Expiry Year"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search' }}
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
                <Grid item xs={12}  className="customerAddressFormBox customerCreditCardReferencezNote">
                    <label >Reference Notes</label>
                    <TextField
                        variant="outlined"
                        placeholder="Enter Reference Notes"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: false,
                          }}
                    />
                </Grid>
                <Grid item xs={12} className="customerAddressFormButton customerCrediCardFormButton">
                    <Grid item xs={6}  className="customerAddressFormBox cancelButton">
                        <Button variant="outlined" onClick={this.props.cancelEditAddress}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={6}  className="customerAddressFormBox saveButton">
                        <Button variant="contained" >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default CustomerCreditCardForm;