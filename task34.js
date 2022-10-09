// JS Task No 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

var fav_pizza;
fav_pizza = ["Chicken Fajita Pizza","Margherita Pizza","BBQ Chicken Pizza"];

for (let i = 0; i < fav_pizza.length; i++) {
            console.log(fav_pizza[i]);              
}

console.log('\n');

for (let i = 0; i < fav_pizza.length; i++) {
    console.log(`I like ${fav_pizza[i]}`);    
}

console.log('\n');
console.log(`The pizza itself looks so yummy, crispy and so cheesy. There is no better feeling in the world than a warm pizza box on your lap. My love for Pizza is very high. I am always hungry for pizza, be it any time of the day.
I really love ${fav_pizza[0]}.`)