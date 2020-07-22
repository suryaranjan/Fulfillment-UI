import React from 'react';
import Grid from '@material-ui/core/Grid';

const FulfillmentOrderProductTab = (props) => {

    const productLotName = () => {
        let lots = props.product.LotNumbers.map(lot => {
            return lot.LotNumber;
        })
        return lots.join(', ');
    }
    const fulfillmentStatus = ((props.product.fulfilling === 'completed') ? 'fulfilledProduct' 
    : ( props.product.fulfilling === 'inProgress' ? 'fulfillInprogress' : ''));

    return (
        <Grid item xs={6} className={`productTab fulfillmentProductTab ${fulfillmentStatus}`}>
            <div>
                <div className="productDetails productName">
                    <span>Product Name</span>
                    <p>{props.product.ProductName}</p>
                </div>
                <div className="productDetails">
                    <span>SKU</span>
                    <p>{`232234`}</p>
                </div>
                <div className="productDetails">
                    <span>Qty</span>
                    <p>{props.product.Quantity}</p>
                </div>
                <div className={`productDetails `}>
                    <span>Lot#</span>
                    <p className={`${props.product.fulfilledQuantity > 0 ? '' : 'fade'}`}>
                        {props.product.fulfilledQuantity > 0 ? productLotName() : 'Scan to read Code'}
                    </p>
                </div>
            </div>
        </Grid>
    )
}

export default FulfillmentOrderProductTab;