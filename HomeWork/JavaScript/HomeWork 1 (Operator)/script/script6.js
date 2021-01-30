let amount = prompt("Enter valute UAN");
let currency = prompt("USD = 1, EUR = 2, AZN = 3");
    switch(currency) {
        case '1':
            alert(amount/28 + 'USD');
        break;
        case '2':
            alert(amount/34 + 'EUR');
        break;
        case '3':
            alert(amount/116+ 'AZN');
        break;
    }
