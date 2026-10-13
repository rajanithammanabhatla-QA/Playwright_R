interface AddressDetails {
    cityName: string;
    stateName: string;
    pinCode: number;
}

interface CustomerProfile {
    customerName: string;
    customerAge: number;
    customerAddress: AddressDetails;
}

const customerProfileData: CustomerProfile = {

    customerName: "Rajani",

    customerAge: 25,

    customerAddress: {
        cityName: "Hyderabad",
        stateName: "Telangana",
        pinCode: 500001
    }
};

console.log("Name:", customerProfileData.customerName);
console.log("Age:", customerProfileData.customerAge);
console.log("City:", customerProfileData.customerAddress.cityName);
console.log("State:", customerProfileData.customerAddress.stateName);
console.log("Pincode:", customerProfileData.customerAddress.pinCode);