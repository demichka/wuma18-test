const alphabet = 'eyuioåaöäbcdfghjklmnpqrstvwxz';

//Exercise 1
console.log('1: ' + 'Hello world!');

//Exercise 2
function printName(name) {
    let res = 'Hello, ' + name + '!';
    return res;
}

console.log('2: ' + printName('Zhenya'));



//Exercise 3,4
function answerName() {
    let res = prompt('Vad heter du?', 'Name');
    return res;
}

let userName = answerName();

if (userName === null || userName === '') {
    console.log('4 exercise: Good bye!');
} else {
    console.log('3 exercise: ' + printName(userName));
}

//Exercise 5
function logNumbers() {
    console.log('5 exercise: ');
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
logNumbers();

//Exercise 6
function logNumbers2() {
    console.log('6 exercise: ');
    for (let i = 5; i < 16; i++) {
        console.log(i);
    }
}

logNumbers2();

//Exercise 7
function logNumbers3() {
    console.log('7 exercise: ');
    for (let i = 10; i >= 1; i--) {
        console.log(i + '...');
    }
}

logNumbers3();

//Exercise 8
function logNumbers4() {
    console.log('8 exercise: ');
    let string = '';
    for (let i = 1; i <= 10; i++) {
        string += i + '...';
    }
    console.log(string);
}

logNumbers4();


//Exercise 9
function isEven(aNumber) {
    let res = aNumber % 2;
    return res;
}

console.log('9 exercise: ' + isEven(4));

//Exercise 10
function logNumbers5() {
    let string = '';
    for (let i = 1; i <= 10; i++) {
        isEven(i);
        if (!isEven(i)) {
            string += i + '...';
        } else {
            string += i + '.';
        }
    }
    return string;
}

console.log('10 exercise: ' + logNumbers5());

//Exercise 11
let string = 'Hej på dig';
console.log('11 exercise: ' + string.indexOf('dig'));

//Exercise 12,13
let userLetter = prompt('Enter a letter').toLowerCase();
function checkLetter(aLetter) {
    let res = '';
    for (let letter of aLetter) {
        if (alphabet.includes(letter)) {
            res = true;
        } else {
            res = false;
        }
    }
    return res;
}
console.log('12 exercise: ' + checkLetter(userLetter));


let userArray = prompt('Enter letter(s) and nothing else').toLowerCase().split('');

function checkSymbols(aString) {
    let res = true;
    let alfa = alphabet.split('');
    for (let j = 0; j < aString.length; j++) {
        if (!alfa.includes(aString[j])) {
            res = false;
            break;
        }
    }
    return res;
}
console.log('13 exercise: ' + checkSymbols(userArray));

//Exercise 14
let regAlpha = new RegExp(/[a-z, öåä]/gi);
let userText = prompt('Enter something');

function checkSymbolsWithRegEx(text) {
    let res = true;
    for (let i = 0; i < text.length; i++) {
        if (text[i].search(regAlpha) < 0){
            console.log(text[i].search(regAlpha));
            console.log('checked ' + text[i]);
            res = false;
            break;
        }
    }
    return res;
}

console.log('14 exercise: ' + checkSymbolsWithRegEx(userText));
