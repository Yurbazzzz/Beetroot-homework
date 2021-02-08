// Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое больше,
// чем второе; и 0 – если числа равн

let num1 = +prompt('Enter first num');
let num2 = +prompt('Enter second num');

function findNum() {
    if (num1 < num2) {
        console.log("-1");
    }else if (num1 === num2) {
        console.log("0");
    }
    else {
        console.log("1");
    }
}

findNum()