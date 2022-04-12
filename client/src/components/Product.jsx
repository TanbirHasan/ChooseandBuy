import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styledComponents from 'styled-components';



const Container = styledComponents.div`
   flex:1;
   margin:5px;
   min-width:280px;
   height:350px;
   display:flex;
   justify-content:center;
 `
 const Circle = styledComponents.div` `


const Image = styledComponents.img`
   height:75%;
`;

const Info = styledComponents.div` `

const Icon = styledComponents.div``;

const Product = ({item}) => {
    return (
         <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
    );
};

export default Product;