console.log('1: ' + 'Hello world!');

function printName(name) {
    let res =  'Hello, ' + name + '!';
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
}
else {
    console.log('3: ' + printName(userName));
}

function logNumbers() {
    console.log('5 exercise: ');
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
}
logNumbers();

function logNumbers2() {
    console.log('6 exercise: ');
    for(let i = 5; i < 16; i++) {
        console.log(i);
    }
}

logNumbers2();
