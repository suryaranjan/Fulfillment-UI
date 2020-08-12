import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const CustomerNoteCardView = (props) => {
    const noteData = props.note;
    const indexOfSpace = noteData.notes.substr(150, noteData.notes.length).indexOf(" ");
    const [ noteSeeMore, setNoteSeeMore ] = useState(indexOfSpace !== -1 ? true : false);
    const handleSeeMoreNote = () => {
        setNoteSeeMore(!noteSeeMore);
    }
    return(
        <Paper elevation={3} className="customerNoteCardContainer">
             <Grid container spacing={3} className="customerNoteCard">
                <Grid item xs={12} className="customerNoteFirstDetails customerNoteDetailsBox">
                    <div className="customerNoteDetails">
                        <p>{noteData.type}</p>
                        <span>&bull;</span>
                        <p>{noteData.name}</p>
                    </div>
                    <MoreVertIcon/>
                </Grid>
                { noteData.notes.length > 150 ? (noteSeeMore ?

                    <p className="customerNotes">
                        {`${noteData.notes.substr(0, indexOfSpace + 150)} `}
                        <label className="customerNoteSeemore" onClick={handleSeeMoreNote}>See More</label>
                    </p> 
                    :
                    <p className="customerNotes">
                        {`${noteData.notes} `}
                        <label className="customerNoteSeemore" onClick={handleSeeMoreNote}>See Less</label>
                    </p>
                    ):
                    <p className="customerNotes">
                        {`${noteData.notes} `}
                    </p>
                }
                
                <div className="customerNoteDate">
                    <span>05/02/2019 02:03:17 PM</span>
                </div>
            </Grid>
        </Paper>
    )
}

export default CustomerNoteCardView;