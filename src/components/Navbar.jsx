import { Search, ShoppingCartOutlined,  } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
//import { Badge } from '@mui/material';
import { Badge } from '@material-ui/core';
import { mobile } from '../Responsive';




const Container = styled.div`
height:60px;

${mobile({
    height:"60px" 
})}
`;
const Wrapper = styled.div`
padding:10px 80px;
display:flex;
align-items:center;
justify-content:space-between;

${mobile({
    padding:"10px 0px"
})}
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language = styled.span`
font-size:14px ;
cursor:pointer;
${mobile({
    display:"none"
})}
`;
const SearchContainer = styled.div`
border: 1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
`;
const Input = styled.input`
border:none;
outline:none;
padding:8px;
${mobile({
    width:"50px"
})}
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const Logo = styled.h1`
font-weight:bold;
${mobile({
    fontSize:"12px"
})}
`;


const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({
    flex:"2",
    justifyContent:"center"
})}
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
padding:0 10px;
margin-left:25px;
${mobile({
    fontSize:"11px",
    
    marginLeft:"10px"
})}
`;
const MainMenuItem = styled.div`
font-size:14px;
cursor:pointer;
padding:0 10px;
${mobile({
    display:"none"
})}
`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>en</Language>
                    <SearchContainer>
                       <Input placeholder="search"/>
                        <Search style={{color:"gray", fontSize:16, marginRight:10 }}/>
                    </SearchContainer>
                    
                    <MainMenuItem><strong>Shop all</strong></MainMenuItem>
                    <MainMenuItem>Hoodies</MainMenuItem>
                    <MainMenuItem>Football kits</MainMenuItem>
                    <MainMenuItem>Caps</MainMenuItem>
                </Left>
                <Center>
                    <Logo>
                        Jersey world
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register now</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
