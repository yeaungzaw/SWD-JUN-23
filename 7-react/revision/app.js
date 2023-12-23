const fruits = ["apple", "orange", "mango", "banana"];

// console.log(fruits);

// Array

// 1, Mutable Way - Add
// console.log(fruits);

// fruits.push("lemon");

// console.log(fruits);

// 2, Immutable Way - Add

// const newFruits = [...fruits, "lemon"];
// console.log(fruits);
// console.log(newFruits);

// 1, Mutable Way - Delete

// console.log(fruits);

// fruits.splice(2, 1);

// console.log(fruits);

// 2, Immutable Way - Delete

// console.log(fruits);

// const newFruits = fruits.filter((fruit) => fruit !== "mango");

// console.log(fruits);
// console.log(newFruits);

// Obj

const obj = { a: "aaa", b: "bbb", c: "ccc" };

// 1, Mutable Way - Add

// console.log(obj);

// obj.d = "ddd";

// console.log(obj);

// 2, Immutable Way - Add

// const newObj = { ...obj, d: "ddd" };
// console.log(obj);
// console.log(newObj);

// 1, Mutable Way - တန်ဖိုးပြောင်း

// console.log(obj);
// obj.b = "ddd";
// console.log(obj);

// 2, Immutable Way

// console.log(obj);

// const newObjects = { ...obj, b: "ddd" };

// console.log(obj);
// console.log(newObjects);

// Explain above
// const obj2 = { a: "aaa", b: "bbb", c: "ccc", b: "ddd" };
// console.log(obj2);
