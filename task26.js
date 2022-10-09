// JS Task No 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

//Alien Colors #2
var alien_color;
alien_color = "red";

//for if block
if (alien_color == "red") {
  console.log("the player earned 5 points.");
} else {
  console.log("the player just earned 10 points.");
}

//for else block
if (alien_color == "Red") {
  console.log("the player just earned 5 points for shooting the alien.");
} else {
  console.log("the player just earned 10 points.");
}
