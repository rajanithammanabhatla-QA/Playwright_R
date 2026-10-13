class Payment {
    pay(amount: number): string {
        return `Payment of ₹${amount}`;
    }
}

class CreditCardPayment extends Payment {
    override pay(amount: number): string {
        return `₹${amount} paid using Credit Card`;
    }
}

class UPIPayment extends Payment {
    override pay(amount: number): string {
        return `₹${amount} paid using UPI`;
    }
}

class CashPayment extends Payment {
    override pay(amount: number): string {
        return `₹${amount} paid using Cash`;
    }
}

const creditCard = new CreditCardPayment();
const upi = new UPIPayment();
const cash = new CashPayment();

console.log(creditCard.pay(5000));
console.log(upi.pay(2000));
console.log(cash.pay(1000));