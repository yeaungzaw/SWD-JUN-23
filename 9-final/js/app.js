// Syntax Error
// if () {

// }

// lat x = 5;


// Runtime Error
// chatgpt တွင် စမ်းကြည့်ရန်

// ===================

// Error Handling - try -- catch -- finally

// console.log("one");

// try {
//     console.log(x + y);
//     let x = 5;
//     let y = 10;
//     // console.log(myName);
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("all done");
// }

// console.log("two");

// console.log("three");


// Custom Error Message
// try {
//     let x = 5;
//     let y = 10;
//     if (x < y) {
//         throw new Error("something wrong!");
//     }
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("all done");
// }


// Promise

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (false) {
//             resolve("resolve code");
//         } else {
//             reject("reject code");
//         }
//     }, 1000)
// })

// p.then((data) => {
//     console.log(data);
// })

// p.catch((error) => {
//     console.log(error);
// })


// fetch

// fetch
// .then((result) => {
    
// }).catch((err) => {
    
// });


// GEC, FEC

// 1994-07-22

function findBirthYear(bd) {
    const bdDate = new Date(bd);
    return bdDate.getFullYear();
}

const myName = "Hein Htet Zan";
const myBd = "1994-07-22";

function findAge(birthYear) {
    const date = new Date();
    return date.getFullYear() - birthYear;
}

let x = 10;
y = 15;

function intro(name, bd) {
    const age = findAge(findBirthYear(myBd));
    return `I'm ${myName} and ${age} year${age > 1 ? "s" : ""} old`;
}

console.log(intro(myName, myBd));

// ================================


// synchronous အလုပ်လုပ်ပုံ block
// console.log("start");

// let total = 0;
// for (let i = 0; i < 999999; i++) {
//     total += i;
// } 
// console.log(total);

// console.log("end");

// asynchronous အလုပ်လုပ်ပုံ
// console.log("start");

// setTimeout(() => {
//     console.log("hello");
// })

// console.log("end");