import React from 'react';
import {Box, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles'
import leftArrow from '../../assets/icons/left-arrow.svg';
import more from '../../assets/icons/more-horizontal.svg';
import { ReactSVG } from 'react-svg';

const useStyle = makeStyles (theme =>({
    cart:{
        fontSize:18,
        fontWeight:500
    }
}))


const Navigation = () => {
    const classes = useStyle()
    return (
        <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
            <ReactSVG src={leftArrow} />
            <Typography className={classes.cart}>Cart</Typography>
            <ReactSVG src={more} />
        </Box>
    )
}

export default Navigation
