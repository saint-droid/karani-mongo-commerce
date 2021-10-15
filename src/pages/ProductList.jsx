import React, {useState} from 'react'
import { useLocation } from 'react-router';
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
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const[filters, setFilters] = useState({});
    const[sort, setSort] = useState("newest");

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        })
    
    };
    //console.log(filter)
    return (
        <Container>
            <Anouncement/>
            <Navbar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter products:</FilterText>
                    <Select name="color" onChange={handleFilter}>
                       <Option disabled >color</Option>
                       <Option>black</Option>
                        <Option>baige</Option>
                        <Option>blue</Option>
                        <Option>navy blue</Option>
                        <Option>White</Option>

                    </Select>
                    <Select name="size" onChange={handleFilter}>
                       <Option disabled >Size</Option>
                       <Option>small</Option>
                        <Option>medium</Option>
                        <Option>large</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>

                    </Select>
                </Filter>
                <Filter><FilterText>Sort products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                       <Option  value="newest">NEWEST</Option>
                       <Option value="asc">PRICE (asc)</Option>
                        <Option value="desc">PRICE (desc)</Option>
                        
                    </Select>
                </Filter>
                
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
