import React from 'react';
import CustomerAddressListView from './customerAddressListView';
import CustomerAddressForm from './customerAddressForm';

const CustomerAddress = () => {
    const [editAddress, setEditAddress] = React.useState(false);

    const  handleEditAddress = () => {
       setEditAddress(true);
    }

    return (
        <>
            {   !editAddress ? 
                <CustomerAddressListView editAddress={handleEditAddress}/> 
                : <CustomerAddressForm/>
            }
        </>
    )
}

export default CustomerAddress;