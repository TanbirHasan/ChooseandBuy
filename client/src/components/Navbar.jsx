import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Container = styled.div`
     height : 60px;
     ${mobile({height: "50px" })};
    
    

`
const Wrapper = styled.div`
   padding : 10px 20px;
   display:flex;
   justify-content:space-between;
   align-items:center;
     ${mobile({padding:"10px 0px"})};
`

const Language = styled.span`
    font-size : 14px;
    cursor : pointer;
      ${mobile({display:"none" })};
`;
const Left = styled.div`
  flex : 1;
  display:flex;
  align-items:center;
`
const Input = styled.input`
   border:none;
   outline:none;

     ${mobile({width: "50px" })};
`
const Logo = styled.h1`
  font-weight:500;
    ${mobile({fontSize:"18px" })};
   
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
     ${mobile({justifyContent:"center",flex:"2" })};
`

const MenuItems = styled.div`
   font-size:14px;
   cursor:pointer;
   margin-left:5px;
     ${mobile({fontSize:"12px",marginLeft:"10px"})};
`

const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity)
  const user = useSelector(state => state.user.currentUser);


  
    return (
        <Container>
            <Wrapper>
                 <Left>
                     <Language>En</Language>
                     <SearchContainer>
                         <Input placeholder='Search'/>
                         <Search style={{color:'gray', fontSize:'16px',cursor:"pointer"}}/>
                         
                     </SearchContainer>
                 </Left>
                 <Center><Logo>E-COM</Logo></Center>
                 <Right>
                   <Link to="/">
                     <MenuItems>HOME</MenuItems>
                   </Link>
                   <Link to="/product/:id">
                    <MenuItems>PRODUCT LIST</MenuItems>
                   </Link>
                   <Link to="/cart">
                      <MenuItems>CART</MenuItems>
                   </Link>
                   
                   <Link to="/register">
                    <MenuItems>REGISTER</MenuItems>
                   </Link>
                 
                   <Link to="/login">
                    <MenuItems>SIGN IN</MenuItems>
                   </Link>
                     
                     
                    
                    <Link to="/cart">
                        <MenuItems>
                            
                        <Badge badgeContent={quantity} color="primary">
                          <ShoppingCartOutlined/>

                        </Badge>
                        </MenuItems>

                    
                    </Link>
                   
                 </Right>

            </Wrapper>
         
            
            
        </Container>
    );
};

export default Navbar;