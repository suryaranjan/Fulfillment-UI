import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import { useLocation} from "react-router-dom";
import {CUSTOMER_DETAILS} from '../../constants/routesConstant';
import './footer.css';

const Footer = (props) => {
    const [shortFooter, setShortFooter] = React.useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === CUSTOMER_DETAILS ){
            setShortFooter(true);
        }else{
            setShortFooter(false);
        }
      }, [location]);
    return(
        < Paper elevation={3} square={true} className={`footer ${shortFooter ? 'normal' : 'short'}`} >
            <p>Copyright <span>&#169;</span> 2020 </p>
            <div className="verticalLine"></div>
            <p> MedQuest</p>
        </Paper>
        
    )
}

export default Footer;