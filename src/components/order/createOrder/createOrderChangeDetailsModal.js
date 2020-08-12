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
        if (showModal) {
            props.modalClose();
        }
    }

    ModalCloseHelper(wrapperRef, modalRef, closeModal);

    return (
        <div className="customerModalFormContainer orderDetailsChange" ref={wrapperRef} style={{ display: showModal ? 'block' : 'none' }}>
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true" className="customerInfoContainer customerModalForm orderDetailsInfo">
                {props.type === 'address' ?
                    <CustomerAddress
                        createOrder={true}
                        addressChange={props.addressChange}
                        addressSelected={props.addressSelected}
                        closeModal={closeModal}
                    /> : ''}
                {props.type === 'payment' ? 
                    <CustomerCrediCard 
                        createOrder={true}
                        creditCardChange={props.creditCardChange}
                        creditCardSelected={props.creditCardSelected}
                        closeModal={closeModal}
                    /> : ''}
            </Grid>
        </div>
    )
}

export default CreateOrderChangeDetailsModal;