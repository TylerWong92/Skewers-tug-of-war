////////////////////////////////////////////////////////////////
//1.Create a function that calculate 0-100 pressing "spacebar"

let dmgCount = 0;
const maxHealth = 10;
//Function that listen to user input of pressing "space"
//stop the loop if user input reach "maxHealth"
const dmgCounter = document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && dmgCount < maxHealth) {
    dmgCount++;
    console.log(dmgCount);
    printResult(dmgCount);
  }
});

// Function logic of the game

function printResult(dmgCount) {
  if (dmgCount === maxHealth) {
    console.log("you win!");
    dmgCount = 0;
  }
}
