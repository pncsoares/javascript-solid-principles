import PayPal from "./PayPal";

// with the code like this, we need to have our code coupled to the PayPal logic
// and force us to create as many Store classes as APIs that we need to use

export default class Store {
    constructor(user) {
        this.PayPal = new PayPal();
        this.User = user;
    }

    PurchaseBike(quantity) {
        const bikePrice = 200;
        this.PayPal.MakePayment(this.User, bikePrice * quantity);
    }

    PurchaseHelmet(quantity) {
        const helmetPrice = 15;
        this.PayPal.MakePayment(this.User, helmetPrice * quantity);
    }
}