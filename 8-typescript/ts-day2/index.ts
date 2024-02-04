// array

// const arr: string[] = ["hello,", "hi"];


// // The readonly keyword can prevent arrays from being changed.

// const names: readonly string[] = ["yeaungzaw", "yeminzaw", "yemyozaw"];
// // names.push("hein htet zan");    // Error

// Union

// const arr: (string | number)[] = ["hello", 123];

// let arr: number[] | string;

// arr = "Hello World";
// arr = [1, 2, 3];

// console.log(arr);


// Type Inference - ဆိုတာ ကိုယ်က Type မသတ်မှတ်ဘဲနဲ့ ရေးလိုက်ရင် သူ့ဘာသာ typeသတ်မှတ်ပေးသွားတာကိုဆိုလိုတာ

// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(1);    // No Error
// numbers.push("1");  // Error


// Type Aliases
// Type Aliases ကို objမှမဟုတ်ဘူး၊ string, arrayတွေကိုလည်း ကြိုသတ်မှတ်လို့ရတယ်
// type Person = {
//     name: string,
//     age: number,
//     gender?: string
// }

// const data:Person[] = [
//     {name: "yeaungzaw", age: 25, gender: "male"},
//     {name: "yeminzaw", age: 21, gender: "hello world"}
// ]

// console.log(data[1].gender); // hello world


// To solve above problem

// type Person = {
//     name: string,
//     age: number,
//     gender?: "male" | "female"
// }

// const data:Person[] = [
//     {name: "yeaungzaw", age: 25, gender: "male"},
//     {name: "yeminzaw", age: 21, gender: "hello world"}
// ]

// console.log(data[1].gender); // Error


// Tuples

// type Person = {
//     name: string,
//     age: number,
//     gender?: "male" | "female"
// }

// const arr:[string, number, boolean, Person] = ["hello", 112, true, {name: "yeaungzaw", age: 21}];

// arr.push("hello"); // push လို့ရတယ် Error မတက်ဘူး။ အဲ့တာကြောင့် push လို့မရအောင် readonly နဲ့ တွဲသုံးသင့်တယ်


// Special Types

// any, never, unknown

// let age:any = 21;
// age = false;
// age = "Min Ga Lar Par";
// age = {};
// age= [];

// let printer = ():never => {
//     while(true) {
//         console.log("Ok");
//     }
//     console.log("true");
// }


// enum
// enum Gender {
//     male,
//     female,
//     others
// }

// type person = {
//     name: string,
//     age: number,
//     gender: Gender
// }

// const Terry: person = {
//     name: "terry",
//     age: 20,
//     gender: Gender.male
// }

// if (Terry.gender === Gender.male) {
//     console.log("ok");
// }


// Type Casting

// let x: unknown = "hello";
// console.log((x as string).length);


// Function

// type funer = (x: number, y: number) => void;

// const sum = (x: number, y: number): number => {
//     return x + y;
// } 

// const calc: funer = sum;
// console.log(calc("Hello", 2));