import { Send } from '@material-ui/icons';
import React from 'react';
import styledComponents from 'styled-components';


const Container = styledComponents.div`
   height:60vh;
   background-color:#fcf5f5;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
`;
const Title = styledComponents.h1`
   font-size:70px;
`;
const Desc = styledComponents.div`
   font-size:24px;
   margin-bottom:10px;
   font-weight:500;
`;

const InputContainer = styledComponents.div`
   display:flex;
   width:50%;
   height:40px;
   background-color:white;
   justify-content:space-between;
   border:1px solid lightgray;
 `;

const Input = styledComponents.input`
  border:none;
  flex:8;
  paddding-left:28px;
`;

const Button = styledComponents.button`
  flex:1;
  border:none;
  background-color:teal;
  color:white;
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite products</Desc>
            <InputContainer>
            <Input />
            <Button>
                <Send/>
            </Button>
            </InputContainer>
            
        </Container>
    );
};

export default Newsletter;