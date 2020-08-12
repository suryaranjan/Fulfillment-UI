import React from 'react';
import Grid from '@material-ui/core/Grid';

const OrderDetailsProductTab = (props) => {

    const productLotName = () => {
        let lots = props.product.lot.map(lot => {
            return lot.LotNumber;
        })
        return lots.join(', ');
    }
    return (
        <Grid item xs={6} className={`productTab fulfillmentProductTab `}>
            <div>
                <div className="productDetails productName">
                    <span>Product Name</span>
                    <p>{props.product.productName}</p>
                </div>
                <div className="productDetails">
                    <span>SKU</span>
                    <p>{`232234`}</p>
                </div>
                <div className="productDetails">
                    <span>Qty</span>
                    <p>{props.product.qty}</p>
                </div>
                <div className={`productDetails `}>
                    <span>Lot#</span>
                    <p >
                        {productLotName() }
                    </p>
                </div>
            </div>
        </Grid>
    )
}

export default OrderDetailsProductTab;