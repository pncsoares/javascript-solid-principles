export default class Store {
    constructor(paymentProcessor) {
        this.PaymentProcessor = paymentProcessor;
    }

    PurchaseBike(quantity) {
        const bikePrice = 200;
        this.PaymentProcessor.Pay(bikePrice * quantity);
    }

    PurchaseHelmet(quantity) {
        const helmetPrice = 15;
        this.PaymentProcessor.Pay(helmetPrice * quantity);
    }
}