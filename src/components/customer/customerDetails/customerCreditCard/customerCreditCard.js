import React from 'react';
import CustomerCreditCardListView from './customerCreditCardListView';
import CustomerCreditCardForm from './customerCreditCardForm';

const CustomerCreditCard = (props) => {
    const [editPayment, setEditPayment] = React.useState(false);

    const handleEditPayment = () => {
        setEditPayment(!editPayment);
    }

    return (
        <>
            { !editPayment ? 
            <CustomerCreditCardListView 
                editPayment={handleEditPayment}
                createOrder={props.createOrder ? props.createOrder : false}
                creditCardChange={props.creditCardChange}
                creditCardSelected={props.creditCardSelected}
                closeModal={props.closeModal}
            /> 
            : <CustomerCreditCardForm
                cancelEditAddress={handleEditPayment}
            /> }
        </>
    )
}

export default CustomerCreditCard;