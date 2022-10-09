// JS Task No 2 
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let yourName = "sAdDaM hUsSaIn";
let line1 = "nOw i aM bUsY iN mY wOrk";


function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);    
    }
    return str.join(' ');
  }


let lowerName = yourName.toLowerCase();
let upperName = yourName.toUpperCase();

console.log("Name Before is: "+yourName+",     "+"Name in Lower Case is: "+lowerName);
console.log("Name Before is: "+yourName+",     "+"Name in Upper Case is: "+upperName)

console.log("Line Before is: "+line1+",   Line in Title Case is: "+titleCase(line1));

