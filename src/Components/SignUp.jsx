import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import  Button  from "../Components/Button";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;
const SignUp = () => {
  return (
    <Container>
      <div>
        <Title>Create New Account 👋</Title>
        <Span>Please enter details to create a new account</Span>
      </div>
      <div style={{
        display:"flex",
        gap:"20px",
        flexDirection:"column",
        }}>
        <TextInput label="Full Name" 
        placeholder="enter your full Name:"/> 
        
        <TextInput label="Email address" 
        placeholder="enter your email address:"/>

        <TextInput label="Password" 
        placeholder="enter your password:"
        password
        />
        <Button text="Sign Up"/>
      </div>
    </Container>
  );
};
export default SignUp;