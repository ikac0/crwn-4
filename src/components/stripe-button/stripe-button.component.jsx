import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51HSAocDN9xeII8YoKwCrDINpHqe2GHVXeCD8VahY3k5velSOwGe5eQAKJZkNZReEuYpYuCcDZrIuCY9v4krTWakO00n0GTDXfQ";

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
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
