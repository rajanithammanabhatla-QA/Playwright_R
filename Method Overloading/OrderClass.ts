class Order {
    placeOrder(itemId: number): void;
    placeOrder(itemId: number, itemQuantity: number): void;
    placeOrder(
        itemId: number,
        itemQuantity: number,
        deliveryAddress: string
    ): void;

    placeOrder(
        itemId: number,
        itemQuantity?: number,
        deliveryAddress?: string
    ): void {

        if (itemQuantity !== undefined && deliveryAddress !== undefined) {
            console.log(
                `Order placed: Product ${itemId}, Quantity ${itemQuantity}, Address ${deliveryAddress}`
            );
        } else if (itemQuantity !== undefined) {
            console.log(
                `Order placed: Product ${itemId}, Quantity ${itemQuantity}`
            );
        } else {
            console.log(`Order placed: Product ${itemId}`);
        }
    }
}

const orderObject = new Order();

orderObject.placeOrder(501);
orderObject.placeOrder(501, 3);
orderObject.placeOrder(501, 3, "Hyderabad");