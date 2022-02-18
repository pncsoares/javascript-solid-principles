import Stripe from "./Stripe";

// with the code like this, we need to have our code coupled to the Stripe logic
// and force us to create as many Store classes as APIs that we need to use

export default class Store {
    constructor(user) {
        this.Stripe = new Stripe(user);
    }

    PurchaseBike(quantity) {
        const bikePrice = 200;
        const finalAmount = this.MultiplyBy100(bikePrice * quantity)
        this.Stripe.MakePayment(finalAmount);
    }

    PurchaseHelmet(quantity) {
        const helmetPrice = 15;
        const finalAmount = this.MultiplyBy100(helmetPrice * quantity)
        this.Stripe.MakePayment(finalAmount);
    }

    MultiplyBy100(amount) {
        // we need to multiply by 100 because Stripe API requires amount in cents
        return amount * 100;
    }
}