console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


// EXCERCISE 04A

var numRandom = Math.random();
console.log("Excercise 04A Random Number: " + numRandom);

if (numRandom >= 0.5) {
    console.log("Excercise 04A Result: Greater than 0,5");
} else {
    console.log("Excercise 04A Result: Less than 0,5");
}


//
console.log("--------------------------------------------");

// EXCERCISE 04B
var typesAge = ["Baby", "Kid", "Teen", "Young Person", "Adult", "Elderly", "Old Person"];

var age = Math.round(Math.random() * 100);
console.log("Excercise 04B Random Age: " + age);

if (age < 2) {
    console.log("Excercise 04A Result: " + typesAge[0]);
} else if (age <= 12) {
    console.log("Excercise 04A Result: " + typesAge[1]);
} else if (age <= 19) {
    console.log("Excercise 04A Result: " + typesAge[2]);
} else if (age <= 30) {
    console.log("Excercise 04A Result: " + typesAge[3]);
} else if (age <= 60) {
    console.log("Excercise 04A Result: " + typesAge[4]);
} else if (age <= 75) {
    console.log("Excercise 04A Result: " + typesAge[5]);
} else {
    console.log("Excercise 04A Result: " + typesAge[6]);
}