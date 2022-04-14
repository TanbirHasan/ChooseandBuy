import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
   width:100%;
   height:100vh;
   background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
      background-size:cover;

      display:flex;
      justify-content:center;
      align-items:center;

   
`;
const Wrapper = styledComponents.div`
   width:30%;

   padding:20px;
   background-color:white;
   
`;
const Form = styledComponents.form`
  display:flex;
  flex-direction:column;
`;
const Title = styledComponents.h1`
   font-size:24px;
   font-weight:300;
`;
const Input = styledComponents.input`
   flex:1;
   min-width:40%;
   margin:10px 0px;
   padding:10px;
`;


const Button = styledComponents.button`
  margin-top:15px;
  margin-bottom:15px;
  padding:10px;
  background-color:teal;
  color:white;
  cursor:pointer;
`;

const Link = styledComponents.a`
  margin:5px 0px;
  font-size:12px;
  text-decoration:underline;
  cursor:pointer;
  color:teal;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                      <Button>Login</Button>
                    <Link>FORGET YOUR PASSWORD?</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                    
                    
                   
                  
                      
                      
                </Form>
                
            </Wrapper>
            
        </Container>
    );
};

export default Login;