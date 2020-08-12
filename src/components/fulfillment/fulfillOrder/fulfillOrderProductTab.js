import React from 'react';
import UndoIcon from '@material-ui/icons/Undo';
import Grid from '@material-ui/core/Grid';

const FulfillmentOrderProductTab = (props) => {

    const productLotName = () => {
        let lots = props.product.LotNumbers.map(lot => {
            if(lot.Quantity > 0){
                return lot.LotNumber;
            }
            return;
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
                <div className={`productDetails lotSection`}>
                    <span>Lot#</span>
                    <p className={`${props.product.fulfilledQuantity > 0 ? '' : 'fade'}`}>
                        {props.product.fulfilledQuantity > 0 ? productLotName() : 'Scan to read Code'}
                    </p>
                </div>
                <div className="productDetails undoAction"  
                    style={{visibility: props.product.fulfilledQuantity > 0 ? 'visible': "hidden"}}
                    onClick={props.undoLotNumbers}>
                    <UndoIcon/>
                    <p>Redo Scan</p>
                </div> 
            </div>
        </Grid>
    )
}

export default FulfillmentOrderProductTab;