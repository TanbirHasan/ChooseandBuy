import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styledComponents from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import {userRequest} from "../requestMethods"
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;


const Container = styledComponents.div``;
const Wrapper = styledComponents.div`
   padding:20px;

 `;

const Title = styledComponents.h2`
   font-weight:200;
   text-align:center;
`;

const Top = styledComponents.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
        ${mobile({flexDirection:"column",alignItems:"start"})};
`;

const TopButton = styledComponents.button`
   padding:10px;
   font-weight:600;
   cursor:pointer;
   border:${props => (props) === "filled" && "none"};
   background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
   color:${(props) => props.type === "filled" && "white"};
      ${mobile({margin:"10px"})};
`;

const TopText = styledComponents.span`
  text-decoration:underline;
    ${mobile({margin:"10px"})};
`;

const Bottom = styledComponents.div`
  display:flex;
  justify-content:space-between;
        ${mobile({flexDirection:"column"})};

`;


const Info = styledComponents.div` 
  flex:3;
  
`



const Product = styledComponents.div`
   display:flex;
   justify-content:space-between;
    
`;
const ProductDetail = styledComponents.div`
 flex:2;
 display:flex;
    ${mobile({flexDirection:"column"})};
`;
const Image = styledComponents.img`
   width:200px;
   height:150px;
   object-fit : contain;
`;
const Details = styledComponents.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;
const ProductName = styledComponents.span``;
const ProductId = styledComponents.span``;
const ProductColor = styledComponents.div`
   width:20px;
   height:20px;
   border-radius:50%;
   background-color:${ props => props.color};
`;
const ProductSize = styledComponents.span``;
const PriceDetail = styledComponents.span`
   flex:1;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
 
`;

const ProductAmountContainer = styledComponents.div`
   display:flex;
`
const Hr = styledComponents.hr`
   background-color:gray;
   border:none;
   height:1px;
`
const ProductAmount = styledComponents.div``;

const ProductPrice = styledComponents.div`
    font-size:30px;
    font-weight:300;
`;

const Summery = styledComponents.div`

  flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
  
`
const SummeryTitle = styledComponents.h1`
   font-weight:200;

`;

const SummeryItem = styledComponents.div`
   margin:30px 0px;
   display:flex;
   justify-content:space-between;
   font-weight:${props => props.type === "total" && "500"};
   font-size:${props => props.type === "total" && "500"};
`;

const SummeryItemText = styledComponents.span``;

const SummeryItemPrice = styledComponents.span``;

const SummeryButton = styledComponents.button`
   width:100%;
   padding:10px;
   background-color:black;
   color:white;
   font-weight:600;
`;



const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken,setStripeToken] = useState(null);
    const navigate = useNavigate();
    
    const onToken = (token) => {
        setStripeToken(token);

    }
    console.log(stripeToken);

    useEffect(() => {
      const makeRequest = async () => {
        try{
          const res = await userRequest.post("/checkout/payment",{
               tokenId : stripeToken.id,
              amount : cart.total*100,
             


          });
           navigate({pathname : "/success"},{data:res.data});
       
        }
        catch{

        }
      }
     stripeToken && makeRequest();
    },[stripeToken,cart.total,navigate])
    return (
        <Container>
            <Annoucement/>
            <Navbar />
             <Wrapper>
                 <Title>
                     Your Bag
                 </Title>
                 <Top>
                     <TopButton>CONTINUE SHOPPING</TopButton>
                     <TopText >Shopiing Bag(2)</TopText>
                      <TopText>Our Wishlist</TopText>
                      <TopButton type='filled'>CHECKOUT NOW</TopButton>
                 </Top>
                 <Bottom>
                     <Info>
                         {
                             cart.products.map((product) => (
                                 <Product>
                                        <ProductDetail>
                                            <Image src={product.img}/>
                                            <Details>
                                                <ProductName><b>Product:</b>{product.title}</ProductName>
                                                <ProductId><b>Id:</b>{product.id}</ProductId>
                                                <ProductColor color={product.color}/>
                                                <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                            </Details>

                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductAmountContainer>
                                                <Add/>
                                                <ProductAmount>{product.quantity}</ProductAmount>
                                                <Remove/>
                                            </ProductAmountContainer>
                                            <ProductPrice>{product.price*product.quantity}</ProductPrice>

                                        </PriceDetail>
                                        
                                 </Product>

                             ))
                         }
                         
                         <Hr/>
                        
                     </Info>
                      <Summery>
                        <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                        <SummeryItem>
                          <SummeryItemText>Subtotal</SummeryItemText>
                          <SummeryItemPrice>${cart.total}</SummeryItemPrice>
                        </SummeryItem>
                         <SummeryItem>
                          <SummeryItemText>Estimated Shipping</SummeryItemText>
                          <SummeryItemPrice>$ 5</SummeryItemPrice>
                        </SummeryItem>
                         <SummeryItem>
                          <SummeryItemText>Shipping Discount</SummeryItemText>
                          <SummeryItemPrice>$ -5.90</SummeryItemPrice>
                        </SummeryItem>
                         <SummeryItem type="total">
                          <SummeryItemText >Total</SummeryItemText>
                          <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                        </SummeryItem>
                          <StripeCheckout name="E-Com" image=""
                                billingAddress
                                shippingAddress
                                description={`Your total is $${cart.total}`}
                                amount={cart.total*100}
                                token={onToken}
                                stripeKey={KEY}
                                >
                          <SummeryButton>Pay</SummeryButton>

                </StripeCheckout>
                       

                      </Summery>
                   
                 </Bottom>
             </Wrapper>
            <Footer/>

         
            
        </Container>
    );
};

export default Cart;