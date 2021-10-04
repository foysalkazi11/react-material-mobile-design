import React from 'react';
import {Box} from '@mui/material';
import {makeStyles} from '@mui/styles'
import bag from '../../assets/icons/bag.svg';
import home from '../../assets/icons/Home.svg';
import bookmark from '../../assets/icons/bookmark.svg';
import { ReactSVG } from 'react-svg';
import { padding } from '@mui/system';

const useStyle = makeStyles(theme =>({
    footerContainer:{
        width:"100%",
        height:64,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        position:"relative",
        marginTop:50,
    },
    circuleContainer:{
        position:"absolute",
        top:-30,
        left:"40%",
    },

    circule:{
        width:60,
        height:60,
        backgroundColor:theme.palette.primary.main,
        borderRadius:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position: "relative",
        
        "& svg ":{
            width:15,
             height:15,
             color:theme.palette.background.default
        },

        '&::after':{
            content: '',
            position: "absolute",
            top: 0,
            right: 0,
            border: "5px solid gray",
            borderLeft: 0,
            borderBottomRightRadius: 100,
            borderTopRightRadius: 100,
            width: 55,
            height: "calc(100% + 10)",
            transform: "translate(15, -15)",
        }
    },
    
}))

const HomeFooter = () => {
    const classes = useStyle()
    return (
        <Box className={classes.footerContainer}>
            <ReactSVG src={home} />
           
            <Box className={classes.circule}>
            <ReactSVG src={bookmark} />
            </Box>
            
            <ReactSVG src={bag} />
        </Box>
    )
}

export default HomeFooter
