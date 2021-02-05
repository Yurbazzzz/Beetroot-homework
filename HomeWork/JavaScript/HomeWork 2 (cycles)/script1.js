const num1 = +prompt('Enter first number');
const num2 = +prompt('Enter end number');
let result = 0;

for (let i = num1; i < num2; i++) {
    result += i;
}
alert(result)
