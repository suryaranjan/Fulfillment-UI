import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CustomerNoteCardView from './customerNoteCardView';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import { IconButton } from '@material-ui/core';
import { noteDropdown } from '../../../../constants/dropdownConstant';
import CustomerNoteForm from './customerNoteForm';
import './customerNotes.css';

const noteList = [
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured 200mg that was manufactured  CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    },
    {
        type: 'General',
        name: 'Robin Mackey',
        notes: 'Customer received CoQ10 200mg that was manufactured 6/1. Sent return shipping label. Trk#772196189715. I also processed a replacement order. rm'
    }
]

const CustomerNoteListView = (props) => {
    const [ advanceFilter, setAdvanceFilter ] = useState(false);
    const [ addNoteForm, setAddNote ] = useState(false);
    const renderNoteList = () => {
        return noteList.map( (data, index) => {
            return <CustomerNoteCardView key={index} note={data}/>
        })
    }
    const handleAddForm = () => {
        setAddNote(true);
    }
    
    const deleteAddNoteForm = () => {
        setAddNote(false);
    }

    const handleAdvanceFilter = () => {
        setAdvanceFilter(!advanceFilter);
    }
    return (
        <Grid container spacing={3} className="customerInfoContainer">
            <Grid item xs={7} className="customerInfoHeader">
                <h4>Notes</h4>
            </Grid>
            <Grid item xs={5} className="customerAddressAdd">
                <Button variant="outlined" onClick={handleAddForm}>
                    Add Note
                </Button>
            </Grid>
            { !advanceFilter ? 
                <Grid item xs={12} className="noteFilters">
                    <div className="orderFilterSearch">
                        <IconButton  aria-label="menu" className="searchIcon">
                            <SearchIcon />
                        </IconButton>
                        <InputBase className="searchBar"
                            placeholder="Search Note"
                        />
                        <IconButton  aria-label="directions" onClick={handleAdvanceFilter} className="filterOption">
                            <FilterListIcon  />
                        </IconButton> 
                    </div>
                </Grid>
                :<Grid item xs={12} className="noteFilters orderFilters customerNoteFilters noteAdvanceFilters">
                    <Autocomplete
                        className="orderFiltersAutoComplete"
                        disableClearable
                        defaultValue={0}
                        clearOnBlur={false}
                        options={noteDropdown.map((option) => option.title)}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Note Type"
                            margin="normal"
                            placeholder="Note Type"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        )}
                    />
                    <TextField
                        id={`outlined-created-date`}
                        type="date"
                        label="Created date"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Created Date"
                    />
                    <TextField
                        id={`outlined-updated-date`}
                        type="date"
                        label="Updated Date"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Updated Date"
                    />
                    <TextField
                        id={`outlined-created-by`}
                        label="Created By"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Name"
                    />
                    <CancelIcon className="cancelIcon" onClick={handleAdvanceFilter}/>
                </Grid>
            }   
            { addNoteForm ? 
                <Grid item xs={12} className="customerNoteForm">
                    <CustomerNoteForm deleteNote={deleteAddNoteForm}/> 
                </Grid>
                : ''
            }
            <Grid item xs={12} className="customerNoteList">
                {renderNoteList()}
            </Grid>
        </Grid>
    )
}

export default CustomerNoteListView;