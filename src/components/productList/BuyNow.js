import React from 'react';
import {Box,Typography,Button,Container} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyle = makeStyles(theme =>({
    container:{
        width:444,
       backgroundColor:theme.palette.common.backgroundGrey,
       margin:"50px auto 0px auto",
       padding:"16px 0",
       borderTopLeftRadius:20,
       borderTopRightRadius:20,
    },
    contentContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between !important",
        "& button":{
            width:162,
            height:52,
            borderRadius:10,
            "& p":{
                color:theme.palette.background.default,
                letterSpacing:3,
                textTransform:"capitalize"
             
            }
        }
    },
    items:{
        fontSize:16,
    },
    totalPrice:{
        fontSize:30,
        fontWeight:500,
        color:theme.palette.primary.main,
    }
}))

const BuyNow = () => {
    const classes = useStyle()
    return (
        <Box className={classes.container}>
            <Container maxWidth="xs" className={classes.contentContainer}>
                <Box >
                    <Typography className={classes.items}>Total Price for 4 item(s)</Typography>
                    <Typography className={classes.totalPrice}>₹‭99,241‬</Typography>
                </Box>
                <Button variant="contained" color="primary" >
                    <Typography >Buy Now</Typography>
                </Button>
            </Container>
            
        </Box>
    )
}

export default BuyNow
