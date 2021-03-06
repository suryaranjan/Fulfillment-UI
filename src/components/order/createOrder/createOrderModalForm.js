import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { CalenderIcon, TimerIcon } from '../../../constants/images/customerOrderCardIcon';
import ProductTab from './createOrderProductTab';
import CreateOrderChangeDetailsModal from './createOrderChangeDetailsModal';
import './createOrderModalForm.css';

const CreateOrderModalForm = (props) => {
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const showModal = props.modalView;
    const [showSecondaryModal, setShowSecondaryModal] = React.useState(false);
    const [secondaryModalEditType, setSecondaryModalEditType] = React.useState('');
    const [createOrderDetails, setCreateOrderDetails] = React.useState({
        paymentInfo: '',
        shippingAddress: '',
        shippingMethod: 'FedEx- Home Delivery (2-5 Days)',
        customerInfo: {
            customerName: "Mazikeen Smith",
            orderId: 1234566754,
            partnerName: 'PURE COLLECTIVES'
        }
    })
    const [orderProductList, setOrderProductList] = React.useState([{
        id: 1,
        product: '',
        quantity: '',
        discount: '',
        price: '',
        error: true
    }]);

    const handleShowSecondaryModal = (val) => {
        setShowSecondaryModal(true);
        setSecondaryModalEditType(val);
    }

    const closeSeondaryModal = () => {
        setSecondaryModalEditType('');
        setShowSecondaryModal(false);
    }

    const closeModal = () => {
        if (showModal) {
            props.modalClose();
        }
    }

    const discount = [
        { title: 'one', value: 1 },
        { title: 'two', value: 2 }
    ]

    const addMoreProduct = () => {
        let previousProduct = [...orderProductList];
        previousProduct.push({
            id: previousProduct.length + 1,
            product: '',
            quantity: '',
            discount: '',
            price: ''
        });
        setOrderProductList(previousProduct)
    }

    const handleCreditCardChange = (card) => {
        console.log("payment", card)
        if (parseInt(card.id) === parseInt(createOrderDetails.paymentInfo.id)) {
            setCreateOrderDetails({
                ...createOrderDetails,
                paymentInfo: ''
            });
        } else {
            setCreateOrderDetails({
                ...createOrderDetails,
                paymentInfo: card
            });
        }
    }

    const handleAddressChange = (address) => {
        if (parseInt(address.id) === parseInt(createOrderDetails.shippingAddress.id)) {
            setCreateOrderDetails({
                ...createOrderDetails,
                shippingAddress: ''
            });
        } else {
            setCreateOrderDetails({
                ...createOrderDetails,
                shippingAddress: address
            });
        }
    }

    const renderProductList = () => {
        return orderProductList.map(product => {
            return <ProductTab key={product.id} product={product} />
        })
    }

    ModalCloseHelper(wrapperRef, modalRef, closeModal, showSecondaryModal ? true : false);

    return (
        <div className="customerModalFormContainer" ref={wrapperRef} style={{ display: showModal ? 'block' : 'none' }}>
            {showSecondaryModal ?
                <CreateOrderChangeDetailsModal
                    showModal={showSecondaryModal}
                    type={secondaryModalEditType}
                    modalClose={closeSeondaryModal}
                    addressChange={handleAddressChange}
                    addressSelected={createOrderDetails && createOrderDetails.shippingAddress ? createOrderDetails.shippingAddress : ''}
                    creditCardChange={handleCreditCardChange}
                    creditCardSelected={createOrderDetails && createOrderDetails.paymentInfo ? createOrderDetails.paymentInfo : ''}
                /> : ''}
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true" className="customerInfoContainer customerModalForm orderModalForm">
                <Grid item xs={12} className="orderModalCustomerInfo">
                    <h4>{createOrderDetails && createOrderDetails.customerInfo.customerName}</h4>
                    <div className="verticalLine"></div>
                    <p>{`ORDER #${createOrderDetails && createOrderDetails.customerInfo.orderId}`}</p>
                    <div className="verticalLine"></div>
                    <p>{createOrderDetails && createOrderDetails.customerInfo.partnerName}</p>
                    <p>{"DRAFT"}</p>
                    <CloseIcon onClick={closeModal} />
                </Grid>
                <Divider />
                <Grid xs={12} item className="orderModalTabActionContainer">
                    <Grid item xs={2} className="orderModalTabAction">
                        <div className="supHeader">
                            <p>Payment Type</p>
                            {createOrderDetails && createOrderDetails.paymentInfo && createOrderDetails.paymentInfo.cardNo ?
                                <p onClick={() => handleShowSecondaryModal('payment')}>Change</p> : ''
                            }
                        </div>
                        {createOrderDetails && createOrderDetails.paymentInfo && createOrderDetails.paymentInfo.cardNo ?
                            <div className="bottomSec">
                                {`Credit Card 
                                     (${createOrderDetails.paymentInfo.cardNo},  
                                    ${createOrderDetails.paymentInfo.expiry},)`
                                }
                            </div> :
                            <div className="bottomSecAction">
                                <p onClick={() => handleShowSecondaryModal('payment')}>Add Payment Type</p>
                            </div>
                        }
                    </Grid>
                    <Grid item xs={4} className="orderModalTabAction">
                        <div className="supHeader">
                            <p>Shipping Address</p>
                            {createOrderDetails && createOrderDetails.shippingAddress && createOrderDetails.shippingAddress.address1 ?
                                <p onClick={() => handleShowSecondaryModal('address')}>Change</p> : ''
                            }
                        </div>
                        {createOrderDetails && createOrderDetails.shippingAddress && createOrderDetails.shippingAddress.address1 ?
                            <div className="bottomSec">
                                {`${createOrderDetails.shippingAddress.address1},  
                                    ${createOrderDetails.shippingAddress.address2}, 
                                    ${createOrderDetails.shippingAddress.city}, 
                                    ${createOrderDetails.shippingAddress.state}, 
                                    ${createOrderDetails.shippingAddress.zipcode}, 
                                    ${createOrderDetails.shippingAddress.country}`
                                }
                            </div> :
                            <div className="bottomSecAction">
                                <p onClick={() => handleShowSecondaryModal('address')}>Add Shipping Address</p>
                            </div>
                        }

                    </Grid>
                    <Grid item xs={3} className="orderModalTabAction">
                        <div className="supHeader">
                            <p>Shipping Method</p>
                            <p>Change</p>
                        </div>
                        <div className="bottomSec">
                            {`${createOrderDetails.shippingMethod}`}
                        </div>
                        {createOrderDetails && !createOrderDetails.shippingMethod ?
                            <div className="bottomSecAction">
                                <p>Add Shipping Method</p>
                            </div> : ''
                        }

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
                <Grid xs={12} item className="orderFilters customerOrderFilters discountDropdown">
                    <Autocomplete
                        className="orderFiltersAutoComplete"
                        disableClearable
                        defaultValue={0}
                        popupIcon={<ExpandMoreIcon className="discountArrowDown" />}
                        clearOnBlur={false}
                        options={discount.map((option) => option.title)}
                        renderInput={(params) => (
                            <>
                                <TextField
                                    {...params}
                                    margin="normal"
                                    placeholder="Select Discount Type"
                                    variant="outlined"
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <HelpOutlineIcon className="helpTag" />
                            </>
                        )}
                    />
                    <Button variant="outlined" onClick={addMoreProduct} >
                        Add Product
                        </Button>
                </Grid>
                <Grid item xs={12} className="productTabContainer">
                    {renderProductList()}
                </Grid>
                <Grid item xs={12} className="orderModalFooter">
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
                    <div className="footerActionItem submitOrder">
                        <Button variant="outlined" onClick={props.placeOrder}>
                            PLACE ORDER
                            </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreateOrderModalForm;