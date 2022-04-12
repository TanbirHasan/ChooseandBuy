import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';



const Container = styled.div`
     height : 60px;
    

`
const Wrapper = styled.div`
   padding : 10px 20px;
   display:flex;
   justify-content:space-between;
   align-items:center;
`

const Language = styled.span`
    font-size : 14px;
    cursor : pointer;
`;
const Left = styled.div`
  flex : 1;
  display:flex;
  align-items:center;
`
const Input = styled.input`
   border:none;
`
const Logo = styled.h1`
  font-weight:500;
   
`
const SearchContainer = styled.div`

   border:1px solid lightgray;
   display:flex;
   margin-left:25px;
   padding:5px;
   align-items:center;
`
const Center = styled.div`
  flex : 1;
  text-align:center;
  `
const Right = styled.div`
   flex : 1;
   display:flex;
   align-items:center;
   justify-content:flex-end;
`

const MenuItems = styled.div`
   font-size:14px;
   cursor:pointer;
   margin-left:5px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                 <Left>
                     <Language>En</Language>
                     <SearchContainer>
                         <Input />
                         <Search style={{color:'gray', fontSize:'16px'}}/>
                         
                     </SearchContainer>
                 </Left>
                 <Center><Logo>E-COM</Logo></Center>
                 <Right>
                     <MenuItems>REGISTER</MenuItems>
                     <MenuItems>SIGN IN</MenuItems>
                     <MenuItems><ShoppingCartOutlined/></MenuItems>
                 </Right>

            </Wrapper>
         
            
            
        </Container>
    );
};

export default Navbar;