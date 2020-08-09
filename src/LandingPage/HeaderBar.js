
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Logo from '../Assets/Logo/HeaderLogo.svg'
import Button from '@material-ui/core/Button'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    container:{
        flexGrow: 1,
        background:'#F2F2F2',
        boxShadow:'0px 0px',
        paddingLeft:40,
        paddingRight: 20,

    },
    grow: {
        flexGrow: 1,
    },
    logo:{
        height:70,
        [theme.breakpoints.down('md')]: {
            height:50,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    button:{
        textTransform:"none",
        marginRight:20,
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'Roboto, sans-serif;',
        color:'#616161'
    },
    signButton:{
        background:'#ffbc6d',
        color:'white',
        marginRight:10,
        fontSize:24,
        fontWeight:'bold'
    },
    mobileMenuIcon:{
        color:'black'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button className={classes.button}>How It works</Button>
            </MenuItem>
            <MenuItem>
                <Button className={classes.button}>FAQ</Button>
            </MenuItem>
            <MenuItem>
                <Button className={classes.button}>
                    EN
                    <ArrowDropDownIcon />
                </Button>
            </MenuItem>

            <MenuItem>
                <Button className={classes.signButton} variant={"contained"}>SIGN IN</Button>
            </MenuItem>
            <MenuItem>
                <Button className={classes.signButton} variant={"contained"}>SIGN UP</Button>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.container}>
                <Toolbar >
                    <img src={Logo} alt="React Logo" className={classes.logo}/>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button className={classes.button}>How It works</Button>
                        <Button className={classes.button}>FAQ</Button>
                        <Button className={classes.button}>
                            EN
                            <ArrowDropDownIcon />
                        </Button>
                        <Button className={classes.signButton} variant={"contained"}>SIGN IN</Button>
                        <Button className={classes.signButton} variant={"contained"}>SIGN UP</Button>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuOutlinedIcon className = {classes.mobileMenuIcon}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}