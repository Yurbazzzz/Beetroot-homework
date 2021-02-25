// Создать массив аудиторий академии. Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20) и названия факультета, для которого
// она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
// Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).


const audience = [
    {name: 'Math', size: 20, faculty: 'MATH'},
    {name: 'Geo', size: 14, faculty: 'GEO'},
    {name: 'Chemisrty', size: 17, faculty: 'Chemistry'},
]

// Вывод на экран всех аудиторий;
console.log(audience);


// Вывод на экран аудиторий для указанного факультета;

const findByFaculty = faculty => audience.filter(group => group.faculty === faculty)

console.log(' Вывод на экран аудиторий для указанного факультета:',findByFaculty('GEO'));



// Вывод на экран только тех аудиторий, которые подходят для переданной группы.

const findBySize = size => audience.filter(group => group.size === size)

console.log('Вывод на экран только тех аудиторий, которые подходят для переданной группы:',findBySize(20));







// Функция сортировки аудиторий по количеству мест;

audience.sort(function (a, b) {
    if (a.size > b.size) {
      return 1;
    }
    if (a.size < b.size) {
      return -1;
    }
    return 0;
});

console.log('Сортировка аудиторий по количеству мест:', audience.sort());


// Функция сортировки аудиторий по названию (по алфавиту).

audience.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
});

console.log('Сортировкf аудиторий по названию:', audience.sort());

