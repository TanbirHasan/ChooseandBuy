
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';



const Container = styled.div` `;

const Title = styled.h1`
    ${mobile({textAlign:"center"})};
`

const FilterContainer = styled.div`
  display:flex;
  justify-content:space-between;
`;

const Filter = styled.div`
   margin:20px;
     ${mobile({margin:"10px"})};
`;

const FilterText = styled.span`
  font-size:20px;
  font-weight:500;
  margin-right:20px;
`

const Select = styled.select`
  padding : 10px;
  margin-right:20px;
  margin-bottom:10px;
`

const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const handleFilters = (e) => {

    const value = e.target.value;
    setFilters({
      ...filters,[e.target.name] : value
    })

  }

  console.log(filters);
    return (
        <Container>
             <Annoucement />
            <Navbar />
           
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products :</FilterText>
                <Select name="colors" onChange={handleFilters}>
                    <Option disabled >
                    Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                 <Select name="size" onChange={handleFilters}>
                    <Option disabled>
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                </Filter>
                
                  <Filter><FilterText>Sort Products :</FilterText>
                   <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                  </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
            
        </Container>
    );
};

export default ProductList;