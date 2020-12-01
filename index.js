// image1

var random1 = Math.random();

var randomNumber1 = Math.floor(random1 * 6) +1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage1);


// image2

var random2 = Math.random();

var randomNumber2 = Math.floor(random2 * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);

// declaration

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "💯 Player One Wins ❌"
}

else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "❌ Player Two Wins 💯"

}

else if (randomNumber2 === randomNumber1)
{
    document.querySelector("h1").innerHTML = "💯 Draw 💯"

}