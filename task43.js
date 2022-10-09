// JS Task No 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate 
// array. Call show_magicians() with each array to show that you have one array of the original names and one array 
// with the Great added to each magician’s name.
const magicians = ["Nasir", "Peeja", "Khuwaja","Hamadani","Adnan"];
let magicians2 = ["Nasir", "Peeja", "Khuwaja","Hamadani","Adnan"];


function make_great(){
    let display = magicians2.map(item => {
return " Great " + item +" ";
})
let render = display.join('') ;
magicians2 = [render];
console.log("The changed array after adding Great with each magician is as : "+magicians2);
}
make_great()

console.log(`The original array of magicians is : ${magicians}  `);




