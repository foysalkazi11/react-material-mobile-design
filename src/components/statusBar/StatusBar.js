import React from 'react';
import {Box} from '@mui/material';
import {makeStyles} from '@mui/styles'
import { ReactSVG } from "react-svg";
import battery from '../../assets/icons/Battery.svg';
import time from '../../assets/icons/Time.svg';
import wifi from '../../assets/icons/Wifi.svg';
import mobileNetwork from '../../assets/icons/CellularConnection.svg';

const useStyle = makeStyles(theme =>({
    container:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"16px 0"
    },
    svg:{
        paddingRight:5
    }
}))

const StatusBar = () => {
    const classes = useStyle()
    return (
        <Box className={classes.container}>
            <ReactSVG src={time} />
            <Box display="flex" justifyItems="center">
                <ReactSVG src={mobileNetwork}  className={classes.svg}/>
                <ReactSVG src={wifi}  className={classes.svg}/>
                <ReactSVG src={battery} />
            </Box>
        </Box>
    )
}

export default StatusBar
