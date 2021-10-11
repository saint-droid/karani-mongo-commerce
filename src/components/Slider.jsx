import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { imageListClasses } from '@mui/material';
import React, {useState} from 'react'
import styled from 'styled-components'  
import slider from "../assets/slider1.jpg"
import { sliderItems } from '../data';
import { mobile } from '../Responsive';
const Container = styled.div`
width:100%;
height:100vh;
overflow:hidden;
display:flex;
position:relative;

${mobile({
    display:"none"
})}
`;
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
opacity:0.5;
bottom:0;
margin:auto;
cursor:pointer;
z-index:2;
`;

const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg}
`;
const ImageCont = styled.div`
flex:1;
height:100%;

`;
const InfoCont  = styled.div`
flex:1;

`;
const Image = styled.img`
height:80%;
`;
const Title = styled.h1`

font-size:70px;

`;
const Description  = styled.p`
margin:50px 0;
font-size:20px;
letter-spacing:3px;
font-weight:500;


`;const Button = styled.button`

padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
border-radius:10px;
border-color:blue;
`;
const Slider = () => {
const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick('left')}>
                <ArrowLeftOutlined/>
               
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) =>(
                <Slide bg={item.bg}>
                <ImageCont>
                    <Image src={item.img}/>
                </ImageCont>
                <InfoCont>
                    <Title>{item.title} </Title>
                    <Description>
                    {item.desc}
                    </Description>
                    <Button>Shop now</Button>
                </InfoCont>
                </Slide>
                ))}
            </Wrapper>  
            <Arrow direction="right" onClick={()=> handleClick('right')}>
                
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
