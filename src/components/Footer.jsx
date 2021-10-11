import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components' 
import {FaCcMastercard, FaCcVisa, FaPaypal} from 'react-icons/fa';
import { mobile } from '../Responsive';

const Container = styled.div`
display:flex;
${mobile({
    flexDirection:"column"
})}
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
margin:20px 0;
`;
const Socialcontainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px ;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=> props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;
cursor:pointer;
`;
const Center = styled.div`
flex:1;
padding:20px;
${mobile({
    display:"none"
})}
`;
const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex
flex-wrap:wrap;
`;
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;
const Right = styled.div`
flex:1;
padding:20px;
${mobile({
    backgroundColor:"#eee"
})}
`;
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const Payment = styled.p`
margin:16px;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Jersey world</Logo>
                <Desc>
                Get updates about our latest products and customer discounts Get updates about our latest products and customer discounts Get updates about our latest products and customer discounts Get updates about our latest products and customer discounts.
                </Desc>
                <Socialcontainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>

                </Socialcontainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Hoodies</ListItem>
                    <ListItem>Caps</ListItem>
                    <ListItem>Jerseys</ListItem>
                    

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                   <Room/> Nairobi ke, BIHI TOWERS along Moi avenue
                </ContactItem>
                <ContactItem>
                   <Phone/> 0759643215
                </ContactItem>
                <ContactItem>
                  <Mail/>  support@capsandhoodies.com
                </ContactItem>
                <Payment>
                   <Title> All Cards are accepted here</Title>
                    <FaCcVisa style={{marginRight:"10px", fontSize:"30px"}}/>
                    <FaCcMastercard style={{marginRight:"10px", fontSize:"30px"}}/>
                    <FaPaypal  style={{marginRight:"10px", fontSize:"30px"}}/>
                </Payment>
                
            </Right>
        </Container>
    )
}

export default Footer
