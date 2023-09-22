console.log("Build in object");

// const str = new String("san kyi tar par byar");
// console.log(str);
// console.log(str.length);
// console.log(str[8]);
// console.log(str[9]);
// console.log(str[10]);
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.substr(4, 7));
// console.log(str.substring(4, 11));
// console.log(str.slice(4, 11));
// console.log(str.search("hein"));
// console.log(str.replace("kyi", "aaa"));
// console.log(str.replaceAll("ar", "zzz"));
// console.log(str.split(" "));


// let x = "12";

// console.log(x.padStart(4, "0"));
// console.log(x.padEnd(4, "0"));

// console.dir(String);



// const num = new Number(229302.2220320);
// console.dir(Number);

// console.log(num.toFixed(2));
// console.log(num.toExponential(7));
// console.log(num.toPrecision(6));

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);


// console.log(Number.isFinite(123/0));
// console.log(Number.isInteger(123.45));
// console.log(Number.isNaN(15/"a"));
// console.log(15/"a");


// const weight = "230.45kg";
// console.log(Number.parseInt(weight));
// console.log(Number.parseFloat(weight));


// console.dir(Math);
// console.log(Math.PI * r**2);

// console.log(Math.abs(123));
// console.log(Math.abs(-123));

// console.log(Math.ceil(0.2));
// console.log(Math.floor(0.99));


// const nums = [2, 52, 62, -8, 4];

// console.log(Math.min(...nums));
// console.log(Math.max(2, 52, 62, -8, 4));

// console.log(Math.round(0.9));
// console.log(Math.round(0.4));
// console.log(Math.round(0.5));
// console.log(Math.sqrt(16));


// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// console.log(Math.round(getRandomArbitrary(0, 10)));



console.dir(Object);

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};


// console.log(Object.keys(object1));
// console.log(Object.values(object1));

// console.log(object1.hasOwnProperty("a"));
// console.log(object1.hasOwnProperty("z"));


console.dir(Function);

// Function declaration
function run(x, y) {
    console.log(arguments);
    return x + y;
}

// Function expression
const run2 = function(x, y) {
    return x + y;
}

// console.log(Function);

const run3 = new Function("x", "y", "return x + y");


// console.log(run(4, 5));
// console.log(run2(4, 5));
// console.log(run3(4, 5));

// console.dir(run.bind(null, 4, 5).apply());
// console.log(run.call(null, 4, 5));

// console.log(run(4, 5, 2, 22, 33, 44));

// console.dir(String);
// console.dir(Number);
// console.log( {} );
// console.log( [] );

// function run5(x, y) {
//     return x + y();
// }

// console.log(run5(4, function() { return 5; }));

const array1 = ['a', 'b', 'c', 'd'];

// array1.forEach(function(el, i, arr) {
//     console.log(el, i, arr);
// });

// for (el of array1) {
//     console.log(el);
// }
