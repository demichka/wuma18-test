console.log('**** Bostader exercise begins: ****');
class Address {
    constructor(street, houseNumber, city, postNumber) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
        this.postNumber = postNumber;
    }
}

class Person {
    constructor(name, idNumber) {
        this.name = name;
        this.idNumber = idNumber;
    }
}

class Residence {
    constructor(address, owner) {
        this.address = address;
        this.owner = owner;
        if (!(this instanceof Tenancy)) {
            this.ratePercent = 1.7;
            this.mortgage = 80;
        }
    }

    monthCost() {
        let loan = this.purchasePrice * this.mortgage / 100;
        let rate = loan * this.ratePercent / 100 / 12;
        let monthCost = 0;
        if (!(this instanceof Villa)) {
            monthCost = rate;
        } else if (this instanceof Villa) {
            monthCost = this.operatingCost;

        } else {
            monthCost = this.monthRent;
        }
        return Math.round(rate + monthCost);
    }
}

class Tenancy extends Residence {
    constructor(address, owner, rent) {
        super(address, owner);
        this.rent = rent;
    }
    monthRent() {
        return this.rent;
    }
}

class privateCondominium extends Residence {
    constructor(address, owner, purchasePrice) {
        super(address, owner);
        this.purchasePrice = purchasePrice;
    }
}

class Villa extends Residence {
    constructor(address, owner, purchasePrice, operatingCost) {
        super(address, owner);
        this.purchasePrice = purchasePrice;
        this.operatingCost = operatingCost;
    }
}

let anna = new Person('Anna', '196012084556');
let ben = new Person('Ben', '198011034354');
let address1 = new Address('Martenstorget', '10C', 'Lund', 22351);
let address2 = new Address('Clementstorget', '6A', 'Lund', 22341);
let address3 = new Address('Astrakhanvagen', '1', 'Lund', 22350);
let flat = new Tenancy(address1, anna, 9500);
let privateFlat = new privateCondominium(address2, ben, 4500000);
let villa = new Villa(address3, anna, 1000000, 3500);

console.log('flat: ', flat, 'monthcost: ', flat.monthRent());
console.log('private Condominium: ', privateFlat, 'monthcost: ', privateFlat.monthCost());
console.log('villa: ', villa, 'monthcost: ', villa.monthCost());


console.log('****exercise end ****');
