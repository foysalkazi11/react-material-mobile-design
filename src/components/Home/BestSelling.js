import React from 'react';
import {Box,Typography,Grid} from '@mui/material';
import {makeStyles} from '@mui/styles';
import chair1 from '../../assets/home-chair1.png';
import chair2 from '../../assets/home-chair2.png';
import bookmark from '../../assets/icons/bookmark.svg';
import { ReactSVG } from "react-svg";

const productList = [
    {
        title:"Wingback Chair",
        dis:"modern saddle arms and wooden legs.",
        price:"₹1,512",
        img:chair1
    },
    {
        title:"Nashville armchair",
        dis:"curved with two tiers of comfort. ",
        price:"₹1,895",
        img:chair2
    },
]

const useStyle = makeStyles(theme =>({
    card:{
        width:150,
        height:250,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"20px 16px",
        borderRadius:10,
        background:theme.palette.background.default,
        boxShadow:`0 0 5px 5px ${theme.palette.common.backgroundGrey}`,
        position:"relative",
        "& img":{
            width:119,
            height:119,
            objectFit:"cover",
            paddingBottom:40,
        },
       
    },
    title:{
        fontSize:"14px",
        fontWeight:500,
        alignSelf:"flex-start",
        
    },
    discripation:{
        fontSize:10,
        alignSelf:"flex-start",
        paddingBottom:12
    },
    price:{
        fontSize:18,
        fontWeight:"bold",
        color:theme.palette.primary.main,
        alignSelf:"flex-start"
    },
    bestSelling:{
        fontSize:18,
        fontWeight:"bold",
        padding:"16px 0",
        letterSpacing:2,
    },
    bookmarkBox:{
        width:34,
        height:34,
        backgroundColor:theme.palette.primary.main,
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:-10,
        right:-10
    },
    bookmarkLogo:{
        "& svg ":{
            width:15,
             height:15,
             color:theme.palette.background.default
        }
        
    }
}))

const BestSelling = () => {
    const classes = useStyle()
    return (
        <Box py={2}>
        <Box >
            <Typography className={classes.bestSelling}>Best Selling</Typography>
        </Box>
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="center">
            {productList?.map((item,index)=>{
                return(
                <Grid item xs={6} key={index}>
                <Box className={classes.card}>
                    <img src={item?.img} alt="product" />
                    <Typography className={classes.title}>{item?.title}</Typography>
                    <Typography className={classes.discripation}>{item?.dis}</Typography>
                    <Typography className={classes.price}>{item?.price}</Typography>
                    <Box className={classes.bookmarkBox}>
                        <ReactSVG src={bookmark} className={classes.bookmarkLogo} />
                    </Box>
                </Box>
                </Grid>
                )
            })}
        </Grid>
        </Box>
    )
}

export default BestSelling
