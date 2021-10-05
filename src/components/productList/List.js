import React from 'react';
import {Box,Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import product1 from '../../assets/list1.png';
import product3 from '../../assets/list3.png';
import product4 from '../../assets/list4.png';
import product2 from '../../assets/home-chair1.png';
import trash from '../../assets/icons/trash-2.svg'
import { ReactSVG } from 'react-svg';

const productList = [
    {
        title:"Nashville Armchair",
        quantity:1,
        color:"Royal blue",
        price:"$1,895",
        image:product1
    },
    {
        title:"Nashville Armchair",
        quantity:1,
        color:"blossom pink",
        price:"$1,512",
        image:product2
    },
    {
        title:"ellington office chair",
        quantity:1,
        color:"Royal blue",
        price:"$13,834",
        image:product3
    },
    {
        title:"chaise corner sofa",
        quantity:1,
        color:"Royal blue",
        price:"$82,000",
        image:product4
    },
]

const useStyle = makeStyles(theme => ({
    listContainer:{
        width:366,
        height:131,
        display:"flex",
        alignItems:"center",
        margin:"25px auto",
        backgroundColor:theme.palette.background.default,
        boxShadow:`10px 10px 10px ${theme.palette.common.backgroundGrey}`,
        borderRadius:20,
        "& img":{
            width:66,
            height:84,
            objectFit:"cover",
            padding:24
        }
    },
    title:{
        fontSize:18,
        fontWeight:500
    },
    discripation:{
        fontSize:14,
        color:theme.palette.common.lightGrey
    },
    price:{
        fontSize:16,
        color:theme.palette.primary.main,
        fontWeight:500
    },
    remove:{
        fontSize:14,
        color:theme.palette.primary.main,
        letterSpacing:2,
        fontWeight:500
    },
    deleteIcon:{
        color:theme.palette.primary.main,
        paddingRight:5,
    }
}))



const List = () => {
    const classes = useStyle()
    return (
        <>
        {productList?.map((item,index)=>{
            return(
                <Box className={classes.listContainer} key={index}>
                    <img src={item?.image} alt="productImage" />
                    <Box style={{width:"100%"}} pr={1}>
                        <Box display="flex" justifyContent="space-between" >
                        <Typography className={classes.title}>{item?.title}</Typography>
                        <Typography className={classes.price}>{item?.price}</Typography>
                        </Box>
                        <Typography className={classes.discripation}>Quantity :  {item?.quantity}</Typography>
                        <Typography className={classes.discripation}>Color : {item?.color}</Typography>
                        <Box display='flex' alignItems="center">
                            <ReactSVG src={trash} className={classes.deleteIcon} />
                            <Typography className={classes.remove}>Remove</Typography>
                        </Box>
                    </Box>
            
                </Box>
            )
        })}
        </>
    )
}

export default List
