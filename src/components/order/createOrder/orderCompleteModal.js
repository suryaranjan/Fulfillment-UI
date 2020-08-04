import React, {useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';

const OrderCompleteModal = (props) => {
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const showModal = props.modalView;
    const closeModal = () => {
        if(showModal){
            props.modalClose();
        }
    }

    ModalCloseHelper(wrapperRef, modalRef, closeModal); 

    return (
        <div className="customerModalFormContainer" ref={wrapperRef} style={{display: showModal ? 'block' : 'none'}}>
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true"  className="customerInfoContainer customerModalForm orderCompleteModal">
                <Grid item xs={12} className="orderPlacedContainer">
                    <div>
                        <DoneIcon/>
                        <p>{props.completeText}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCompleteModal;