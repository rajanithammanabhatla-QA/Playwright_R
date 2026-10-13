class Product {
    getPrice(originalPrice: number): number;
    getPrice(originalPrice: number, discountPercent: number): number;
    getPrice(
        originalPrice: number,
        discountPercent: number,
        taxPercent: number
    ): number;

    getPrice(
        originalPrice: number,
        discountPercent?: number,
        taxPercent?: number
    ): number {

        let finalPrice = originalPrice;

        if (discountPercent !== undefined) {
            finalPrice = finalPrice - (finalPrice * discountPercent / 100);
        }

        if (taxPercent !== undefined) {
            finalPrice = finalPrice + (finalPrice * taxPercent / 100);
        }

        return finalPrice;
    }
}

const productObject = new Product();

console.log(productObject.getPrice(1000));
console.log(productObject.getPrice(1000, 10));
console.log(productObject.getPrice(1000, 10, 18));