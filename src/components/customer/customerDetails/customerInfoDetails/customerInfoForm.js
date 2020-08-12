import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { salutations, gender } from '../../../../constants/dropdownConstant';
import './customerInfoForm.css';

class CustomerInfoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Grid container spacing={3} className="customerInfoContainer customerInfoEditContainer">
                <Grid item xs={9} className="customerInfoHeader">
                    <h4>Edit Customer Information</h4>
                </Grid>
                <Grid item xs={3} className="customerInfoHeader customerAddressFormEdit">
                    <Checkbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon className="checkedIcon"/>} label="Default Address" name="checkedH" />
                    <h4>Active Customer</h4>
                </Grid>
                <Grid item xs={12} className="customerInfoEditForm">
                    <div className="customerAddressFormBox salutation">
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
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox">
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
                    <div className="customerAddressFormBox">
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
                    <div className="customerAddressFormBox">
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
                </Grid>
                <Grid item xs={12} className="customerInfoEditForm">
                    <div className="customerAddressFormBox salutation">
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
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox">
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
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                    <div className="customerAddressFormBox">
                        <label >Date Of Birth</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="date"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Enter Updated Date"
                        />
                    </div>
                    <div className="customerAddressFormBox">
                        <label >Account Manager</label>
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
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                            )}
                        />
                    </div>
                </Grid>
                <Divider/>
                <Grid item xs={12} className="customerInfoEditForm">
                    <div className="customerAddressFormBox customerAllergiesBox">
                        <label >Allergies or Medical Condition</label>
                        <TextField
                            id={`outlined-updated-date`}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Enter Allergy related information or Medical Condition that might impact Drug usage."
                        />
                    </div>
                </Grid>
                <Grid item xs={12} className="customerInfoEditForm">
                    <div className="customerAddressFormBox customerAllergiesBox">
                        <label >Medication</label>
                        <TextField
                            id={`outlined-updated-date`}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Enter Allergy related information or Medical Condition that might impact Drug usage."
                        />
                    </div>
                </Grid>
                <div className="customerInfoFormButton">
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

export default CustomerInfoForm;