// console.log("conditional statement");

// if (false) {
//     console.log("I'm true");
// } else {
//     console.log("I'm false");
// }

// let wakeUpTime = 9;

// if (wakeUpTime > 8) {
//     console.log("ရိုက်ခံရပါပြီ");
// } else {
//     console.log("morning par");
// }

// let pocketMoney = 100;

// function howToGo(pocketMoney) {
//     if (pocketMoney >= 200) {
//         return("ကျောင်းကို bus နဲ့သွားမယ်");
//     } else {
//         return("ကျောင်းကို လမ်းလျှောက်သွားမယ်");
//     }
// }

// console.log(howToGo(500));
// console.log(howToGo(100));
// console.log(howToGo(200));
// console.log(howToGo(600));


// function howToGo(pocketMoney, busFee = 300) {
//     if (pocketMoney >= busFee) {
//         console.log("ကျောင်းကို bus နဲ့ သွားမယ်");
//         pocketMoney -= busFee;
//         console.log("လက်ကျန်ငွေ", pocketMoney);
//         if (pocketMoney >= busFee) {
//             console.log("အိမ်ကို bus နဲ့ ပြန်မယ်");
//         } else {
//             console.log("အိမ်ကို လမ်းလျှောက်ပြန်မယ်")
//         }
//     } else {
//         console.log("ကျောင်းကို လမ်းလျှောက်သွားမယ်")
//         console.log("အိမ်ကို လမ်းလျှောက်ပြန်မယ်")
//     }
// }

// console.log(howToGo(500));
// console.log(howToGo(100));
// console.log(howToGo(1000));


// function waitStudent(time) {
//     if (time > 10) {
//         return "စာစသင်မယ်";
//     } else {
//         return "ကျောင်းသားစောင့်မယ်";
//     }
// }

// console.log(waitStudent(10));
// console.log(waitStudent(12));
// console.log(waitStudent(13));


// function checkMark(mark) {
//     if (mark >= 80) {
//         console.log("You passed with D");
//     } else if (mark >= 40) {
//         console.log("You passed");
//     } else if (mark < 40) {
//         console.log("You fail");
//     }
// }

// checkMark(80);
// checkMark(40);
// checkMark(30);


// ternary operator

// console.log(true ? "စားပြီးပါပြီ" : "မစားရသေးပါဘူး");
// console.log(false ? "စားပြီးပါပြီ" : "မစားရသေးပါဘူး");

// I passed in myanmar exam
// I failed in myanmar exam
// I passed with D in myanmar exam


// function check(subject, mark) {
    // if (mark > 80) {
    //     console.log(`I passed with D in ${subject} exam`);
    // } else if (mark >= 40) {
    //     console.log(`I passed in ${subject} exam`);
    // } else {
    //     console.log(`I failed in ${subject} exam`);
    // }

    // console.log(`I will ${mark > 40 ?  "pass" : "fail"} the ${subject} exam`)
// }

// check("Myanmar", 50);
// check("English", 30);
// check("Math", 80);

//  mdn ထဲမှ truthy, falsy ဖတ်ရန်

// if(x) {
//     console.log("it is true");
// } else {
//     console.log("it is false");
// }
 
// logical operator
function entrance(examMark, viberMark) {
    if(examMark > 60 && viberMark > 60) {
        return "You can pass";
    }

    return "You can't pass";
}

// console.log(entrance(90, 50));
// console.log(entrance(62, 65));

function canIVote(age, isCitizen) {
    if (age >= 18 && isCitizen) {
        return "You can vote";
    }

    return "You cant' vote";
}

// console.log(canIVote(50, true));
// console.log(canIVote(50, false));
// console.log(canIVote(5, true));

function chooseBus(busNum) {
    if (busNum === 20 || busNum === 65) {
        return "You can reach Kyauk Myaung Campus";
    }

    return "You can't reach";
}

// console.log(chooseBus(20));
// console.log(chooseBus(65));
// console.log(chooseBus(10));

// console.log(!true);
// console.log(!false);

