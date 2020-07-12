import React from 'react';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const CustomerInfo = (props) => {

    return (
        <Grid container spacing={3} className="customerInfoContainer">
                <Grid item xs={11} className="customerInfoHeader">
                    <h4>Customer Information</h4>
                </Grid>
                <Grid item xs={1} className="customerInfoEditIcon">
                    <EditIcon onClick={props.editInfo}/>
                </Grid>
                <div className="customerInfoDetails">
                    <div  className="customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            First Name
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Mazikeen
                        </Typography>
                    </div>
                    <div  className="customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            Last Name
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Smith
                        </Typography>
                    </div>
                    <div  className="customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            Gender
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Female
                        </Typography>
                    </div>
                    <div  className="customerInfo customerDOB">
                        <Typography variant="body2" color="textSecondary">
                            Date Of Birth
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            01/08/1980
                        </Typography>
                    </div>
                    <div  className="customerInfo customerPhone">
                        <Typography variant="body2" color="textSecondary">
                            Phone Number
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            (310) 888 2222956
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <div className="customerInfoMedication customerInfoDetails">
                    <div  className="customerMedicationFirst customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            Allergies/Medical Conditions
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Medication
                        </Typography>
                    </div>
                    <div  className="customerMedication customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            Medications
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Medication 1, Medication 2
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <div className="customerInfoCards customerInfoDetails">
                    <div  className="customerInfo customerCreditCard">
                        <Typography variant="body2" color="textSecondary">
                            Default Credit Card
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            0145
                        </Typography>
                        <Typography className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-gutterBottom" gutterBottom variant="subtitle1">
                            08/22
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <div className="customerInfoAddress customerInfoDetails">
                    <div  className="customerInfo customerAddress">
                        <Typography variant="body2" color="textSecondary">
                            Address
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            1426 Montana Ave, Unit 2, Santa Monica, CA 90403, US
                        </Typography>
                    </div>
                    <div  className="customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            State
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            CA
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <div className="customerInfoPartners customerInfoDetails">
                    <div  className="customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            Partner
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Enutra
                        </Typography>
                    </div>
                    <div  className="customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            Center
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Enutra  
                        </Typography>
                    </div>
                    <div  className="customerInfo">
                        <Typography variant="body2" color="textSecondary">
                            Prescribers
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            NUTRAscriptives  
                        </Typography>
                    </div>
                </div>
                <Divider/>
        </Grid>
    )
}

export default CustomerInfo; 