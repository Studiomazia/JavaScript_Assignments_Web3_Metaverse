// JS Task No 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.

const magicians = ["Nasir", "Peeja", "Khuwaja","Hamadani","Adnan"];
let magicians2 = ["Nasir", "Peeja", "Khuwaja","Hamadani","Adnan"];


function make_great(){
    let display = magicians2.map(item => {
return " Great " + item +" ";
})
let render = display.join('') ;
console.log(render);
magicians2 = [render];
console.log(magicians2);
}
make_great()

console.log(`The original array of magicians is : ${magicians}  `);