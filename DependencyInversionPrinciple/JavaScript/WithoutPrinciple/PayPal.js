// this class acts like the PayPal API
// for examplification only

export default class Paypal {
    MakePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars}$ with PayPal`);
    }
}