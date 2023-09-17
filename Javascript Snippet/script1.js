'use strict'

// function logger() {
//     console.log('My name is Jonas');
// }


// logger();
// logger();
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }


// fruitProcessor(5, 0);


// ########### function Declaration #############

/*

function calAge1(birthYear) {
    const age = 2023 - birthYear;
    return age;
}

const birthYear = parseInt(prompt("What is your BirthYear ?"));
console.log(`Your Age is ${calAge1(birthYear)}`);


// ########### function Expression #############


const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1995);

console.log(age2);

*/


// ########### Arrow Functions #############

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);


// const yearsUntilRetirement = birthYear => {
//     const age = 2023 - birthYear;
//     const retirement = 60 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1995));


// const birthYear = parseInt(prompt("What is your BirthYear"));
// const firstName = prompt("What is your name?")

// function yearsUntilRetirement(birthYear) {
//     const age = 2023 - birthYear;
//     const retirement = 60 - age;
//     return retirement;
// }

// console.log(`${firstName} has ${yearsUntilRetirement(birthYear)} years before retirement`)

// Function calling Another Function


// const cutPieces = function (fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;

// }

// console.log(fruitProcessor(2, 3));


// ##############################CODING CHALLENGE#############################

// const kScore1 = parseInt(prompt('Koalas 1st Score'));
// const kScore2 = parseInt(prompt('Koalas 2nd Score'));
// const kScore3 = parseInt(prompt('Koalas 3rd Score'));

// const dScore1 = parseInt(prompt('Dolphin 1st Score'));
// const dScore2 = parseInt(prompt('Dolphin 2nd Score'));
// const dScore3 = parseInt(prompt('Dolphin 3rd Score'));




// const avgKoalas = function calcAverage1() {
//     const calcAve1 = (kScore1 + kScore2 + kScore3) / 3;
//     return calcAve1;
// }


// const avgDolphins = function calcAverage2() {
//     const calcAve2 = (dScore1 + dScore2 + dScore3) / 3;
//     return calcAve2;
// }

// function checkWinner(avgK, avgD) {
//     if (avgK >= 2 * avgD) {
//         console.log(`Koalas win(${avgK} vs ${avgD}) `);

//     } else if (avgD >= 2 * avgK) {
//         console.log(`Dolphin wins(${avgD} vs ${avgK})`);

//     } else {
//         console.log('No Team Wins')
//     }
// }

// console.log(avgKoalas());
// console.log(avgDolphins());
// checkWinner(avgKoalas(), avgDolphins());



// const bills = [125, 555, 44];

// const tips = []

// function calcTip(bills) {
//     if (bills >= 50 && bills <= 300) {
//         const tip = bills * 0.15;
//         tips.push(tip);
//     } else {
//         const tip = bills * 0.20;
//         tips.push(tip);
//     }
// }

// const totalBill = 

// calcTip(125);
// calcTip(555);
// calcTip(44);
// console.log(tips);


// const jonasArray = [
//     'Jonas',
//     'Schmentmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Scmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);


// console.log(jonas.friends[0]);

// console.log(jonas.firstName + " has " + jonas.friends.length + " friends, and his bestfriend is called" + jonas.friends[0]);


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Scmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     display: function () {
//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence.`
//     }

// };

// console.log(jonas.display());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// console.log(mark.calcBMI() < john.calcBMI ? `mark's bmi (${mark.calcBMI()}) is higher than Johns (${john.calcBMI()})` : `john's bmi (${john.calcBMI()} is higher than mark ${mark.calcBMI()})`)

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types = [];


// for (let i = 0; i < 5; i++) {
//     console.log(jonasArray[i]);

//     // types[i] = typeof jonasArray[i];

//     // types.push(typeof jonas[i]);
// }

// console.log(types);



// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = jonasArray.length; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-------------Starting Exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }

// }


// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++;



// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);


// let dice = Math.random();
// dice = dice * 6;
// dice = Math.floor(dice) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.random();
//     dice = dice * 6;
//     dice = Math.floor(dice) + 1;
//     if (dice === 6) console.log('You Rolled a 6...')

// }


const bills = [22, 195, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i <= bills.length - 1; i++) {

    if (bills[i] >= 50 && bills[i] <= 300) {
        const tip = bills[i] * 0.15;
        tips.push(tip);
        totals.push(bills[i] + tip);
    } else {
        const tip = bills[i] * 0.20;
        tips.push(tip);
        totals.push(bills[i] + tip);
    }

}



console.log(bills);
console.log(tips);
console.log(totals);


arr = [];
var sum = 0;


function calcAverage(arr) {

}





// function calcTip(bills) {
//     if (bills >= 50 && bills <= 300) {
//         const tip = bills * 0.15;
//         tips.push(tip);
//     } else {
//         const tip = bills * 0.20;
//         tips.push(tip);
//     }
// }












































