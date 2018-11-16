class RussianDoll {
    constructor(size) {
        this.size = size;
        this.insideMe = [];
    }

    putInsideMe(doll) {
        if(this.insideMe.length > 0) {
            let dollInside = this.insideMe.map(function(myDoll) {
                return myDoll.size;
            });
            console.log(`I have already doll #${dollInside} inside me!`);
        }
        else {
            if(doll.size >= this.size) {
                console.log(`I am #${this.size} doll. I cannot have a doll #${doll.size} inside me!`);
            }
            else {
                this.insideMe.push(doll);
                console.log(`Doll #${this.size} has inside a doll #${doll.size}`);
            }
        }
    }
    allDollsInsideMe() {
        let allDolls = [];
        let dollInside =  this.insideMe.map(function(myDoll) {
            return myDoll.size;
         });
         console.log(dollInside);

        //  let dollInsideName = dollInside.size;
         allDolls.concat(dollInside);
         for (let doll in allDolls) {
            console.log(doll);
         }
         if(dollInside.insideMe.length > 0) {
            dollInside =  dollInside.insideMe.map(function(myDoll) {
                return myDoll.size;
             });
             dollInsideName = dollInside.size;
         allDolls.concat(dollInsideName);
         }
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

dollNumFive.putInsideMe(dollNumFour);
dollNumEight.putInsideMe(dollNumFive);
dollNumEight.allDollsInsideMe();
// dollNumEight.putInsideMe(dollNumFour);
