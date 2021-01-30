let day = +prompt("Enter day");
let month = +prompt("Enter month");
let year =  +prompt("Enter year");
let hightYear =  (year % 4 == 0  || year %400 == 0 && year %100 !==0);

 if (day <= 31 && month <= 12) {
    if (hightYear && month === 2 && day === 29) {
        alert('01.${month + 1}.${year}')
    }
    else if(day === 31 && month !== 12) {
        alert('01.${month + 1}.${year}')
    }
    else if(day === 31 && month == 12) {
        alert('01.01.${year + 1}')
    }
 } 
 else { 
     alert('${day+ 1}.${month}.${year}')
  }