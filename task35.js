// JS Task No 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these
// animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a
// statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating
// what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

var animal;
animal = ["frogs", "salamanders", "newts"];

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

console.log(`${animal[0]} absorb water and breathe through their thin skin.`);
console.log(
  `${animal[1]} have at least one special skin gland used for defense.`
);
console.log(`${animal[2]} follow the life cycle of egg-larva-adult.`);
console.log(`they all need moist environments or water to survive.`);
