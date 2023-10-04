// Function Statement or Function Declaration
// function run () {
//     return "this is run";
// }

// Function Expression
// const run = function() {
//     return "this is run";
// }

// Arrow Function (One line Statement)
// const run = () => "this is run";

// console.log(run());

// Multiple Statement
// const run = () => {
//     console.log("arrow fun");
//     return "this is run";
// };

// console.log(run());

// const area = (w, h) => w * h;

// console.log(area(18, 60));

const intro = (name, dateOfBirth) => {
    // My name is hein htet zan, I'm 19 years old
    const date = new Date();
    const currentYear = date.getFullYear();

    const bd = new Date(dateOfBirth);
    const birthYear = bd.getFullYear();

    const age = currentYear - birthYear;

    return `My name is ${name}, I'm ${age} years old`;
}

console.log(intro("hein htet zan", "1994-7-22"));
console.log(intro("su su", "2003-12-30"));