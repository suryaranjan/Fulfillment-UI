import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomerCreditCardView from './customerCreditCardView';
import CloseIcon from '@material-ui/icons/Close';
import './customerCreditCard.css';

const customerCreditCards = [
    {
        id: 0,
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        id: 1,
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        id: 2,
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        id: 3,
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        id: 4,
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    },
    {
        id: 5,
        name: 'Jane Doe',
        cardNo: '**** **** **** 4563',
        expiry: '10/23',
        cardName: "John's Card",
        company: "Visa"
    }
]

const CustomerCreditCardListView = (props) => {

    const handleOrderCustomerCreditCardChange = (data) => {
        if(props.createOrder){
            props.creditCardChange(data) 
        }
    }

    const creditCardRender = () => {
        return customerCreditCards.map((data, index) => {
            return <CustomerCreditCardView
                key={index}
                editPayment={props.editPayment}
                card={data}
                creditCardChange={() => handleOrderCustomerCreditCardChange(data)}
                creditCardSelected={props.createOrder && props.creditCardSelected &&
                    parseInt(props.creditCardSelected.id) === parseInt(data.id) ? true : false}
            />
        })
    }

    return (
        <Grid container spacing={3} className="customerInfoContainer">
            <Grid item xs={7} className="customerInfoHeader">
                <h4>Payments</h4>
            </Grid>
            <Grid item xs={5} className="customerAddressAdd">
                <Button variant="outlined" onClick={props.editPayment}>
                    Add Credit Card
                </Button>
                {props.createOrder ?
                    <CloseIcon onClick={props.closeModal} /> : ''
                }
            </Grid>
            <Grid container spacing={3} className="customerAddressList">
                {creditCardRender()}
            </Grid>
        </Grid>
    )
}

export default CustomerCreditCardListView;