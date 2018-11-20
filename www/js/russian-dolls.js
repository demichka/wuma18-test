class RussianDoll {
    constructor(size) {
        this.size = size;
        this.insideMe = false;
    }

    putInsideMe(doll) {
        if(this.insideMe) {
            let dollInside = this.insideMe.size;
            console.log(`I have already doll #${dollInside} inside me!`);
        }
        else if (doll.size > 10 || doll.size < 1) {
            console.log(`Your size is ${doll.size}, Our dolls could have size only between 1 and 10. Try again`);
        }
        else {
            if(doll.size >= this.size) {
                console.log(`I am #${this.size} doll. I cannot have a doll #${doll.size} inside me!`);
            }
            else {
                this.insideMe = doll;
                console.log(`Doll #${this.size} has inside a doll #${doll.size}`);
                return true;
            }
        }
    }
    allDollsInsideMe() {
        let allDolls = [];
        let aDollInside = this.insideMe; 
        
        while(aDollInside) {
            allDolls.push(aDollInside.size);
            aDollInside = aDollInside.insideMe;
        }

        return console.log(`Doll #${this.size} contains dolls ## ${allDolls.join(', ')}`);
    }
}

let dollNumOne = new RussianDoll(1);
let dollNumTwo = new RussianDoll(2);
let dollNumThree = new RussianDoll(3);
let dollNumFour = new RussianDoll(4);
let dollNumFive = new RussianDoll(5);
let dollNumSix = new RussianDoll(6);
let dollNumSeven = new RussianDoll(7);
let dollNumEight = new RussianDoll(8);
let dollNumNine = new RussianDoll(9);
let dollNumTen = new RussianDoll(10);
let dollNumEleven = new RussianDoll(11);
let dollNumHalf = new RussianDoll(0.5);

dollNumFour.putInsideMe(dollNumThree);
dollNumFive.putInsideMe(dollNumFour);
dollNumEight.putInsideMe(dollNumFive);
dollNumEight.allDollsInsideMe();

dollNumEight.putInsideMe(dollNumOne);
dollNumTen.putInsideMe(dollNumHalf);