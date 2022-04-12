import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`


const Annoucement = () => {
    return (
        <Container>
              Super deal for the weekend!!
        </Container>
    );
};

export default Annoucement;