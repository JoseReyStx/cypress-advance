export interface User {
    password: string;
    email: string;
    wrongPassword: string;
    username: string;
    title: string;
    birthday: {
        day: string;
        month: string;
        year: string;
    };
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    mobileNumber: string;
    contact: {
        subject: string;
        message: string;
        pathFile: string;
    };
    review: string;
    payment: {
        cardNumber: string;
        cvc: string;
        expirationMonth: string;
        expirationYear: string;
    };
}
