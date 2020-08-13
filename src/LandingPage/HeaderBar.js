import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Logo from '../Assets/Logo/HeaderLogo.svg'
import Button from '@material-ui/core/Button'
import Translate from "./Translate";

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        background: '#F2F2F2',
        boxShadow: '0px 0px',
        paddingLeft: 40,
        paddingRight: 20,
        [theme.breakpoints.down('md')]: {
            padding: 0,
            paddingLeft: 20,
        },
    },
    grow: {
        flexGrow: 1,
    },
    logo: {
        height: 70,
        [theme.breakpoints.down('md')]: {
            height: 50,
            marginTop:0,
        },
        [theme.breakpoints.down('xs')]: {
            width:130,
            marginTop:-5
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    button: {
        textTransform: "none",
        marginRight: 20,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif;',
        color: '#616161',
        [theme.breakpoints.down('xs')]: {
            fontSize:15,
        },
    },
    siginInButton: {
        background: '#ffbc6d',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize:10,
        },
    },
    siginUpButton:{
        color: '#ffbc6d',
        fontSize: 24,
        fontWeight: 'bold',
        width:'100%',
        [theme.breakpoints.down('xs')]: {
            fontSize:10,
        },

    },
    mobileMenuIcon: {
        color: 'black',
        [theme.breakpoints.down('xs')]: {
            fontSize:20,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems:'flex-start'
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuItem: {
        padding: 0,
    },
    desktopLogoContainer:{
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    mobileLogoContainer:{
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            alignItems:'flex-start',
            justifyContent:'center'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    }
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
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuItem}>
                <a href="#howitwork" style={{width: '100%', textDecoration: 'none'}}><Button className={classes.button}
                                                                                             fullWidth>How it
                    work?</Button></a>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} className={classes.menuItem}>
                <a href="#faq" style={{width: '100%', textDecoration: 'none'}}> <Button className={classes.button}
                                                                                        fullWidth>FAQ</Button></a>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.container}>
                <Toolbar style={{alignItems:'flex-start'}}>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuOutlinedIcon className={classes.mobileMenuIcon} fontSize={"large"}/>
                        </IconButton>
                    </div>

                    <div className={classes.desktopLogoContainer}>
                        <img src={Logo} alt="React Logo" className={classes.logo}/>
                    </div>

                    <div className={classes.grow}>
                        <div className={classes.mobileLogoContainer}>
                            <img src={Logo} alt="React Logo" className={classes.logo}/>
                        </div>
                    </div>

                    <div className={classes.sectionDesktop}>
                        <a href="#howitwork" style={{textDecoration: 'none'}}><Button className={classes.button}>How It
                            works?</Button></a>
                        <a href="#faq" style={{textDecoration: 'none'}}><Button className={classes.button}>FAQ</Button></a>
                    </div>

                    <Translate/>

                    <div style={{paddingTop:5}}>
                        <div>
                            <Button className={classes.siginInButton} variant={"contained"}>SIGN IN</Button>
                        </div>
                        <a href="#" style={{ textDecorationColor: '#ffbc6d'}}><Button className={classes.siginUpButton}>SIGN UP</Button></a>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}