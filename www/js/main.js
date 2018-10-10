console.log('1: ' + 'Hello world!');

function printName(name) {
    let res = 'Hello, ' + name + '!';
    return res;
}

console.log('2: ' + printName('Zhenya'));

function answerName() {
    let res = prompt('Vad heter du?', 'Name');
    return res;
}


let userName = answerName();

if (userName === null || userName === '') {
    console.log('4: Good bye!');
} else {
    console.log('3: ' + printName(userName));
}

function logNumbers() {
    console.log('5 exercise: ');
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
logNumbers();

function logNumbers2() {
    console.log('6 exercise: ');
    for (let i = 5; i < 16; i++) {
        console.log(i);
    }
}

logNumbers2();

function logNumbers3() {
    console.log('7 exercise: ');
    for (let i = 10; i >= 1; i--) {
        console.log(i + '...');
    }
}

logNumbers3();

function logNumbers4() {
    console.log('8 exercise: ');
    let string = '';
    for (let i = 1; i <= 10; i++) {
        string += i + '...';
    }
    console.log(string);
}

logNumbers4();

function isEven(aNumber) {
    let res = aNumber % 2;
    return res;
}

console.log('9 exercise: ' + isEven(4));

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