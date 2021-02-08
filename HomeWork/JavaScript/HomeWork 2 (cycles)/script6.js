while (true) {
    const a = +prompt('Введите первое число');
    const op = prompt('Выберете знак - + / *');
    const b = +prompt('Введите второе число');
    const action = {
      '+': () => a + b,
      '-': () => a - b,
      '/': () => a / b,
      '*': () => a * b
    }[op];
    if (action) alert(action());
   
    if (!confirm('Хотите ли вы решить еще один пример?')) break;
  }