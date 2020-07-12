import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import fedex from '../../../../constants/images/FEDEX-logo.png';

const CustomerOrderCardView = (props) => {
    const orderData = props.order;

    return(
        <Paper elevation={3} className="customerOrderCardContainer">
             <Grid container spacing={3} className="customerOrderCard">
                <Grid item xs={12} className="customerOrderFirstDetails">
                    <p>{`ORDER #${orderData.orderId}`}</p>
                    <div className="verticalLine"></div>
                    <span>{orderData.orderDate}</span>
                    <div className="verticalLine"></div>
                    <span>{orderData.status}</span>
                    <div className="verticalLine"></div>
                    <span>{orderData.city}</span>
                    <div className="verticalLine"></div>
                    <div className="customerOrderShippingLogo"> 
                        <img src={fedex} alt="shippingmethod" />
                    </div>
                    <div className="verticalLine"></div>
                    <span>{orderData.tracking}</span>
                </Grid>
                <Grid item xs={12} className="customerOrderSecondDetails">
                    <h4>
                        {`$${orderData.total}`}
                    </h4>
                    <p>
                    {`${orderData.quantity} Products`}
                    </p>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CustomerOrderCardView;