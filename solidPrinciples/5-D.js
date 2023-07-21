/*--> Dependency Inversion <--*/
/*   
    Irrespective of the of the methods we are able switch to different services ;
    High level modules should not depend upon Low level modules 
*/

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
    // this.paymentProcessor = new Stripe(user)
    // this.paymentProcessor = new PayPal(user)
  }

  buyTshirt(quantity) {
    this.paymentProcessor.pay(20 * quantity);
  }

  buyShoes(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.user = user;
  }
  pay(amount) {
    console.log(`${this.user} has paid ${amount} on Stripe`);
  }
}

class PayPalPaymentProcessor {
  constructor(user) {
    this.user = user;
  }
  pay(amount) {
    console.log(`${this.user} has paid ${amount} on Paypal`);
  }
}

let store = new Store(new PayPalPaymentProcessor("Sidd"));
store.buyShoes(2);
store.buyTshirt(20);
