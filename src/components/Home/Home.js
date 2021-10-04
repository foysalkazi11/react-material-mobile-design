import React from 'react';
import {Container} from '@mui/material';
import {makeStyles} from '@mui/styles'
import NewArrivale from './NewArrivale';
import BestSelling from './BestSelling';
import StatusBar from '../statusBar/StatusBar';
import SearchBar from '../searchBar/SearchBar';
import png from '../../assets/RectangleHome.png';
import HomeFooter from './HomeFooter'

const useStyle = makeStyles(theme =>({
    homeContainer:{
        backgroundImage:`url(${png})`,
        backgroundRepeat:"no-repeat",
    }
}))

const Home = () => {
    const classes = useStyle()
    return (
        <Container maxWidth="xs" className={classes.homeContainer}>
            <StatusBar />
            <SearchBar />
            <NewArrivale />
            <BestSelling />
            <HomeFooter />
        </Container>
    )
}

export default Home
