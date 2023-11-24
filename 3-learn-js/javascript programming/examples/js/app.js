const numbers = [14, 2, 5, 3, 7, 2, 1, 1];

// total number of array
// remove duplicate element
// the sum each element value to double

// 1. Imperative - state, statement

// let total = 0;

// for (let number of numbers) {
//     total += number;
// }

// console.log(total);

// let result = [];

// for (let number of numbers) {
//     !result.includes(number) && result.push(number);
// }

// console.log(result);

// let total = 0;

// for (let number of numbers) {
//     total += (number * 2);
// }

// console.log(total)


// 2. Declarative

// console.log(numbers.reduce((pv, cv) => pv + cv));

// console.log([...new Set(numbers)]);

// console.log(numbers.reduce((pv, cv) => pv + (cv * 2), 0));


// 2,1 Functional Programming

// 1. Pure Functions: avoids changing state and mutable data

// Impure function with side effect
let total = 0;
function add(x) {
    total += x;
    return total;
}

// console.log(add(5)); // 5
// console.log(add(5)); // 10
// console.log(add(5)); // 15

// Pure function
function pureAdd(x, y) {
    return x + y;
}

// console.log(pureAdd(3, 5)); // 8
// console.log(pureAdd(3, 5)); // 8
// console.log(pureAdd(3, 5)); // 8

// 2. Higher Order Function

const arrayFilter = (arr, filter) => {
    let result = [];
    for (let x of arr) {
        if (filter(x)) {
            result.push(x);
        }
    }
    return result;
}

// console.log(arrayFilter(numbers, (el) => el % 2 === 0));

const arrayMap = (arr, map) => {
    let result = [];
    for (let x of arr) {
        result.push(map(x));
    }
    return result;
}

// console.log(arrayMap(numbers, (el) => el * 2));


// 3. Immutable

const obj = {
    name: "yeaungzaw",
    age: 21,
    gender: "male"
}

// obj.money = 100000;

// const r = {...obj, money: 100000}

// console.log(r);

// console.log(obj);

// obj.name = "Ko Htet";
// console.log(obj);

// const r = {...obj, name: "Ko Htet"};
// console.log(r);
// console.log(obj);


// 4. Recursion

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// console.log(factorial(5));


// 5. Function Composition