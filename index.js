// For 1st Dice..!!!
let randomNo1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

let randomDiceImage1 = "dice" + randomNo1 + ".png"; // dice1.png - dice6.png

let randomImageSource1 = "./images/" + randomDiceImage1; // "images/dice1.png" - "images/dice6.png"

let image1 = document.querySelectorAll("img")[0]; // 1st img in array

image1.setAttribute("src", randomImageSource1); // Changing src Attribute 

// For 2nd Dice..!!!
let randomNo2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

let randomDiceImage2 = "dice" + randomNo2 + ".png";// dice1.png - dice6.png

let randomImagesource2 = "./images/" + randomDiceImage2;// "images/dice1.png" - "images/dice6.png"

let image2 = document.querySelectorAll("img")[1];// 2nd img in array

image2.setAttribute("src", randomImagesource2);// Changing src Attribute 

// Result who won..!!!!
if(randomNo1 > randomNo2){// player 1 wins
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
}
else if(randomNo2 > randomNo1){// player 2 wins
    document.querySelector("h1").innerHTML ="Player 2 Won 🚩";
}
else{ // its a draw
    document.querySelector("h1").innerHTML ="🫡 Its a DRAW ";
}


