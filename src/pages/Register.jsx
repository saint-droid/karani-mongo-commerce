import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';


const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper = styled.div`
padding:20px;
width:40%;

background-color:#f5fbfd;
${mobile({
    width:"80%"
})}
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;

`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;
`;
const Agreement = styled.span`
font-size:24px;
margin: 20px 0;
${mobile({
    fontSize:"16px"
})}
`;
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="First name"/>
                    <Input placeholder="Last name"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="User name"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm password"/>
                   <Agreement>
                       By creating an acount you are agreeing to our terms and conditions.
                   </Agreement>
                    <Button>Sign up</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
