import React from 'react';
import {Box,Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import homeMain from '../../assets/home-main.png'

const useStyle = makeStyles((theme)=>({
    container:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        padding:"16px 0"
    },
    cartContainer:{
        width:347,
        height:220,
        backgroundColor:theme.palette.background.default,
        boxShadow:`0 0 10px 10px ${theme.palette.common.backgroundGrey}`,
        borderRadius:10,
    },
    contentContainer:{
        padding:20,
        display:"flex",
        flexDirection:"column",
    },
    collection:{
        fontSize:10,
        paddingTop:10,
        paddingBottom:10
    },
    newArrivale:{
        position:"relative",
        width:121,
        height:49,
    },
    new:{
        fontSize:30,
        color:theme.palette.primary.main,
        fontWeight:"bold",
        
    },
    arrival:{
        fontSize:30,
        fontWeight:"bold",
        position:"absolute",
        top:25,
    },
    discripationBox:{
        width:131,
        paddingTop:16,
        paddingBottom:16,
        "& p":{
        fontSize:8, 
        }
    },
    shopNow:{
        fontSize:10,

    },
    underLine:{
        paddingTop:5,
        borderBottom:`2px solid ${theme.palette.primary.main}`,
        width:45,
    },
    imageContainer:{
        width:215,
        height:115,
        position:"absolute",
        top:47,
        right:30,
        overflow:"hidden",
        "& img":{
            width:"100%",
            height:"100%",
            objectFit:"cover"
        },
        
    },
    shopNowContainer:{
        display:"flex",
        alignItems:"flex-end",
        justifyContent:"space-between",
        
    },
    dot1:{
        height:2,
        width:10,
        borderRadius:10,
        border:`1px solid ${theme.palette.primary.main}`
    },
    dot2:{
        width:10,
        borderBottom:`2px solid ${theme.palette.primary.main}`
    }
}))

const NewArrivale = () => {
    const classes = useStyle()
    return (
        <Box className={classes.container}>
            <Box className={classes.cartContainer}>
                <Box className={classes.contentContainer}>
                    <Typography className={classes.collection}>Collection</Typography>
                    <Box className={classes.newArrivale}>
                    <Typography className={classes.new}>
                        New
                    </Typography>
                    <Typography  className={classes.arrival}>Arrival</Typography>
                    </Box>
                    
                    <Box className={classes.discripationBox}>
                    <Typography className={classes.discripation}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Typography>
                    </Box>
                    <Box className={classes.shopNowContainer}>
                    <Box>
                    <Typography className={classes.shopNow}>Shop NOW</Typography>
                    <Typography className={classes.underLine}></Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                    <Typography className={classes.dot1} mr={1}></Typography>
                    <Typography className={classes.dot2} mr={1}></Typography>
                    <Typography className={classes.dot2} mr={1}></Typography>
                    <Typography className={classes.dot2} mr={1}></Typography>
                    </Box>
                    
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                    
                    
                    </Box>

                </Box>
            </Box>
            <Box className={classes.imageContainer}>
                <img src={homeMain} alt="product"/>
            </Box>
        </Box>
    )
}

export default NewArrivale
