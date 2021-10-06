console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


// EXCERCISE 05A
var array = ["first", "second", "third", "forth", "fifth"];

for (var i = 0; i < array.length; i++) {
    console.log("Excercise 05A Result: " + array[i]);
}

//
console.log("--------------------------------------------");

// EXCERCISE 05B
var transform = firstLetter = "";

for (var i = 0; i < array.length; i++) {
    transform = array[i];
    firstLetter = transform.substring(0, 1);
    firstLetter = firstLetter.toUpperCase();
    transform = transform.substring(1, transform.length);
    transform = firstLetter + transform;

    console.log("Excercise 05B Result: " + transform);
}

//
console.log("--------------------------------------------");

// EXCERCISE 05C
var sentence = "";

for (var i = 0; i < array.length; i++) {
    sentence += array[i];
}
console.log("Excercise 05C Result: " + sentence);

//
console.log("--------------------------------------------");

// EXCERCISE 05D
var arrayD = [];

for (var i = 0; i < 10; i++) {
    arrayD[i] = i;
}
console.log("Excercise 05D Result: ", arrayD);