import React from 'react';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

const CustomerAddressCard = (props) => {
    const addressData = props.address;
    
    return (
        <Paper elevation={3} className="customerAddressCardContainer">
             <Grid container spacing={3} className="customerAddressCard">
                <Grid item xs={2} className="customerAddressTypeLogo">
                    <HomeIcon/>
                </Grid>
                <Grid item xs={7} className="customerAddressDetails">
                    <h6>{addressData.firstName + addressData.lastName}</h6>
                    <p>{addressData.address1}</p>
                    <p>{addressData.address2}</p>
                    <p>{addressData.city}</p>
                    <p>{`${addressData.state}  ${addressData.zipcode}` }</p>
                    <p>{addressData.country}</p>
                    <p>{addressData.phone}</p>
                </Grid>
                <Grid item xs={1} className="customerAddressEditLogo">
                    <EditIcon onClick={props.editAddress}/>
                </Grid>
            </Grid>
        </Paper>
    )

}

export default CustomerAddressCard;