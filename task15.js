// JS Task No 13
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of 
// invitations. You’ll have to think of someone else to invite.


// Shehroz is not available to join the Dinner, so i am inviting Nasir to join us and updading the list with splice() method

let guestList = ["Naeem","Asad","Shehroz"];

guestList.splice(2, 1, "Nasir");

for (let i=0; i<guestList.length; i++){
    console.log("Hi Mr. "+guestList[i]+",");
    console.log("I would like you to have your company in a dinner party, Planned on 15 October, 2022 at Bahria Auditorium.");
    console.log("Wish You Best of Luch and see your there.");
    console.log("");
    }

