import React from 'react';
import {Container} from '@mui/material';
import StatusBar from '../statusBar/StatusBar';
import Navigation from './Navigation';
import List from './List';
import BuyNow from './BuyNow'

const ProductList = () => {
    return (
        <>
        <Container maxWidth="xs" >
            <StatusBar />
            <Navigation />
            <List />
            
        </Container>
        <BuyNow /> 
        </>
    )
}

export default ProductList;


