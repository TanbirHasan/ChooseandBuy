import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';


const Info = styledComponents.div`
      opacity:0;
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      background-color:rgba(0,0,0,0.2);
      z-index:3;
      display:flex;
      align-items:center;
      justify-content:center;
      transition:0.5s ease;
      cursor:pointer;

`

const Container = styledComponents.div`
   flex:1;
   margin:5px;
   min-width:280px;
   height:350px;
   position:relative;
   display:flex;
   justify-content:center;
   background-color:#f5fbfd;

   &:hover ${Info}{
     opacity:1;

   }
 `
 const Circle = styledComponents.div`
   width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;

 `


const Image = styledComponents.img`
      height:75%;
      z-index:2;
`;



const Icon = styledComponents.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);

  }
`;

const Product = ({item}) => {
    return (
         <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
              <Icon>
                <ShoppingCartOutlined />
              </Icon>
              
                <Link to={`product/${item._id}`}>
                  <Icon>
                    <Search />
                    </Icon>
                </Link>
         
              <Icon>
                <FavoriteBorderOutlined />
              </Icon>
            </Info>
         </Container>
    );
};

export default Product;