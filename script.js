////////////////////////////////////////////////////////////////
//1.Create a function that calculate 0-10 pressing "spacebar"

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
//Gauge To be remove after testing REMOVE !!!!!!!!!!!
const gaugeElement = document.querySelector(".gauge");
function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}
setGaugeValue(gaugeElement, 0.8);
//Gauge To be Remove after testing REMOVE !!!!!!!!!!!

// // Game
// Const startPoint = 50;
// Const player1win = 0;
// Const player2win = 100;

// Let dmg = 1
// Event listener set space to dmg++

// Function dmgInput (player1, player2, com){
// player1.dmg++
// Player2.dmg- -
// com.dmg(var )//with case and break// create multiples

// }
