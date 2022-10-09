// JS Task No 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
var magicians = ["Nasir", "Peeja", "Khuwaja","Hamadani","Adnan"]

function show_magicians(magicians){
    for (i = 0; i < magicians.length; i++){
        console.log(`Magician ${magicians[i]}`)
    }

}
show_magicians(magicians);

