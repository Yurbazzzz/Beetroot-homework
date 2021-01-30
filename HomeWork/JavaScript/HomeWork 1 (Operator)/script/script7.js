let num = prompt("Enter value");
    if (num >= 200 && num <300) {
        alert(num*0.97 + '$');
    }
    else if(num >= 300 && num <500) {
        alert(num*0.95 + '$');
    }
    else if(num >= 500) {
        alert(num*0.93 + '$');
    }