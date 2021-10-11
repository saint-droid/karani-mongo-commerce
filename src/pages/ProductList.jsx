import React from 'react'
import styled from 'styled-components' 
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../Responsive';



const Container = styled.div``;
const Title = styled.h1`
margin:20px;
`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`;
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({
 marginRight:"0"
})}
`;
const Filter = styled.div`
margin:20px;
${mobile({
    margin:"0 20px",
    display:"flex",
    flexDirection:"column"
})}
`;
const Select = styled.select`
padding:10px;
margin-right:20px;
${mobile({
    margin:"10px 0"
})}
`;
const Option = styled.option`

`;
const ProductList = () => {
    return (
        <Container>
            <Anouncement/>
            <Navbar/>
            <Title>Hoodies</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter products:</FilterText>
                    <Select>
                       <Option disabled selected>color</Option>
                       <Option>black</Option>
                        <Option>baige</Option>
                        <Option>blue</Option>
                        <Option>navy blue</Option>
                        <Option>White</Option>

                    </Select>
                    <Select>
                       <Option disabled selected>Size</Option>
                       <Option>small</Option>
                        <Option>medium</Option>
                        <Option>large</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>

                    </Select>
                </Filter>
                <Filter><FilterText>Sort products:</FilterText>
                <Select>
                       <Option  selected>NEWEST</Option>
                       <Option>PRICE (asc)</Option>
                        <Option>PRICE (desc)</Option>
                        
                    </Select>
                </Filter>
                
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
