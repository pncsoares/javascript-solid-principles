// this class acts like the Stripe API
// for examplification only

export default class Stripe {
    constructor(user) {
        this.User = user;
    }

    MakePayment(amountInCents) {
        console.log(`${this.User} made payment of ${amountInCents / 100}$ with Stripe`);
    }
}