import React from 'react';
import CustomerInfoView from './customerInfoView';
import CustomerInfoForm from './customerInfoForm';

const CustomerInfo = (props) => {
    const [editInfo, setEditInfo] = React.useState(false);

    const handleEditInfo = () => {
        setEditInfo(true);
    }

    return (
        <>
            { !editInfo ? <CustomerInfoView editInfo={handleEditInfo}/> : <CustomerInfoForm/>}
        </>
    )
}

export default CustomerInfo;
