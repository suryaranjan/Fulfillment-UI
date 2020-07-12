import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from '@material-ui/core/Avatar';
import ProfileLogo from '../../constants/images/ProviderImg.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ProfileIconDropdownMenu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleProfileMenuOpen = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    return(
        <>
            <div className="profilePic">
                <Avatar alt="profile" src={ProfileLogo} aria-controls="simple-menu" aria-haspopup="true" onClick={handleProfileMenuOpen}/>
                <ExpandMoreIcon onClick={handleProfileMenuOpen}/>
            </div>
            <Menu
                id="profilePicMenu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default ProfileIconDropdownMenu;