import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuIcon, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/xlogo.svg';
import useStyles from './styles'



const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit' >
                <Toolbar>
                <img src={logo} alt='Commerce' height='25px'  className={classes.image} />
                    <div className={classes.grow} />
                    <div className={classes.button} >
                        <IconButton aria-label='show cart icon' color="inherit" >
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
               </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
