import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
   display:flex;
   justify-content:center;
   
 `
const Left = styled.div`
  flex:1;
  display:flex;
  margin-left:20px;
  flex-direction:column;
  

`
const Center = styled.div`
   flex:1;
   padding:20px;
 `

 const Title = styled.h3`
   margin-bottom:20px;
 `
 ;

 const List = styled.ul`
    margin : 0;
    padding: 0;
    list-style:none;
    display : flex;
    flex-wrap: wrap;

 `;

 const ListItem = styled.div`
    width:50%;
    margin-bottom:10px;
 `;
const Right = styled.div`
    flex:1;
`

const Logo = styled.h1`
  
`

const Desc = styled.p`
  margin:20px 0px;
`

const SocialContainer = styled.div`
  display:flex;

`

const SocialIcon = styled.div`
   width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display:flex;
  align-items:center;
`

const Payment = styled.img`
   width:50%;

`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E.COM</Logo>
                <Desc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
          <SocialContainer>
              <SocialIcon color="3B5999">
                  <Facebook/>
              </SocialIcon>
              <SocialIcon color="E4405F">
                  <Twitter/>
              </SocialIcon>
              <SocialIcon color="55ACEE">
                  <Instagram/>
              </SocialIcon>
               <SocialIcon color="55ACEE">
                  <Facebook/>
              </SocialIcon>
          </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull Links</Title>
                <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                </List>
               

            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> 622 MayBach , North Carolina</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+1 345 5456</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>622 MayBach , North Carolina</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
            
        </Container>
    );
};

export default Footer;