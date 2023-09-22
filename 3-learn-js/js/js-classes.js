
// const obj = {

//     // properties
//     a: "aaa",
//     b: "bbb",
//     c: "ccc",

//     // methods
//     d() {
//         return "d";
//     },

//     e() {
//         return "e";
//     }
// }

// console.log(obj);

// const st1 = {
//     name: "kyaw kyaw",
//     phone: "0923884738",
//     township: "Tamwe"
// }

// const st2 = {
//     name: "mg mg",
//     phone: "097347737",
//     township: "bahan"
// }

// const st3 = {
//     name: "hla hla",
//     phone: "0926356323",
//     township: "hladen"
// }

// Classes & Object

// class Student {
//     name;
//     phone;
//     township;
//     age;

//     introduce() {
//         return `My name is ${this.name} and was born in ${this.birthYear()}`;
//     }

//     birthYear() {
//         return 2023 - this.age;
//     }
// }

// const st1 = new Student; // instantiate
// st1.name = "hein htet zan";
// st1.phone = "093847827";
// st1.township = "bahan";
// st1.age = 19;

// console.log(st1);
// console.log(st1.introduce());

// const st2 = new Student;
// st2.name = "Su Su";
// st2.phone = "093884738";
// st2.township = "Tamwe";
// st2.age = 20;

// console.log(st2);
// console.log(st2.introduce());

// const st3 = new Student;
// st3.name = "Kyaw Kyaw";
// st3.phone = "093878374";
// st3.age = 22;

// console.log(st3);
// console.log(st3.introduce());

// // console.log({});

// constructor & initialization

// class A {

//     constructor(z) {
//         console.log("this is A Constructor", z);
//     }

//     x () {
//         return "this is x";
//     }

//     y() {
//         return "this is y";
//     }
// }

// const a = new A("zzz");
// console.log(a);
// console.log(a.x());
// console.log(a.y());

// Note
// Instantiate လုပ်လိုက်တာနဲ့ Constructor အလုပ်လုပ်မယ်
// အရင်ဆုံးအလုပ်လုပ်တာဖြစ်တာတဲ့အတွက် အောက်ကကောင်တွေ(properties, method)ကို ချယ်လယ်လို့ရတယ်


// class Student {
    
//     subjects = ["WDF", "SWD", "WAD"]

//     constructor(inputName, inputGender, inputAge, inputTownship, inputSubject) {
//         this.name = inputName;
//         this.gender = inputGender;
//         this.proNoun = this.proNoun();
//         this.age = inputAge;
//         this.birthYear = 2023 - inputAge;
//         this.township = inputTownship;
//         this.subject = this.subjects[inputSubject]
//     }

//     proNoun() {
//         return this.gender === "male" ? "he" : "she";
//     }

//     intro() {
//         return `My name is ${this.name} & ${this.proNoun} was born in ${this.birthYear} at ${this.township}`;
//     }
// }

// const st1 = new Student("kyaw kyaw", "male", 29, "bahan", 0);
// console.log(st1);

// const st2 = new Student("Su Su", "female", 25, "tamwe", 1);
// console.log(st2);

// const st3 = new Student("mg mg", "male", 21, "hladen", 1);
// console.log(st3);


// static properties & methods

// class A {
//     static x = "xxx";
//     static y = "yyyy";

//     static z() {
//         return "method z";
//     }
// }

// // const a = new A;
// // console.log(a.x);
// // console.log(a.y);
// // console.log(a.z());

// console.log(A.x);
// console.log(A.z());

// access modifier (public, protected(မပါ), private #) & properties, methods

// class A {
//     x = "xxx";
//     #y = "yyyy";

//     #z() {
//         return "method z";
//     }

//     b() {
//         return this.#y + " b method";
//     }
// }

// const a = new A;
// console.log(a);
// // console.log(a.#y);
// // console.log(a.z());
// // console.log(a.#z());
// console.log(a.b());


// Inheritance(extends)

// class A {
//     x = "xxx";
//     y = "yyy";
// }


// class B extends A {
//     z = "zzz";
// }

// const b = new B;
// console.log(b);


class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    eat() {
        return `${this.name} can eat`;
    }

    sleep() {
        return `${this.name} can sleep`;
    }
}

class Student extends Person {
    constructor(name, gender, subject) {
        super(name, gender);
        this.subject = subject;
    }

    learn() {
        return `${this.name} can learn ${this.subject}`
    }
}

// const s = new Student("kyaw kyaw", "male", "web development");
// console.log(s.name);
// console.log(s.gender);
// console.log(s.eat());
// console.log(s.learn());


class Monitor extends Student {
    constructor(name, gender, subject, room) {
        super(name, gender, subject);
        this.room = room;
    }

    guard() {
        return `${this.name} can guard students from ${this.room}`;
    }
}

// const m = new Monitor("Su Su", "female", "Web Development", "A");
// console.log(m);


// getter & setter 
class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    checkBalance() {
        return this.#balance;
    }

    withDraw(amount) {
        this.#balance -= amount;
    }

    constructor(name) {
        this.name = name;
    }
}

const myBankAccount = new BankAccount("hein htet zan", 100);

myBankAccount.deposit(100);
myBankAccount.deposit(20);
myBankAccount.deposit(50);

myBankAccount.withDraw(30);

console.log(myBankAccount.checkBalance());

// myBankAccount.balance = 1000; //overwrite
// console.log(myBankAccount.#balance); //access
// myBankAccount.setBalance(100);
// console.log(myBankAccount.getBalance());