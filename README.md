![Demo](./src/AppDemo.gif)

Technologies used: Html/CSS/Javascript
Brief intro
Skewers tug of war is a simple button-smashing game that is built for the browser. The gameplay is simple there will be two-player mode and single-player mode.
For player vs player, player 1 would have control of the "spacebar" and player 2 would have control of the "up-arrow" keys. both players would mash their keys the fastest to bring the skewer toward them and would win the game.
For Computer, there would be a series of gameplay with a total of 5 rounds player would have to win a total of all five rounds.

the approach I took for the front end of the skewer is creating a <section> and adding a background image of the grill. added the skewer into the section and having it as the same dimension as the background means I do not have to position the skewer.

As for the unsolved problems is that because i coded the same function of the player two input same as the computer input. The game have some bug during pvp after the player 1 wins the game. if player 2 keys are actvated computer would than start the game.
Major hurdles that i have over come is setting // clearInterval(changeStr);
because im creating 5 level of game play in a case and break function it is required to have setinterval be reset everyround.
