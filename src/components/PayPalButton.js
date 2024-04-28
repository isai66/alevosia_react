import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPalButton({ total }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "Aevm832RAu3vO5qmOb1TzV7Rmvqefppr3t8BKmmYglRIyV78TJ7aPF3GuuXMGC02Orz8DbVDYL7yB_K4" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;
