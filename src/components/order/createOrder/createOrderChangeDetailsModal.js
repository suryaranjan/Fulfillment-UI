import React, { useRef } from 'react';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';
import CustomerAddress from '../../customer/customerDetails/customerAddress/customerAddress';
import CustomerCrediCard from '../../customer/customerDetails/customerCreditCard/customerCreditCard';
import Grid from '@material-ui/core/Grid';

const CreateOrderChangeDetailsModal = (props) => {
    const showModal = props.showModal;
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const closeModal = () => {
        if(showModal){
            props.modalClose();
        }
    }

    ModalCloseHelper(wrapperRef, modalRef, closeModal); 

    return (
        <div className="customerModalFormContainer orderDetailsChange" ref={wrapperRef} style={{display: showModal ? 'block' : 'none'}}>
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true"  className="customerInfoContainer customerModalForm orderDetailsInfo">
                {props.type === 'address' ? <CustomerAddress/> : ''}
                {props.type === 'payment' ? <CustomerCrediCard/> : ''}
            </Grid>
        </div>
    )
}

export default CreateOrderChangeDetailsModal;