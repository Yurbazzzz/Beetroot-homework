// Зациклить калькулятор. 
// Запросить у пользователя 2 числа и знак, решить пример,
// вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.

let chislo = prompt("Введите число");
let znak = prompt("Введите знак");
let chislo2 = prompt("Введите число");

let total

while (i < 10) {
    switch (znak){
        case ("*"):
            alert(chislo * chislo2);
        break;

        case ("/"):
            alert(chislo / chislo2);
        break;

        case ("-"):
            alert(chislo - chislo2);
        break;

        case ("+"):
            alert(chislo + chislo2);
        break;
    }
}