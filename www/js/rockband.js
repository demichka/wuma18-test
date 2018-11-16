class Musician {
    constructor(name, instrument, age) {
        this.name = name;
        this.instrument = instrument;
        this.age = age;
        this.bands = [];
    }
    joinBand(band) {
        this.bands.push(band);
        console.log(`${this.name} joined ${band.name}`);
        band.members.push(this);
    }
    leaveBand(band) {
        for (let i = 0; i < this.bands.length; i++) {
            if (this.bands[i] === band) {
                this.bands.splice(i, 1);
                console.log(`${this.name} left ${band.name}`);
                band.members.splice(band.members.indexOf(this),1);
            }
        }
    }
    listBands() {
        let bandsList = this.bands.map(function (band) {
            return band.name;
        });
        return bandsList;
    }
}

class Band {
    constructor(name) {
        this.name = name;
        this.members = [];
    }
    hire(musician) {
        this.members.push(musician);
        console.log(`${this.name} hired ${musician.name}!`);
        musician.bands.push(this);

    }
    fire(musician) {
        this.members.splice(this.members.indexOf(musician), 1);
        musician.bands.splice(musician.bands.indexOf(this),1);
        console.log(`${this.name} fired ${musician.name}!`);
    }
    listMembers() {
        let membersList = this.members.map(function (member) {
            return member.name;
        });
        return membersList;
    }
}


let max = new Musician('Max', 'drums', 30);
let alex = new Musician('Alex', 'guitar', 19);
let janny = new Musician('Janny', 'drums', 27);
let vasya = new Musician('Vasya', 'Vocal', 34);
let fruitsBand = new Band('Fruits');
let vegetablesBand = new Band('Vegetables');
let drinksBand = new Band('Drinks');

console.log(max);
max.joinBand(fruitsBand);
fruitsBand.hire(max);
max.joinBand(vegetablesBand);
max.joinBand(drinksBand);
console.log(max.listBands());
max.leaveBand(fruitsBand);
vegetablesBand.fire(max);
fruitsBand.hire(alex);
fruitsBand.hire(janny);
vegetablesBand.hire(vasya);



console.log(fruitsBand.name + ': ' + ((fruitsBand.members.length > 0) ? fruitsBand.listMembers() : `We are hiring!`));
console.log(vegetablesBand.name + ': ' + ((vegetablesBand.members.length > 0) ? vegetablesBand.listMembers() : `We are hiring!`));
