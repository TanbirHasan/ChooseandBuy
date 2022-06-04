import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
   display : flex;
   justify-content : center;
  
`


const Button = styled.button`

   padding : 20px 8px;
   background-color : Green;
  
`

const Text = styled.p`
   font-size : 20px;
   color : black;
`

const Success = () => {
    return (
       <Container>
           <Button>Successfull</Button>
           <Text>Your order is being prepared. Thanks for choosing E-com</Text>
       </Container>
    );
};

export default Success;