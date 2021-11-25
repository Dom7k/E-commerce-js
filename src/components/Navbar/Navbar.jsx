import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuIcon, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/xlogo.svg';
import useStyles from './styles'



const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit' >
                <Toolbar>
                    <Typography component={Link} to="/">
                        <img src={logo} alt='Commerce' height='25px'  className={classes.image} />  
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button} >
                        <IconButton component={Link} to="/cart" aria-label='show cart icon' color="inherit" >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
               </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
