import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';
import { CalenderIcon, TimerIcon, ShippedIcon, PackageIcon, UpdateOrderIcon, RepeatOrderIcon, CancelOrder } from '../../../constants/images/customerOrderCardIcon';
import fulfillOrderProduct  from '../../../constants/fulfillmentOrderProductList';
import OrderDetailsProductTab from './orderDetailsProductTab';
import './orderDetailsView.css';

const OrderDetailsModalView = (props) => {
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const showModal = props.modalView; 
    const [orderProductList, setOrderProductList] = React.useState(fulfillOrderProduct);

    const closeModal = () => {
        if(showModal){
            props.modalClose();
        }
    }

    const renderProductList = () => {
        return orderProductList.map((product, index) => {
            return <OrderDetailsProductTab key={index} product={product} />
        })
    }

    ModalCloseHelper(wrapperRef, modalRef, closeModal); 

    return( 
            <div className="customerModalFormContainer" ref={wrapperRef} style={{display: showModal ? 'block' : 'none'}}>
                <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true"  className="customerInfoContainer customerModalForm orderModalForm orderDetailsModal">
                    <Grid item xs={12} className="orderModalCustomerInfo">
                        <h4>{"Mazikeen Smith"}</h4>
                        <div className="verticalLine"></div>
                        <p>{`ORDER #${1234566754}`}</p>
                        <div className="verticalLine"></div>
                        <p>{"PURE COLLECTIVES"}</p>
                        <p>{"DRAFT"}</p>
                        <CloseIcon/>
                    </Grid>
                    <Divider/>
                    <Grid xs={12} item className="orderModalTabActionContainer">
                        <Grid item xs={2} className="orderModalTabAction lastTag">
                            <div className="supHeader">
                                <p>Payment Type</p>
                            </div>
                            <div className="bottomSec">
                                {`Credit Card (0145 08/12)`}
                            </div>
                        </Grid>
                        <Grid item xs={4} className="orderModalTabAction lastTag">
                            <div className="supHeader">
                                <p>Shipping Address</p>
                            </div>
                            <div className="bottomSec">
                                {`1426 Montana Ave, Unit 2 , Santa Monica, CA, 90403, USA`}
                            </div>
                        </Grid>
                        <Grid item xs={3} className="orderModalTabAction lastTag">
                            <div className="supHeader">
                                <p>Shipping Method</p>
                            </div>
                            <div className="bottomSec">
                                {`FedEx- Home Delivery (2-5 Days)`}
                            </div>
                        </Grid>
                        <Grid item xs={1} className="orderModalTabAction lastTag">
                            <div className="supHeader">
                                <p>Expected Delivery</p>
                            </div>
                            <div className="bottomSec">
                                {`05/21/2020`}
                            </div>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid item xs={12} className="productTabContainer fulfillModalProductContainer">
                        {renderProductList()}
                    </Grid>
                    <Grid item xs={12} className="orderModalFooter orderDetailsModal">
                        <div className="footerActionItem">
                            <p>Products</p>
                            <p>{'35 Items'}</p>
                        </div>
                        <div className="footerActionItem">
                            <p>Sub Total</p>
                            <p>{'80.75'}</p>
                        </div>
                        <div className="footerActionItem">
                            <p>Shipping Cost</p>
                            <p>{'$30.00'}</p>
                        </div>
                        <div className="footerActionItem">
                            <p>Tax</p>
                            <p>{'$15.00'}</p>
                        </div>
                        <div className="footerActionItem">
                            <p>Total</p>
                            <p>{'$125.75'}</p>
                        </div>
                        <div className="footerActionItem lastFooterTag">
                            {CalenderIcon}
                            <p>{'05/03/2020'}</p>
                        </div>
                        <div className="footerActionItem lastFooterTag">
                            {TimerIcon}
                            <p>{'09:25 PM'}</p>
                        </div>
                        <div className="footerActionItem lastFooterTag">
                            {ShippedIcon}
                            <p>{'09:25 PM'}</p>
                        </div>
                        <div className="footerActionItem lastFooterTag">
                            {PackageIcon}
                            <p>{'09:25 PM'}</p>
                        </div>
                        <div className="footerActionItem lastFooterTag">
                            {UpdateOrderIcon}
                            <p>{'09:25 PM'}</p>
                        </div>
                        <div className="footerActionItem lastFooterTag">
                            {RepeatOrderIcon}
                            <p>{'09:25 PM'}</p>
                        </div>
                        <div className="footerActionItem lastFooterTag">
                            {CancelOrder}
                            <p>{'09:25 PM'}</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
    )
}

export default OrderDetailsModalView;