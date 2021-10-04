import React from 'react';
import {Box} from '@mui/material';
import {makeStyles} from '@mui/styles'
import { ReactSVG } from "react-svg";
import menu from '../../assets/icons/menu.svg';
import search from '../../assets/icons/search.svg';
import profile from '../../assets/profile.png'

const useStyle = makeStyles(theme =>({
    container:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"16px 0"
    },
    svg:{
        paddingRight:8
    },
    profile:{
        width:30,
        height:30,
        borderRadius:50,
        objectFit:"cover"
    }

}))

const SearchBar = () => {
    const classes = useStyle()
    return (
        <Box className={classes.container}>
            <ReactSVG src={menu} />
            <Box display="flex" alignItems="center">
                <ReactSVG src={search}  className={classes.svg}/>
                <img src={profile}  className={classes.profile} alt="profile"/>
                
            </Box>
        </Box>
    )
}

export default SearchBar



