const alphabet = 'eyuioåaöäbcdfghjklmnpqrstvwxz';

function exc3() {
    let userName = answerName();

    if (userName === null || userName === '') {
        console.log('4 exercise: Good bye!');
    } else {
        console.log('3 exercise: ' + printName(userName));
    }
}

function exc10() {
    console.log('10 exercise: ' + logNumbers5());

}

function exc12() {
    let userLetter = prompt('Enter a letter').toLowerCase();
    console.log('12 exercise: ' + checkLetter(userLetter));
}

function exc13() {
    let userArray = prompt('Enter letter(s) and nothing else').toLowerCase().split('');
    console.log('13 exercise: ' + checkSymbols(userArray));

}

function exc14() {
    let userText = prompt('Enter something');
    console.log('14 exercise: ' + checkSymbolsWithRegEx(userText));
}

function exc15() {
    let email = prompt('Enter your email');
    validateEmail(email);
}

function exc16() {
    let email = prompt('Enter your email');
    console.log(validateEmailWithRegEx(email));
}

//Exercise 1
console.log('1: ' + 'Hello world!');

//Exercise 2
function printName(name) {
    let res = 'Hello, ' + name + '!';
    return res;
}

console.log('2 exercise: ' + printName('Zhenya'));



//Exercise 3,4
function answerName() {
    let res = prompt('Vad heter du?', 'Name');
    return res;
}

//Exercise 5
function logNumbers() {
    console.log('5 exercise: ');
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

//Exercise 6
function logNumbers2() {
    console.log('6 exercise: ');
    for (let i = 5; i < 16; i++) {
        console.log(i);
    }
}

//Exercise 7
function logNumbers3() {
    console.log('7 exercise: ');
    for (let i = 10; i >= 1; i--) {
        console.log(i + '...');
    }
}

//Exercise 8
function logNumbers4() {
    console.log('8 exercise: ');
    let string = '';
    for (let i = 1; i <= 10; i++) {
        string += i + '...';
    }
    console.log(string);
}

//Exercise 9
function isEven(aNumber) {
    let res = aNumber % 2;
    if (res === 0) {
        res = 'even';
    } else {
        res = 'odd';
    }
    return res;
}

function exc9() {
    let a = 6;
    console.log('9 exercise: number ' + a + ' is ' + isEven(a));
}

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

//Exercise 11
let string = 'Hej på dig';
console.log('11 exercise: ' + string.indexOf('dig'));

//Exercise 12,13
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

//Exercise 14

function checkSymbolsWithRegEx(text) {
    let res = true;
    let regAlpha = new RegExp(/[a-z\öåä]/gi);
    for (let i = 0; i < text.length; i++) {
        if (text[i].search(regAlpha) < 0) {
            res = false;
            break;
        }
    }
    return res;
}

//Exercise 15

function validateEmail(userText) {
    const atSign = '@';
    let hasAtSign = userText.includes('@');
    let matchAtSign = [];
    let dotIndex = '.';
    for (let i = 0; i < userText.length; i++) {
        let temp = userText[i].search(atSign);
        if (temp !== -1) {
            matchAtSign.push(temp);
        }
    }   
    let indexAtSign = userText.indexOf(atSign);
    dotIndex = userText.lastIndexOf('.');
    let emailValid = true;
    try {
        if (userText.length < 4) throw "Error: minlength of email is 4 symbols";
        if(!hasAtSign) throw "Error: input has no @";
        if(matchAtSign.length > 1) throw "Error: double@";
        if(indexAtSign < 2) throw "Error: email should have minimum 2 letters before @";
        if(dotIndex >= userText.length - 2) throw "Error: email should have minimum 2 letters efter last dot";
        if(dotIndex <= indexAtSign + 2) throw "Error: email shoul have minimum 2 letters between @ and last dot";
    }
    catch(error) {
        console.log('Email invalid. ', error);
        emailValid = false;
    }
    if (emailValid) {console.log(`Your email <${userText}> is valid.`)};
}

//Exercise 16

function validateEmailWithRegEx(userText) {
    let validEmail = true;
    let hasAtSign = [];
    hasAtSign = userText.match(/@/g);
    let dotIndex = userText.lastIndexOf('.');
    let atSignIndex = userText.search(/@/g);
    if (
        userText.length <= 4 ||
        !hasAtSign ||
        hasAtSign.length > 1 ||
        dotIndex >= userText.length - 2 ||
        dotIndex <= atSignIndex + 2
        ) {  
        validEmail = false;
    }
    
    return validEmail;
}