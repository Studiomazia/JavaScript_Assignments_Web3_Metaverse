// JS Task No 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a 
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
// with the required information and two other name-value pairs, such as a color or an optional feature. Print the 
// Object that’s returned to make sure all the information was stored correctly.

let cars = {name : " Honda",
model : 2018,
manufacturer : "Japan",
color : "white"
}

function cars_(_manufacturer, _model){
    let cars = {name : " Honda",
    model : 2018,
    manufacturer : "Japan",
    color : "white"
    }
    // uncomment this for input at the argument level.
    
    // cars.manufacturer = _manufacturer;
    // cars.model = _model;


    console.log(`Model of the car is : ${cars.model}`)
    console.log(`Manufacturer of the car is : ${cars.manufacturer}`)
    console.log(`Color of the car is : ${cars.color}`)


}
cars_(cars);