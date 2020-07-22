import React, {useRef, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ModalCloseHelper from '../../sharedComponent/modalCloseHelper';
import FulfillmentOrderProductTab from './fulfillOrderProductTab';
import './fulfillmentModal.css';

const FulfillOrderModalForm = (props) => {
    console.log("props",props)
    
    const [scannedProduct, setScannedProduct] = React.useState({});
    const [searchCode, setSearchCode] = React.useState('');
    const [orderFulfilled, setOrderFulfilled] = React.useState(false);
    const [renderLot, setRenderLot] = React.useState();
    const [showLoader , setShowLoader] = React.useState(false);
    const wrapperRef = useRef(null);
    const modalRef = useRef(null);
    const showModal = props.modalView; 

    const formatProductData = () => {
        console.log("products", {...props})
        if(props.order && props.order.products){
            let fulfilledQuantity = 0;
            let fulfillingStatus = 'started';
            let products = props.order.products.map(product => {
                fulfilledQuantity = 0;
                fulfillingStatus = 'started';
                fulfilledQuantity = calculateFulfilledQuantity(product);
                product.fulfilledQuantity = fulfilledQuantity;
                fulfillingStatus = checkFulfillingStatus(product);
                return {
                    ...product,
                    fulfilling: fulfillingStatus,
                    fulfilledQuantity: fulfilledQuantity
                };
            })
            return products;
        }
    }
    

    const checkFulfillingStatus = (product) => {
        let fulfilling = 'started';
        if(parseInt(product.fulfilledQuantity) === parseInt(product.Quantity)){
            fulfilling = 'completed';
        }else if(parseInt(product.fulfilledQuantity) > 0){
            fulfilling = 'inProgress';
        }else if(parseInt(product.fulfilledQuantity) === 0){
            fulfilling = 'started';
        }
        return fulfilling;
    }

    const closeModal = () => {
        if(showModal){
            props.modalClose();
        }
    }

    const updateProductList = (product) => {
        let tempProductList = productList.map(prod => {
            if(product.OrderItemId === prod.OrderItemId){
                return product;
            }
            return prod;
        });
        
        setProductList([...tempProductList]);
    }

    const handleLotValueChanges = (e, index, property) => {
        let product = scannedProduct;
        let fulfilledQuantity = 0;
        let fulfillingStatus = 'started';

        if(property === 'LotNumber'){
            product.LotNumbers[index][property] = e.target.value;
            product.LotNumbers[index].errorLotName = '';
        }else{
            if(e.target.value >= 0 && e.target.value <= product.Quantity){
                product.LotNumbers[index][property] = parseInt(e.target.value) || 0;
                product.LotNumbers[index].errorQty = '';
            }else if(e.target.value > 0){
                product.LotNumbers[index][property] = parseInt(e.target.value) || 0;
                product.LotNumbers[index].errorQty = 'Over Limit'
            }else if(e.target.value === 0){
                product.LotNumbers[index][property] = 0;
            }
        }

        product.error = '';
        fulfilledQuantity = calculateFulfilledQuantity(product);
        product.fulfilledQuantity = fulfilledQuantity;
        fulfillingStatus = checkFulfillingStatus(product);
        product.fulfilling = fulfillingStatus;
        updateProductList(product);
        setScannedProduct({...product});
    }

    const calculateFulfilledQuantity = (product) => {
        let fulfilledQuantity = 0;
        product.LotNumbers.map(lot => {
            if(lot.LotNumber !== ''){
                fulfilledQuantity += parseInt(lot.Quantity) ? parseInt(lot.Quantity) : 0;
            }else{
                fulfilledQuantity = 0;
            }
            return lot;
        })
        return fulfilledQuantity;
    }

    const checkOrderFulfilled = () => {
        let flag = true;
        productList.map(product => {
            console.log("product", product, parseInt(product.Quantity) === parseInt(product.fulfilledQuantity) && flag)
            if(parseInt(product.Quantity) === parseInt(product.fulfilledQuantity) && flag === true){
                flag = true;
            }else{
                flag = false;
            }
            return product;
        });
        setOrderFulfilled(flag);
        return flag;
    }

    const handleSearchCodeInput = (e) => {
        let value = e.target.value;
        let scannedProduct ;
        let fulfilledQuantity = 0;
        let fulfillingStatus = 'started';

        setSearchCode(value);
        productList.map(product => {
            if(parseInt(product.UPC) === parseInt(value)){
                if(product.LotNumbers.length === 0){
                    product.LotNumbers.push({
                        id: product.LotNumbers.length + 1,
                        LotNumber: '',
                        Quantity: ''
                    });
                }else{
                    fulfilledQuantity = 0;
                    fulfillingStatus = 'started';
                    fulfilledQuantity = calculateFulfilledQuantity(product);
                    product.fulfilledQuantity = fulfilledQuantity;
                    fulfillingStatus = checkFulfillingStatus(product);
                    product.fulfilling = fulfillingStatus;
                }
                scannedProduct = product;
            }
            return product;
        });

        setScannedProduct({...scannedProduct});
    }

    const addLotForProduct = () => {
        let flag = true;
        let tempScanned = scannedProduct;
        let tempLot = tempScanned.LotNumbers.map(lot => {
            if(lot.LotNumber && lot.LotNumber !== '' && lot.Quantity && lot.Quantity > 0 && flag){
                flag = true;
            }
            else{
                flag = false;
                if(lot.LotNumber === '' || !lot.LotNumber){
                    lot.errorLotName = 'Lot Required';
                }if(lot.Quantity <= 0 || !lot.Quantity){
                    lot.errorQty = 'Qty Required';
                }
            }
            return lot;
        });
        let fulfilledQuantity = calculateFulfilledQuantity(tempScanned);
        if(flag){
            if(parseInt(fulfilledQuantity) === parseInt(tempScanned.Quantity)){
                tempScanned.error = 'Product Quantity Fulfilled';
            }else if(fulfilledQuantity < tempScanned.Quantity){
                tempScanned.LotNumbers.push({
                    id: scannedProduct.LotNumbers.length + 1,
                    LotNumber: '',
                    Quantity: ''
                });
            }
            setScannedProduct({...scannedProduct});
            updateProductList(tempScanned);
        }else{
            tempScanned.LotNumbers = [...tempLot];
            setScannedProduct({...tempScanned});
        }
        
    }
    

    const renderProductLotList = () => {
        return scannedProduct && scannedProduct.LotNumbers && scannedProduct.LotNumbers.map((card, index) => {
            return (
                    <div className={`lotAlotment ${index === (scannedProduct.LotNumbers.length - 1) ? 'lastLot' : 'notLastLot'} `} key={index}>
                        <div className="lot">
                            <label >Lot#</label>
                            <TextField
                                value={scannedProduct.LotNumbers[index].LotNumber}
                                onChange={(e) => handleLotValueChanges(e, index, 'LotNumber')}
                                variant="outlined"
                                placeholder="Lot"
                                error={scannedProduct.LotNumbers[index].errorLotName ? true : false}
                                helperText={scannedProduct.LotNumbers[index].errorLotName}
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                        </div>
                        <div className="lot">
                            <label >Qty</label>
                            <TextField
                                value={scannedProduct.LotNumbers[index].Quantity}
                                onChange={(e) => handleLotValueChanges(e, index, 'Quantity')}
                                variant="outlined"
                                defaultValue={0}
                                error={scannedProduct.LotNumbers[index].errorQty ? true : false}
                                helperText={scannedProduct.LotNumbers[index].errorQty}
                                placeholder="Qty"
                                InputLabelProps={{
                                    shrink: false,
                                }}
                            />
                        </div>
                        {index === (scannedProduct.LotNumbers.length - 1) ? <AddIcon onClick={addLotForProduct}/> : ''}
                    </div>
                )
        })
    }

    const renderProductList = () => {
        console.log("productlist", productList)
        return productList.map((product, index) => {
            return <FulfillmentOrderProductTab key={index} product={product} />
        })
    }

    const saveOrderFulfilled = () => {
        let tempProductList = [...productList];
        let orderItems = tempProductList.map(product => {
            let tempProduct = {...product};
            delete tempProduct.ProductName;
            delete tempProduct.Quantity;
            delete tempProduct.UPC;
            delete tempProduct.fulfilledQuantity;
            delete tempProduct.fulfilling;
            delete tempProduct.error;
            tempProduct.LotNumbers.map(lot => {
                let tempLot = {...lot};
                delete tempLot.errorLotName; 
                delete tempLot.errorQty;
                return tempLot;
            });
            return tempProduct;
        });
        let fulfilledObject = {
            orderId: props.orderId,
            orderItems,
        }
        console.log("Order items", fulfilledObject);
    }

    useEffect( () => {
        let tempLotRender = renderProductLotList();
        setRenderLot(tempLotRender);
        checkOrderFulfilled();
    }, [scannedProduct])

    ModalCloseHelper(wrapperRef, modalRef, closeModal); 
    const [productList, setProductList] = React.useState(formatProductData());
    return (
        <div className="customerModalFormContainer" ref={wrapperRef} style={{display: showModal ? 'block' : 'none'}}>
            <Grid container spacing={3} backdrop="true" ref={modalRef} keyboard="true"  className="customerInfoContainer customerModalForm orderModalForm">
                <Grid item xs={12} className="orderModalCustomerInfo fulfillModalCustomerInfo">
                    Order Fulfillment  
                    <CloseIcon onClick={closeModal}/>
                </Grid>
                <Grid item xs={12} className="orderModalCustomerInfo fulfillModalCustomerInfo">
                    <h4>{"Mazikeen Smith"}</h4>
                    <div className="verticalLine"></div>
                    <p>{`ORDER #${1234566754}`}</p>
                    <div className="verticalLine"></div>
                    <p>{"PURE COLLECTIVES"}</p>
                    <p>{`${2}/${50}`}</p>
                </Grid>
                <Grid item xs={12} className="productTabContainer fulfillModalProductContainer">
                    {renderProductList()}
                </Grid>
                <Grid item xs={12} className="productCodeContainer fulfillModalProductContainer ">
                    <div className="inputProductCode">
                        <p>Unable to Scan? Enter Code Instead</p>
                        <div>
                            <InputBase className="searchProductBar"
                                placeholder="Enter Code Here"
                                value={searchCode}
                                onChange={handleSearchCodeInput}
                            />
                            <IconButton  aria-label="menu" className="codeSearchIcon">
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </div>
                    <Divider  orientation="vertical" />
                    <div className="lotAllotmentContainer">
                        <p>{scannedProduct.ProductName}</p>
                        {renderLot}
                        {scannedProduct && scannedProduct.error ? <p>{scannedProduct.error}</p> : ''}
                    </div>
                </Grid>
                <Grid item xs={12} className="orderModalFooter fulfillmentModalFooter">
                    <div className="footerActionItem">
                        <p>View Order Details</p>
                    </div>
                    <div className="footerActionItem">
                        <p>Save As Draft</p>
                    </div>
                    <div className={`footerActionItem submitOrder ${!orderFulfilled ? "fade" : ''}`} onClick={saveOrderFulfilled}>
                        Fulfill Order
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FulfillOrderModalForm;