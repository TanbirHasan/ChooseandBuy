import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styledComponents from 'styled-components';
import { popularProducts } from '../data';

import SingleProduct from "../components/SingleProduct"



const Container = styledComponents.div` 
   padding:20px;
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
`
const Products = ({cat,filters,sort}) => {
    const [products,setProducts] = useState([]);
    const [filteredProduct,setFilteredProduct] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            try{
                const response = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")
               setProducts(response.data);

            }
          
            catch(err){
            
            }
        }
          getProduct()

    },[cat])

    useEffect(() => {
        cat && setFilteredProduct(
            products.filter((item) => Object.entries(filters)?.every(([key,value]) => 
            item[key]?.includes(value)
            
            ))
        )
    },[products,cat,filters])

    console.log(filteredProduct)


    useEffect(() => {
        if(sort==="newest") {
            setFilteredProduct(prev => [...prev].sort((a,b) => a.createdAt - b.createdAt))
        }
        else if(sort === "asc"){
             setFilteredProduct(prev => [...prev].sort((a,b) => a.price - b.price))

        }
        else{
             setFilteredProduct(prev => [...prev].sort((a,b) => b.price - a.price))
        }
    }, [sort])

    return (
        <Container>
            {
                cat ?  
                filteredProduct.map(item => (
                    <SingleProduct item={item} key={item.id}/>
                )) : products.slice(0,8).map(item => (
                    <SingleProduct item={item} key={item.id}/>
                ))
            }   
            
        </Container>
    );
};

export default Products;