import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styledComponents from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';

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
   ${mobile({width:"75%"})};
   
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
  &:disabled{
    color:green;
    cursor:not-allowed;
  }
`;

const Link = styledComponents.a`
  margin:5px 0px;
  font-size:12px;
  text-decoration:underline;
  cursor:pointer;
  color:teal;
`

  const Error = styledComponents.span`
     color : red;
  `

const Login = () => {
const user = useSelector(state => state.user.currentUser);

   const navigate = useNavigate();
 
  const [username,setUsername] = useState(" ")
  const [password,setPassword] = useState(" ")
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector(state => state.user)
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch,{username,password})

      if(user){
     navigate("/")
   }

  }




    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                      <Button onClick={handleLogin} disabled={isFetching}>Login</Button>
                 {    error && <Error>Something went wrong</Error>}
                    <Link>FORGET YOUR PASSWORD?</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                    
                    
                   
                  
                      
                      
                </Form>
                
            </Wrapper>
            
        </Container>
    );
};

export default Login;