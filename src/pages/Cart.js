import React from 'react'
import styled from 'styled-components'
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import slider from "../assets/slider1.jpg"
import { Add, Remove } from '@material-ui/icons';
import cat from "../assets/hoodie1.jpg"
import { mobile } from '../Responsive';


const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
${mobile({
    padding:"10px"
})}
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type === "filled" && "none"};
background-color:${props=>props.type === "filled" ? "black" : "transparent"};
color:${props=>props.type === "filled" && "white"};

`;
const TopTexts= styled.div`
${mobile({
    display:"none"
})}
`;
const TopText= styled.span`
text-decoration:underline;
cursor:pointer;
margin:0 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({
    flexDirection:"column"
})}
`;
const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({
    flexDirection:"column"
})}
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:200px;
margin-right:10px;
`;
const Details = styled.div`
padding;20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color};
`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const ProductAmountCont = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({
    margin:"5px 15px"
})}
`;
const ProductPrice= styled.div`
font-size:30px;
font-weight:200;
${mobile({
    marginBottom:"20px"
})}
`;
const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
${mobile({
    margin:"5px"
})}
`;
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`;
const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItem = styled.div`
margin:30px 0;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};

`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
border:none;
cursor:pointer;

`;
const Cart = () => {
    return (
        <Container>
            <Anouncement/>
            <Navbar/>
            <Wrapper>
                <Title>Your shopping cart</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag (3)</TopText>
                        <TopText>Your wishlist</TopText>

                    </TopTexts>
                    <TopButton type="filled">Buy now</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={slider}/>
                                <Details>
                                    <ProductName>
                                        <b>product</b> grey manchester hoodie
                                    </ProductName>
                                    <ProductId><b>ID:</b> 1231231</ProductId>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>size:</b> small</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountCont>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountCont>
                                <ProductPrice>kshs 2500</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src={cat}/>
                                <Details>
                                    <ProductName>
                                        <b>product</b> grey manchester hoodie
                                    </ProductName>
                                    <ProductId><b>ID:</b> 1231231</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>size:</b> xl</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountCont>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountCont>
                                <ProductPrice>kshs 2500</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>subtotal</SummaryItemText>
                            <SummaryItemPrice>kshs 2500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>estimated shipping</SummaryItemText>
                            <SummaryItemPrice>kshs 500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>shipping discounts</SummaryItemText>
                            <SummaryItemPrice>kshs -300</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >total</SummaryItemText>
                            <SummaryItemPrice>kshs 500</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
