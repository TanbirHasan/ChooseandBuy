import React from 'react';
import styledComponents from 'styled-components';



const Container = styledComponents.div`
   width:100%;
   height:100vh;
   background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;

      display:flex;
      justify-content:center;
      align-items:center;

   
`;
const Wrapper = styledComponents.div`
   width:48%;

   padding:20px;
   background-color:white;
   
`;
const Form = styledComponents.form`
  display:flex;
  flex-wrap:wrap;
`;
const Title = styledComponents.h1`
   font-size:24px;
   font-weight:300;
`;
const Input = styledComponents.input`
   flex:1;
   min-width:40%;
   margin:20px 10px 0px 0px;
   padding:10px;
`;
const Agreement = styledComponents.span`
   font-size:12px;
   margin:20px 0px;

`
const Button = styledComponents.button`
  margin-top:15px;
  padding:10px;
  background-color:teal;
  color:white;
  cursor:pointer;
`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last name" />
                    <Input placeholder="Email" />
                    <Input placeholder="User-name" />
                    <Input placeholder="Password" />
                       <Input placeholder="Confirm-password" />
                    <Agreement>

                    </Agreement>
                  
                      
                      
                </Form>
                  <Button>Register</Button>
            </Wrapper>
            
        </Container>
    );
};

export default Register;