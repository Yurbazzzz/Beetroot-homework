// Создать массив «Список покупок». Каждый элемент массива является объектом,
// который содержит название продукта, необходимое количество и куплен или нет.
// Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом,
// чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки 
// с уже существующим в списке продуктом, необходимо увеличивать количество
// в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const shoppingList = [
    {
        name: 'apple',
        num: 3,
        buy: 1, //true
    },
    {
        name: 'bananas',
        num: 5,
        buy: 0, //false
    },
    {
        name: 'oranges',
        num: 2,
        buy: 0, //false
    },
    {
        name: 'pinapple',
        num: 1,
        buy: 1, //true
    },
    {
        name: 'raspberries',
        num: 10,
        buy: 1, //true
    }
]



const name = prompt('Enter name');
const num = +prompt('Enter value');
const buy = +prompt('has this fruit already been purchased? 1-Yes/0-No');


function buyProduction() {
    const name1 = prompt('enter the purchased product');
    shoppingList.push({name1, buy: 1});
}
buyProduction();


shoppingList.push({name, num, buy});


shoppingList.sort(function (b, a) {
    return b.buy - a.buy;
});

console.log(shoppingList);






