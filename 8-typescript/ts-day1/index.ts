// npm i -g yarn
// yarn add tsc
// npx tsc index.ts --watch

// // Primitive
// let male:boolean = true;
// let num:number = 1;
// let str:string = "Hello World";

// let hello = "Hello";

// // Object
// // Interface vs Type Aliases

// type personDT = {
//     name:string,
//     age:number,
//     gender:string
//     hello?:string
// }

// type NRC = {
//     nation: string;
// }

// let person:personDT & NRC = {
//     name: "Shinn",
//     age: 19,
//     gender: "male",
//     nation: "Myanmar",
// };

// console.log(person.name);

const sum = (x:number, y: number):void => {
    console.log(x + y);
    // return x + y;
}

sum(1, 2);
// console.log(sum(1, 2));
// console.log(sum("1", 2));