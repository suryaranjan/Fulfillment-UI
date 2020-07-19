import React from 'react';
import CustomerCreditCardListView from './customerCreditCardListView';
import CustomerCreditCardForm from './customerCreditCardForm';

const CustomerCreditCard = (props) => {
    const [editPayment, setEditPayment] = React.useState(false);

    const handleEditPayment = () => {
        setEditPayment(true);
    }

    return (
        <>
            { !editPayment ? <CustomerCreditCardListView editPayment={handleEditPayment}/> : <CustomerCreditCardForm/> }
        </>
    )
}

export default CustomerCreditCard;