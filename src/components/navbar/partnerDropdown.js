import React, { useState } from 'react';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BusinessIcon from '@material-ui/icons/Business';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import PureCollectiveLogo from '../../constants/images/PureCollectivesLogo.svg';
import emedplus from '../../constants/images/emedplus.png';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    paper: {
      padding: theme.spacing(1.5),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: '100%',
      height: 20,
    },
    img: {
      margin: 'auto',
      display: 'block',
    },
  }));

const partners = [
    {
        name: "NutraScriptives",
        subName: 'Business',
        icon: null,
        value: 'all'
    },
    {
        name: "Pure Collectives",
        subName: 'Pure Collectives',
        icon: PureCollectiveLogo,
        value: 'pc'
    },
    {
        name: "EMedPlus",
        subName: 'emedplus',
        icon: emedplus,
        value: 'emp'
    }
]

const PartnerDropdownMenu = (props) => {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = useState(partners[0]);
    const [dropdownOpen, setDropdown] = useState(false);

    const handleChange = (value) => {
        setSelectedOption(value);
    }

    const handleOpenDropdown = () => {
        setDropdown(true);
    }

    const handleCloseDropdown = () => {
        setDropdown(false);
    }

    const menuItems = () => {
        return partners.map( partner => {
            return ( 
                    <div className="partnerMenuItem" key={partner.value} onClick={() => handleChange(partner)}>
                        <MenuItem value={partner.value}  >
                            <Paper className={classes.paper}>
                                <Grid container spacing={0}>
                                    <Grid item xs={4}>
                                        <ButtonBase className={classes.image}>
                                        { partner.icon ?
                                            <img className={classes.img} alt="complex" src={partner.icon} />
                                            :
                                            <BusinessIcon/>}
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container className="partnerMenuItemDetails">
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs className="partnerDetails">
                                                <Typography variant="body2" color="textSecondary">
                                                    {partner.subName}
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle1">
                                                    {partner.name}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </MenuItem>
                        <Divider />
                    </div>
                )
        });
    }

    return(
        <>
            <div className={`partnerMenuItem selectedItem ${classes.root}`} onClick={handleOpenDropdown}>
                <Paper className={classes.paper} >
                    <Grid container spacing={1}>
                        <Grid item xs={4} className={selectedOption.icon ? '' : "businessIcon"}>
                            { selectedOption.icon ?
                                <img className={classes.img} alt="complex" src={selectedOption.icon} />
                                :
                            <BusinessIcon/>}
                        </Grid>
                        <Grid item xs={12} sm container className="partnerSelectedDetails">
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs className="partnerDetails selectedItemDetails">
                                    <Typography variant="body2" color="textSecondary">
                                        {selectedOption.subName}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        {selectedOption.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <ExpandMoreIcon className="expandIcon"/>
                    </Grid>
                </Paper>
            </div>
            <MuiThemeProvider>
                <Select
                    open={dropdownOpen}
                    onOpen={handleOpenDropdown}
                    onClose={handleCloseDropdown}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedOption}
                    className="partnerSelect"
                    multiple={false}
                    native={false}
                >
                    {menuItems()}
                </Select>
            </MuiThemeProvider>
        </>
    )
}

export default PartnerDropdownMenu;