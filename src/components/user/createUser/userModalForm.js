import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';
import { userModalCheckBox } from '../../../constants/dropdownConstant';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import './userModalForm.css';

const UserModalForm = (props) => {
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const showModal = props.modalView; 
    const closeModal = () => {
        if(showModal){
            props.modalClose();
        }
    }
    ModalCloseHelper(wrapperRef, modalRef, closeModal); 

    const handleUserModalCheckBoxes = () => {
        return userModalCheckBox.map( checkBox => {
            return <div key={checkBox.id} className="userModalFormCheckBox">
                        <Checkbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon />}  name="checkedH" />
                        <label>{checkBox.title}</label>
                    </div>
        })
    }

    return(
        <div className="customerModalFormContainer" ref={wrapperRef} style={{display: showModal ? 'block' : 'none'}}>
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true"  className="customerInfoContainer userModalForm customerModalForm">
                <Grid item xs={11} className="customerModalHeader">
                    <h4>Add User</h4>
                </Grid>
                <Grid item xs={1} className="customerModalHeader customerModalFormCancel">
                    <CloseIcon onClick={props.modalClose}/>
                </Grid>
                <Divider className="headerDivider"/>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader userModalForm userModalFormCheckBoxContainer">
                    {handleUserModalCheckBoxes()}
                </Grid>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader userModalForm">
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
                        <label >Last Name</label>
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
                        <label >User Name</label>
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
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader userModalForm">
                    <div className="customerAddressFormBox customerModalFormBox ">
                        <label >Password</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="password"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Password"
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox ">
                        <label >Confirm Password</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="password"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox ">
                        <label >Email</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="Email"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader userModalForm">
                    <div className="customerAddressFormBox customerModalFormBox question">
                        <label >Question</label>
                        <TextField
                            variant="outlined"
                            placeholder="Enter Security Question"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox answer">
                        <label >Answer</label>
                        <TextField
                            variant="outlined"
                            placeholder="Enter Answer"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: false,
                            }}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} className="customerInfoHeader customerModalSubHeader userModalForm">
                    <div className="customerAddressFormBox customerModalFormBox">
                        <label >NPI</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="NPI"
                        />
                    </div>
                    <div className="customerAddressFormBox customerModalFormBox ">
                        <label >RPH License</label>
                        <TextField
                            id={`outlined-updated-date`}
                            type="text"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            placeholder="RPH License"
                        />
                    </div>
                    <div className="customerNoteFormBox customerAddressFormBox customerAttachment userModalSignature">
                        <label >Signature</label>
                        <input type="file" name="file" id="file" class="inputfile" />
                        <label for="file" className="attchmentTrigger">Select Signature</label>
                        <div className="customerNoteFileActionLink">
                            <label for="file">Select Attachment</label>
                            <label>Clear All</label>
                        </div>
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

export default UserModalForm;