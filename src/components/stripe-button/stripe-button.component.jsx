import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51GqBUtLPJUcH5THGsM3GUrsEY6cpFbxlSzISHAwMgqIhmbN2NESTEjVbdmrD0Cpj92ZbyXiIwQTi2eKIHpeOSiNA00MBkX4G2J';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout
         label='Pay Now'
         name='crwn clothing'
         billingAddress
         shippingAddress
         image='https://sendeyo.com/up/d/f3eb2117da'
         description={`Your totoal is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;