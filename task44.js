// JS Task No 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have 
// one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich 
// that is being ordered. Call the function three times, using a different number of arguments each time.


let items = ["egg", "onion","cheez","Mionees","balck_pepper"]


function sandwichOrdero(...items){
    console.log(`Your sandwich will be be having these items : ${items}`)

}
sandwichOrdero(items[0],items[1]);
sandwichOrdero(items[2],items[3]);
sandwichOrdero(items[4],items[5]);

