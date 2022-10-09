// JS Task No 14

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
// invite to dinner.

// Comment
// We found more space and a big table, so we are inviting 03 more guests, we will use unshift() method to add elements in the 
// array at the end of the existing FileList.

let guestList = ["Naeem","Asad","Shehroz"];


console.log("____________________________________________________________________________________________");
console.log("We found more space and a Big table, for reason that we are inviting more people in this Dinner");
console.log("____________________________________________________________________________________________");
guestList.unshift("Nasir","Adnan","Mehboob");
// Adding one new guest at the end of your array.
guestList.push("Aslam")

// Adding one new guest to the middle of your array.
guestList.splice(3, 0, "Wasif");
for (let i=0; i<guestList.length; i++){
    console.log("Hi Mr. "+guestList[i]+",");
    console.log("I would like you to have your company in a dinner party, Planned on 15 October, 2022 at Bahria Auditorium.");
    console.log("Wish You Best of Luch and see your there.");
    console.log("");
    }
