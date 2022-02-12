export type AddressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export type ContactType = {
    name: string;
    email: string;
    address: AddressType;
}
