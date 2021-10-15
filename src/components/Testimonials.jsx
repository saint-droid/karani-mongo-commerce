import React from 'react'
import styled from 'styled-components'  
import { mobile } from '../Responsive';
import slider1 from "../assets/homeslide.jpg"



const Container = styled.div`

${mobile({
    
})}
`;
const Left = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
padding:0px;

${mobile({
   
})}
`;
const Image = styled.img`
width:42%;
margin:10px;
border-radius:10px;
${mobile({
    
})}
`;
const Right = styled.div`
flex:1;

${mobile({
    
})}
`;
const RightImage = styled.img`


${mobile({
    
})}
`;
const TopImage = styled.img`
width:40%;

${mobile({
    
})}
`;
const Bottom = styled.div`

${mobile({
    
})}
`;
const BottomImage = styled.img`
width:40%;

${mobile({
    
})}
`;

const Testimonials = () => {
    return (
        <Container>
            <Left>
           <Image src={slider1}/>
           <Image src={slider1}/>
            </Left>
            
            {/**
             * <Right>
            <RightImage src={slider1}/>
            </Right>
            <Right>
                <Top>
                <TopImage src={slider1}/>
                <TopImage src={slider1}/>
                </Top>
                <Bottom>
                <BottomImage src={slider1}/>
                <BottomImage src={slider1}/>
                </Bottom>
            </Right> */}
        </Container>
    )
}

export default Testimonials
