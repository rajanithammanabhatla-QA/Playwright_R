class Payment {
    pay(paymentAmount: number): void;
    pay(paymentAmount: number, paymentMethod: string): void;
    pay(
        paymentAmount: number,
        paymentMethod: string,
        paymentCurrency: string
    ): void;

    pay(
        paymentAmount: number,
        paymentMethod?: string,
        paymentCurrency?: string
    ): void {

        if (paymentMethod !== undefined && paymentCurrency !== undefined) {
            console.log(
                `Paid ${paymentAmount} ${paymentCurrency} using ${paymentMethod}`
            );
        } else if (paymentMethod !== undefined) {
            console.log(
                `Paid ${paymentAmount} using ${paymentMethod}`
            );
        } else {
            console.log(`Paid amount: ${paymentAmount}`);
        }
    }
}

const paymentObject = new Payment();

paymentObject.pay(1000);
paymentObject.pay(1000, "Credit Card");
paymentObject.pay(1000, "Credit Card", "INR");