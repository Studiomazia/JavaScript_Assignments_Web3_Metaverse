// JS Task No 15

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two 
// people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from 
// your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
// an empty list at the end of your program.

let guestList = ["Naeem","Asad","Shehroz","Nasir","Adnan","Mehboob"];


console.log("____________________________________________________________________________________________");
console.log("We can only invite two persons, due to shortage of space,");
console.log("____________________________________________________________________________________________");


for (let i=0; i<guestList.length; i++){
    if (i==0){
        console.log("Dear "+guestList[i]+",");
        console.log("Due to the shortage of space, We can only invite two persons on this sepcial dinner. So, You are the First person invited.")
        console.log("Wish you Best of Luck and see you there");
        console.log("");      
    }
    else if(i==1){
        console.log("Dear "+guestList[i]+",");
        console.log("Due to the shortage of space, We can only invite two persons on this sepcial dinner. So, You are the Second person invited.")
        console.log("Wish you Best of Luck and see you there");
        console.log(""); 
    }
    else{
        console.log("Dear "+guestList[i]+",");
        console.log("Due to the shortage of space, We can only invite two persons on this sepcial dinner, For that we are dropping you this time, We are sad for this, but Majburi hai:")
        console.log("Wish you Best of Luck and see you Next Time Insha Allah");
        console.log("");
        }    
    }