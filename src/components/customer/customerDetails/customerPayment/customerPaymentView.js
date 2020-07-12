import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomerCreditCardView from './customerCreditCardView';
import './customerCreditCard.css';

const customerCreditCards = [
    {
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    }
]

const CustomerPaymentView = (props) => {

    const creditCardRender = () => {
        return customerCreditCards.map( (data, index) => {
            return <CustomerCreditCardView key={index} editPayment={props.editPayment} card={data}/>
        })
    }

    return (
        <Grid container spacing={3} className="customerInfoContainer">
            <Grid item xs={7} className="customerInfoHeader">
                <h4>Payments</h4>
            </Grid>
            <Grid item xs={5} className="customerAddressAdd">
                <Button variant="outlined">
                    Add Credit Card
                </Button>
            </Grid>
            <Grid container spacing={3} className="customerAddressList">
                {creditCardRender()}
            </Grid>
        </Grid>
    )
}

export default CustomerPaymentView;