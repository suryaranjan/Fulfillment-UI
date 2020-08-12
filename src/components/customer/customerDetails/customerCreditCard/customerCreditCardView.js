import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import visa from '../../../../constants/images/ccvisa.png';
 
const CustomerCreditCardView = (props) => {
    const card = props.card;

    return(
        <Paper elevation={3} className={`customerAddressCardContainer ${props.creditCardSelected ? 'selected' : ''}`}>
             <Grid container spacing={3} className="customerAddressCard customerCreditCard" onClick={props.creditCardChange}>
                <Grid item xs={6} className="customerCreditCardHeader">
                    {card.name}
                </Grid>
                <Grid item xs={6} className="customerAddressEditLogo customerCreditCardEditLogo">
                    <EditIcon onClick={props.editPayment}/>
                </Grid>
                    <h2 className="customerCreditCardDetails">
                        {card.cardNo}
                    </h2>
                    <h4 className="customerCreditCardDetails">
                        <span>Valid Through</span>
                        {card.expiry}
                    </h4>
                <Grid item xs={9} className="customerCreditCardFooter">
                    <InsertDriveFileIcon/>
                    <p>{card.cardName}</p>
                </Grid>
                <Grid item xs={3} className="customerCreditCardFooterLogo">
                    <img src={visa} alt="Credit card" />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CustomerCreditCardView;