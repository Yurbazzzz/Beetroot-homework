// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени,
//  может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд,
//   то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hour: 23,
    minutes: 59,
    seconds: 59,
}

function showTime() {
    alert(time.hour + ':' + time.minutes + ':' + time.seconds);
}

function editTime() {
    const editHour = +prompt('Enter Hour');
    const editMin = +prompt('Enter Min');
    const editSec = +prompt('Enter Sec');

    let sum1 = time.hour + editHour;
    let sum2 = time.minutes + editMin;
    let sum3 = time.seconds + editSec;

    if (sum1 === 23) {
        sum1 = 00;
    } else if (sum2 === 59) {
        sum1 + 1;
        sum2 = 00;
    } else if (sum3 === 59) {
        sum2 + 1;
        sum3 = 00;
    }

    alert(sum1 + ':' + sum2 + ':' + sum3);

} 

showTime()
editTime()

