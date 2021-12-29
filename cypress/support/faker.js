import { random, name, phone, address } from "faker";

const randomNumber = () => {
    return random.number;
}

const randomName = () => {
    return name.firstName;
}

const randomLastName = () => {
    return name.lastName;
}

const randomPhoneNumber = () => {
    return phone.phoneNumber;
}

const randomZipCode = () => {
    return address.zipCode;
}

const randomCity = () => {
    return address.city;
}

const randomAddress = () => {
    return address.streetAddress;
}

const randomState = () => {
    return address.state;
}



export { randomNumber, randomName, randomLastName, randomPhoneNumber, randomZipCode, randomCity, randomAddress, randomState };