import Stripe from "./Stripe";

// this class acts like the Stripe payment processor (just like a gateway)
// this way, we don't repeat the Store class, but the implementation gateway class
// one per API

export default class StripePaymentProcessor {
    constructor(user) {
        this.Stripe = new Stripe(user);
    }

    Pay(amountInDollars) {
        this.Stripe.MakePayment(amountInDollars * 100);
    }
}