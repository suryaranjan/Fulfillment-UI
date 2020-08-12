import React from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { noteDropdown } from '../../../../constants/dropdownConstant';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

class CustomerNoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Grid container spacing={3} className="customerInfoContainer">
                <Grid item xs={11} className="customerInfoHeader">
                    <h4>Add Note</h4>
                </Grid>
                <Grid item xs={1} className="customerInfoHeader customerAddressFormEdit customerNoteFormIcon">
                    <DeleteIcon onClick={this.props.deleteNote}/>
                </Grid>
                <Grid item xs={3} className="customerNoteFormBox customerAddressFormBox">
                    <label >Note Type</label>
                    <Autocomplete
                        className="orderFiltersAutoComplete"
                        disableClearable
                        defaultValue={0}
                        clearOnBlur={false}
                        options={noteDropdown.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                margin="normal"
                                placeholder="Note Type"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={3} className="customerNoteFormBox customerAddressFormBox">
                    <label >Review Date</label>
                    <TextField
                        type="date"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                </Grid>
                <Grid item xs={6} className="customerNoteFormBox customerAddressFormBox customerAttachment">
                    <label >Attachments</label>
                    <input type="file" name="file" id="file" class="inputfile" />
                    <label for="file" className="attchmentTrigger">Select Attachments</label>
                    <div className="customerNoteFileActionLink">
                        <label for="file">Select Attchments</label>
                        <label>Clear All</label>
                    </div>
                </Grid>
                <Grid item xs={12} className="customerNoteFormBox customerNoteTextArea customerAddressFormBox">
                    <label >Note</label>
                    <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
                </Grid>
                <Grid item xs={12} className="customerAddressFormButton customerNoteFormButton">
                    <Grid item xs={6}  className="customerAddressFormBox cancelButton">
                        <Button variant="outlined" onClick={this.props.deleteNote}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={6}  className="customerAddressFormBox saveButton">
                        <Button variant="contained" onClick={this.props.deleteNote}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default CustomerNoteForm; 