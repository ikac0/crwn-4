import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51HSAocDN9xeII8YoKwCrDINpHqe2GHVXeCD8VahY3k5velSOwGe5eQAKJZkNZReEuYpYuCcDZrIuCY9v4krTWakO00n0GTDXfQ";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment successful")
    }).catch(error => {
      console.log("Payment error: ", JSON.parse(error));
      alert("There was a problem with the payment. Please use the provided credit card data below.");
    });
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Dummy Page Clothing GmbH."
      currency="EUR"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
