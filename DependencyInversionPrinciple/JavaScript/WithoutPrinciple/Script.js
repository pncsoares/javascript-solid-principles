// this class acts like our app

import StripeStore from "./StoreAdaptedToStripe";

const storeConnectedToStripe = new StripeStore('John');
storeConnectedToStripe.PurchaseBike(2);
storeConnectedToStripe.PurchaseHelmet(2);

// if we need to change from Stripe to PayPal
// we need to change the dependency 👇

import PayPalStore from "./StoreAdaptedToPayPal";

const storeConnectedToPayPal = new PayPalStore('John');
storeConnectedToPayPal.PurchaseBike(2);
storeConnectedToPayPal.PurchaseHelmet(2);