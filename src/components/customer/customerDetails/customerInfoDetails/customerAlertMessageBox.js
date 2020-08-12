import React from 'react';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const alerts = [
    "Do not Send Product with less than 6 months Shelf Life.Always Communicate manufactured dates (if close to 6 months).",
    "Practioner Acccount (md)- License# A100787",
    "Alpha Lipoic Acid, Berberine, CoQ10 200mg, Daily Multiple Capsules, Daily Multiple Tablets, DHEA SR 10mg, DHEA SR 15mg, DHEA SR 25mg, DHEA SR 50mg, Melatonin SR 3mg, Melatonin SR 5mg, Melatonin SR 10mg, Pregnenolone SR 100mg, Turmeric, Vars Glutathione, Vitamin B12 Spray, Vitamin C, Vitamin D3 5,000IU",
    "Office Manager is Caroline",
    "Alpha Lipoic Acid, Berberine, CoQ10 200mg, Daily Multiple Capsules, Daily Multiple Tablets, DHEA SR 10mg, DHEA SR 15mg, DHEA SR 25mg, DHEA SR 50mg, Melatonin SR 3mg, Melatonin SR 5mg, Melatonin SR 10mg, Pregnenolone SR 100mg, Turmeric, Vars Glutathione, Vitamin B12 Spray, Vitamin C, Vitamin D3 5,000IU",
    "Office Manager is Caroline",
    "Alpha Lipoic Acid, Berberine, CoQ10 200mg, Daily Multiple Capsules, Daily Multiple Tablets, DHEA SR 10mg, DHEA SR 15mg, DHEA SR 25mg, DHEA SR 50mg, Melatonin SR 3mg, Melatonin SR 5mg, Melatonin SR 10mg, Pregnenolone SR 100mg, Turmeric, Vars Glutathione, Vitamin B12 Spray, Vitamin C, Vitamin D3 5,000IU",
    "Office Manager is Caroline"
]

const CustomerAlertMessageBox = (props) => {
    const [showAlertBox, setShowAlertBox] = React.useState(false);
    const renderingAlert = () => {
        return alerts.map( (data, index) => {
            return (
                < >
                    <div key={index} className="customerAlertMessageBox">
                        <p>
                            {data}
                        </p>
                        <MoreVertIcon/>
                    </div>
                    <Divider key={index}/>
                </>
            )
        })  
    }

    return (
        <>
        {
            (!props.orderView || showAlertBox  ) ?
            <div className={`customerAlertMessage ${showAlertBox ? 'customerOrderAlertBox' : ''}`}>
                <div className="customerAlertHeader">
                    <div>
                        <AnnouncementIcon/>
                        <h6>ALERTS</h6>
                    </div>
                    {showAlertBox ? <CompareArrowsIcon onClick={() => { setShowAlertBox(false); props.setOrderAlertView(false)}}/> : '' }
                </div>
                {renderingAlert()}
            </div> :
            <div className="customerAlertMessage">
                <div className={`customerAlertHeader ${props.orderView ? 'customerOrderAlertHeader' : ''}`} onClick={() => { setShowAlertBox(true); props.setOrderAlertView(true)}}>
                    <AnnouncementIcon/>
                </div>
            </div>
        }
        </>
    )
}

export default CustomerAlertMessageBox;