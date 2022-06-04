import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY = "pk_test_51L3crVI20gp0i97m1j1eQCS8GypyBfb5Le13zVBryMdJHoy9KzJHwFQ9lMwNmrcZ1x0XJXLCOIexwyMdU9IQcB7500LuooR7ld"


const Container = styled.div`
   display : flex;
   justify-content : center;
   align-items: center;
   height : 100vh;
  
`

const Button = styled.button`

   padding : 8px 38px;
   background-color : skyblue;
  
`

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount : 2000,
                });
                console.log(res.data)

                

            }
            catch(err){
                console.log(err);
            }
        }
        stripeToken && makeRequest();

    },[stripeToken])
    const onToken = (token) => {
        setStripeToken(token);

    }
    return (
        <div>
            <Container>
                <StripeCheckout name="E-Com" image=""
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
                >
                      <Button>Pay</Button>

                </StripeCheckout>
              
            </Container>
            
        </div>
    );
};

export default Pay;