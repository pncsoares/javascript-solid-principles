import PayPal from "./PayPal";

// this class acts like the PayPal payment processor (just like a gateway)
// this way, we don't repeat the Store class, but the implementation gateway class
// one per API

export default class PayPalPaymentProcessor {
    constructor(user) {
        this.User = user;
        this.PayPal = new PayPal();
    }

    Pay(amountInDollars) {
        this.PayPal.MakePayment(this.User, amountInDollars);
    }
}