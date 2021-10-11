import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
word-spacing:4px;
${mobile({
    fontSize:"11px",
    wordSpacing:"2px"
})}
`;
const Anouncement = () => {
    return (
        <Container>
            Official store for hoodies, caps and jerseys. Order now!
        </Container>
    )
}

export default Anouncement
