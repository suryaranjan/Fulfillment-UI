import React from 'react';
import Paper from '@material-ui/core/Paper';
import './footer.css';

const Footer = (props) => {

    return(
        < Paper elevation={3} square={true} className="footer" >
            <p>Copyright <span>&#169;</span> 2020 </p>
            <div className="verticalLine"></div>
            <p> MedQuest</p>
        </Paper>
        
    )
}

export default Footer;