var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

var randDice1 = 'dice' + rand1 + '.png';
var randDicePath1 = 'images/' + randDice1;

var randDice2 = "dice" + rand2 + ".png";
var randDicePath2 = "images/" + randDice2;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randDicePath1);

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randDicePath2);

if (rand1 > rand2) {
    document.querySelector('h1').innerHTML = "Player 1 WINS";
} else if (rand2 > rand1){
    document.querySelector('h1').innerHTML = "Player 2 WINS";
} else {
    document.querySelector('h1').innerHTML = "ITS A TIE!";
}