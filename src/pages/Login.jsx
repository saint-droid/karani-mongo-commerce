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
width:30%;

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
flex-direction:column;

`;
const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px  0;
padding:10px;
`;

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px
`;
const Link = styled.a`
margin:5px 0;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`;
const Login = () => {
    return (
        <Container>
             <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    
                    <Input placeholder="User name"/>
                    <Input placeholder="Password"/>
                    
                    <Button>Sign in</Button>
                    <Link>forgot password</Link>
                    <Link>create account</Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
