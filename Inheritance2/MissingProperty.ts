interface CustomerDetails {
    customerName: string;
    customerAge: number;
    customerCity: string;
}

const customerData: CustomerDetails = {
    customerName: "Priya",
    customerAge: 28
    // customerCity is missing
};

console.log(customerData);