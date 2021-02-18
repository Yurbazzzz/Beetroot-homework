// Создать массив, описывающий чек в магазине.
// Каждый элемент массива состоит из названия товара,
// количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

const check = [
  {name: 'apple', num: 3, cost: 10,},
  {name: 'bananas', num: 5, cost: 12,},
  {name: 'oranges', num: 2, cost: 5,},
  {name: 'pinapple', num: 1, cost: 15,},
  {name: 'raspberries', num: 10, cost: 3,}
]


// Распечатка чека на экран;

console.log(check);


// Подсчет общей суммы покупки;

const calcSumProduct = () => check.reduce((prev, item) => prev + (item.num * item.cost),0)

console.log('calcSumProduct', calcSumProduct());


// Получение самой дорогой покупки в чеке;
check.sort(function (a, b) {
    if (a.cost < b.cost) {
      return 1;
    }
    if (a.cost > b.cost) {
      return -1;
    }
    return 0;
});

console.log('Получение самой дорогой покупки в чеке:', check.sort());


// Подсчет средней стоимости одного товара в чеке.

const srCost = {name: 'apple', num: 3, cost: 10,}


const calcSrCostProduct = srCost.cost / srCost.num;

console.log('Подсчет средней стоимости одного товара в чеке (aplle) ', calcSrCostProduct);

