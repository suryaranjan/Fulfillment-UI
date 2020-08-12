import React from 'react';
import CustomerAddressListView from './customerAddressListView';
import CustomerAddressForm from './customerAddressForm';

const CustomerAddress = (props) => {
    const [editAddress, setEditAddress] = React.useState(false);

    const  handleEditAddress = () => {
       setEditAddress(!editAddress);
    }

    return (
        <>
            {   !editAddress ? 
                <CustomerAddressListView 
                    editAddress={handleEditAddress} 
                    createOrder={props.createOrder ? props.createOrder : false}
                    addressChange={props.addressChange}
                    addressSelected={props.addressSelected}
                    closeModal={props.closeModal}
                /> 
                : <CustomerAddressForm 
                    cancelEditAddress={handleEditAddress}
                />
            }
        </>
    )
}

export default CustomerAddress;