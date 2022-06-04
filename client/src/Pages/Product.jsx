import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styledComponents from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';


const Container = styledComponents.div``;
const Wrapper = styledComponents.div`
  display:flex;
  padding:50px;
    ${mobile({padding:"30px",flexDirection:"column"})};
    justify-content:center;
`;
const ImgContainer = styledComponents.div`
  flex:1;
`;
const Image = styledComponents.img`
  
  max-width:100%;
  height:80vh;
  object-fit:cover;
`;
const InfoContainer = styledComponents.div`
 flex:1;
 padding: 0px 20px;
`;
const Title = styledComponents.h2`
  font-weight:200;
`;
const Desc = styledComponents.p`
  margin:20px 0px;
  font-size:14px;
`;
const Price = styledComponents.h2``

const FilterContainer = styledComponents.div`
width:58%;
 margin: 30px 0px;
  display:flex;
  justify-content:space-between;
`;
const Filter = styledComponents.div`
  display:flex;
  align-items:center;
`;
const FilterColor = styledComponents.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    margin:0 5px;
    cursor:pointer;
`;
const FilterTitle = styledComponents.span`
   font-size:20px;
   font-weight:200;
`;
const FilterSizeOption = styledComponents.option``;
const FilterSize = styledComponents.select`
  margin-left:10px;
  padding:10px;
`;

const AddContainer = styledComponents.div`
  width:50%;

  display:flex;
  align-items: center;
  justify-content:space-between;
    ${mobile({width:"100%"})};

`
const AmounContainer = styledComponents.div`
   display:flex;
   align-items:center;
   font-weight:700;
`
const Amount = styledComponents.span`
   width:30px;
   height:30px;
   border:1px solid black;
   border-radius:10px;
   display:flex;
   align-items:center;
   justify-content:center;

`
const Button = styledComponents.button`
   padding:15px;
   border:2px solid teal;
   background-color:white;
   cursor:pointer;
   font-weight:500;

   &:hover{
     background-color:teal;
     color:white;
   }
   
`

const Product = () => {
   const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
       const [size,setSize] = useState(" ");
       const [color,setColor] = useState(" ");

  

  useEffect(() => {
    const getProduct = async () => {
      try{
        const res = await publicRequest.get("/products/find/"+id);
        setProduct(res.data);

      }
      catch{

      }
    }
    getProduct();

  }, [id])

   const  handleQuantity = (type) => {
     if(type === "dec"){
       quantity > 1 && 
       setQuantity(quantity-1)
     }
     else{
       setQuantity(quantity + 1)
     }

   }

  console.log(product);

  const handleClick = () => {

  }
    return (
        <Container>
            <Annoucement/>
            
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                   <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit id quidem sequi fuga itaque, exercitationem enim aspernatur soluta distinctio!</Desc>
                    <Price>{product.price}</Price>
                    <FilterContainer>
                        <Filter>
                           {
                             product?.color?.map((c) => (
                               <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                             ))
                           }

                        </Filter>
                         <FilterSize onChange={(e) => setSize(e.target.value)}>
                             <FilterTitle>Size</FilterTitle>
                              {
                             product?.size?.map((s) => (
                               <FilterSizeOption>{s}</FilterSizeOption>
                             ))
                           }
                            
                         </FilterSize>
                    </FilterContainer>
                    <AddContainer>
                        <AmounContainer>
                            <Remove onClick={() => handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")}/>
                        </AmounContainer>
                        <Button onClick={handleClick}>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
            
        </Container>
    );
};

export default Product;