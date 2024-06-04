

var randomNum1= Math.floor(Math.random() * 6) + 1; //1-6
//. We multiply the random number by 6 to get a number between 0 and 5. Then we add 1 to make sure we don't get a zero. That's because our pictures start from 1, not 0!
var diceImage = "dice" + randomNum1 + ".png"; // we are creating dice1.png - dice6.png

var imageLocator1 = "images/" + diceImage; //image location(file path)
var image1 = document.querySelectorAll("img")[0];//put it in the first spot (HTML element) we find that can show pictures.

image1.setAttribute("src", imageLocator1);
//Using the setAttribute() method, we set the src attribute of the first <img> element found on the page to the randomly generated image source.

 
//RINSE AND REPEAT THE Above!!!!!!!!!!

var randomNum2= Math.floor(Math.random() * 6) + 1;
var imageLocator2 = "images/dice" + randomNum2 +".png"; 
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageLocator2); // i guess i could combine the last 2 lines togeether

//If player 2 wins
if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
  }
  else if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  