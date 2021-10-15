import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
const Container = styled.div`

`;

const ProductTitles = styled.div`
display:flex;
padding:0 20px;
justify-content:space-between;
`;
const Title = styled.div`
font-size:30px;
font-weight:600;
${mobile({
    fontSize:"19px"
})}

`;
const TitleItem = styled.a`
text-decoration:underline;
color:blue;
cursor:pointer;
`;
const ProductTitle = () => {
    return (
        <Container>
           <ProductTitles>
                <Title>Favourite products</Title>
                <TitleItem>View all products</TitleItem>
            </ProductTitles> 
        </Container>
    )
}

export default ProductTitle
