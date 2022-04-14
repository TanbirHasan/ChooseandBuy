import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styledComponents from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


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
`;

const TopButton = styledComponents.button`
   padding:10px;
   font-weight:600;
   cursor:pointer;
   border:${props => (props) === "filled" && "none"};
   background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
   color:${(props) => props.type === "filled" && "white"}
`;

const TopText = styledComponents.span`
  text-decoration:underline;
`;

const Bottom = styledComponents.div`
  display:flex;
  justify-content:space-between;

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
`;
const Image = styledComponents.img`
   width:200px;
   height:150px;
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
                         <Product>
                             <ProductDetail>
                                 <Image src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                 <Details>
                                     <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                     <ProductId><b>Id:</b>345435435</ProductId>
                                     <ProductColor color="black"/>
                                     <ProductSize><b>Size:</b>37.5</ProductSize>
                                 </Details>

                             </ProductDetail>
                             <PriceDetail>
                                 <ProductAmountContainer>
                                     <Add/>
                                     <ProductAmount>2</ProductAmount>
                                     <Remove/>
                                 </ProductAmountContainer>
                                 <ProductPrice>$34</ProductPrice>

                             </PriceDetail>
                            
                         </Product>
                         <Hr/>
                         <Product>
                             <ProductDetail>
                                 <Image src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                 <Details>
                                     <ProductName><b>Product:</b>Rolex Watch</ProductName>
                                     <ProductId><b>Id:</b>345435435</ProductId>
                                     <ProductColor color="Silver"/>
                                     
                                 </Details>

                             </ProductDetail>
                             <PriceDetail>
                                 <ProductAmountContainer>
                                     <Add/>
                                     <ProductAmount>2</ProductAmount>
                                     <Remove/>
                                 </ProductAmountContainer>
                                 <ProductPrice>$34</ProductPrice>

                             </PriceDetail>
                            
                         </Product>
                     </Info>
                      <Summery>
                        <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                        <SummeryItem>
                          <SummeryItemText>Subtotal</SummeryItemText>
                          <SummeryItemPrice>$ 80</SummeryItemPrice>
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
                          <SummeryItemPrice>$ 80</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryButton>CheckOut Now</SummeryButton>

                      </Summery>
                   
                 </Bottom>
             </Wrapper>
            <Footer/>

         
            
        </Container>
    );
};

export default Cart;