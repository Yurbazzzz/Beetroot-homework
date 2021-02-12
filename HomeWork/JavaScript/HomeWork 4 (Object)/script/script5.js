// Создать функцию createUser() которая создает объект со значениями name,
// age, height, weight. Для свойств age, height, weight должен быть тип number,
// иначе вывести alert, что неверный тип и объект не должен создаться.
// Если в функцию не переданы аргументы, вывести аргументы по умолчанию.
// Функция должна вызываться так createUser('John', 39, 178, 67)




let name = prompt('Enter you name:');
let age = prompt('Enter you age:');
let height = prompt('Enter you height:');
let weight = prompt('Enter you weight:');



let user = {
    name: name,
    age: age,
    height: height,
    weight: weight,
}

console.log(user);


