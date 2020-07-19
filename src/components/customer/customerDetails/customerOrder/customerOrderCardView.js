import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import fedex from '../../../../constants/images/FEDEX-logo.png';
import { CalenderIcon, TimerIcon, ShippedIcon, PackageIcon, UpdateOrderIcon, RepeatOrderIcon} from '../../../../constants/images/customerOrderCardIcon';

const CustomerOrderCardView = (props) => {
    const orderData = props.order;
    const [ orderActionItemView, setOrderActionItemView ] = React.useState(false);
    const handleShowOrderActionItem = () => {
        setOrderActionItemView(!orderActionItemView);
    }
    return(
        <Paper elevation={3} className="customerOrderCardContainer">
             <Grid container spacing={3} className={`customerOrderCard ${orderActionItemView ? "customerOrderCardWithAction" : ''}`}>
                <Grid item xs={12} className="customerOrderFirstDetails" onClick={handleShowOrderActionItem}>
                    <p>{`ORDER #${orderData.orderId}`}</p>
                    <div className="verticalLine"></div>
                    <div className="customerOrderShippingLogo"> 
                        <img src={fedex} alt="shippingmethod" />
                    </div>
                    <div className="verticalLine"></div>
                    <a href="/">{orderData.tracking}</a>
                    <div className="verticalLine"></div>
                    <p className="partnerTag">PURE COLLECTIVES</p>
                    <p className="partnerTag orderStatusTag">PENDING</p>
                </Grid>
                <Divider  orientation="vertical" />
                <Grid item xs={9} className="customerOrderSecondDetails customerOrderFirstDetails">
                    <p className="customerHeadTag">
                        {"Mazikeen Smith"}
                        <span>&bull;</span>
                        {"01/08/1980"}
                        <span>&bull;</span>
                        {"maze_luxlife@gmailcom"}
                        <span>&bull;</span>
                        {"(310) 888 2222956"}
                    </p>  
                    <p className="customerHeadTag">
                        {"1426 Montana Ave, Unit 2, California 90403, United States of America"}
                    </p>   
                </Grid>
                <Grid item xs={3} className="customerOrderSecondDetails customerOrderFirstDetails">
                    <p className="orderInfoTag">{"$530.85"}</p>
                    <p className="orderInfoTag">{"12 Items"}</p>
                </Grid>
                { orderActionItemView ? 
                    <>
                        <Divider  orientation="vertical" />
                        <Grid item xs={12} className="customerOrderAction" onClick={props.handleOrderModalView}>
                            <div className="customerOrderActionItem">
                                {CalenderIcon}
                                <p>{"05/03/2020"}</p>
                            </div>
                            <div className="customerOrderActionItem">
                                {TimerIcon}
                                <p>{"09:25 PM"}</p>
                            </div>
                            <div className="customerOrderActionItem">
                                {ShippedIcon}
                                <p>{"05/03/2020"}</p>
                            </div>
                            <div className="customerOrderActionItem">
                                {PackageIcon}
                                <p>{"05/03/2020"}</p>
                            </div>
                            <div className="customerOrderActionItem">
                                {UpdateOrderIcon}
                                <p>{"Update Order"}</p>
                            </div>
                            <div className="customerOrderActionItem">
                                {RepeatOrderIcon}
                                <p>{"Repeat Order"}</p>
                            </div>
                        </Grid> 
                    </> : ''
                }
                        
            </Grid>
        </Paper>
    )
}

export default CustomerOrderCardView;