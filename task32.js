// JS Task No 32
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

var current_users, new_users,key;


current_users = ["Olivia","Emma","Amelia","Sophia","Mia"];
new_users = ["Mia","Camila","Amelia","Layla","Nora"];
key = true;

var lower_current = [],lower_new = [];

    current_users.forEach(element =>{
        lower_current.push(element.toLowerCase());
})

    new_users.forEach(element =>{
        lower_new.push(element.toLowerCase());
})

for (var i = 0; i < lower_new.length; i++) {
        for (var j = 0; j < lower_current.length; j++) {
            if (lower_new[i] === lower_current[j]) {
                console.log(`${new_users[i]} will need to enter a new username.`)
                key = false;
                break;                
            }
                   
        }
        if (key == true) {
            console.log("User Name is available.")  
        }  
        
            
}
   
