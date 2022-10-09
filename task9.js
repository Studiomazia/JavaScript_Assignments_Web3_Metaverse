// JS Task No 7  
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals 
// your favorite number. Print that message.
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
// for verification if the function is working properly...

