// JS Task No 8 

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have 
// anything specific to write because your programs are too simple at this point, just add your name and the current date 
// at the top of each program file. Then write one sentence describing what the program does.

console.log("This task is about writing comments in your code, for better understanding.");
// Comment Program 1
// This program has the function of association of a number with a message. If you give a save a number and then 
// associated the message with that number, then whenever this function will be called and given that number then it will 
// return that message, otherwise return thatm, the number is not associated with this number.
let favorite_num  = 7;
let notFavoriteNo = 8;
let message = "This message is associated with my favorite No i.e : 7";

function printMessage(x){
    if (x===7){
        console.log("Your Favorite No is : "+favorite_num);
        console.log(message);
    }
    else{
        console.log("You entered the No : "+notFavoriteNo+", and this is not associated with your message")
        console.log("The given number has not associated with your message");
    }
}
printMessage(favorite_num);
// printMessage(notFavoriteNo);


// Comment Program 2
// This program removes the whitespaces in any string, and returns a clean sentence.
let sentencewithspaces = '    My string with a    lot   of Whitespace.  ';
let sentenceWithoutspaces = '    My string without a    lot   of Whitespace.  '.replace(/\s+/g, ' ').trim();

console.log("Before : "+sentencewithspaces+"After : "+sentenceWithoutspaces);