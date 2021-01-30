let planet = prompt("what is the name of our planets? 1 -Jupiter 2 - Mercury 3 - Earth");
let color = prompt("what color is the sun? 1 - red 2 - yellow 3 - blue");
let capital = prompt("what is the capital of Ukraine? 1 - Kyiv 2 - Zhitomy 3 - Lviv ");
let score = 0;

 if(planet == 3){
    score += 2;
 }
 if(color == 2){
    score += 2;
 }
 if(capital == 1){
    score += 2;
 }
 alert('Your score is ' +score);