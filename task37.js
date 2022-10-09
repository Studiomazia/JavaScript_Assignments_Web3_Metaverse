// JS Task No 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love 
// JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different 
// message.

let size = ["small", "medium","large", "any"];

function make_shirt(size){
    if (size ==="small"){
        console.log("The size of the shirt is "+size +" and the message is that we Love Pakistan")
    }
    
    else if (size ==="medium"){
        console.log(`Size of the shirst is ${size} and message is "I love Javascript."`)
    }
    else if (size ==="large"){
        console.log(`This is the default size of the shirt which is ${size} and message is "We are proud of Sir Zia."`)
    }
    else{
        console.log(`This is ${size} any random size of the shirt and the message is "We are proud of Sir Danyal Nagori."`)
    }
}

// calling function with the first parameter of size.
make_shirt("large");