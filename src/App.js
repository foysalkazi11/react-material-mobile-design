import React,{useState} from 'react';
import {Box,Tabs,Tab,Container} from '@mui/material';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductList from './components/productList/ProductList';

const tabs =[
  {tabName:"Home"},
  {tabName:"Discripation"},
  {tabName:"List"},
]

function App() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container >
      <Box display="flex" alignItems="center" justifyContent="center" py={2}>
        <Tabs value={value} onChange={handleChange}>
        {tabs?.map((item,index) =>{
          return(
            <Tab key={index} label={item?.tabName} value={index} />
          )
        })}
        </Tabs>
      </Box>
      <Box>
        {value === 0 && <Home />}
        {value === 1 && <ProductDetails />}
        {value === 2 && <ProductList />}
      </Box>
      
    </Container>
  );
}

export default App;
