console.log("Looping");

// စ ဆုံး တိုး
// 0 5 0,1,2,3,4
// x = 0
// x < 5
// x++


// for (let i = 0; i < 10; i+=5){
//     console.log(i, "*");
//     console.log(i, "**");
//     // console.log(i, "***");
// }


// continue, break

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }


// loop array

const fruits = ["apple", "orange", "mango", "banana", "lime", "lemon"];
// console.log(fruits);

// for loop

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }


// for of loop

// for (fruit of fruits) {
//     console.log(fruit);
// }


// for in loop

// for (x in fruits) {
//     console.log(x, fruits[x]);
// }


// loop obj

const obj = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
    d: "ddd"
}

console.log(obj);


// for in loop

for (x in obj) {
    console.log(x, obj[x]);
}