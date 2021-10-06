console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


// EXCERCISE 03A
var array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log("Excercise 03A  Result  Month5: "+array[4]+"\t Month11: "+array[10]);

//
console.log("--------------------------------------------");

// EXCERCISE 03B
console.log("Excercise 03B Result: ", array.sort());

//
console.log("--------------------------------------------");

// EXCERCISE 03C
var arrayC = ["January","February","March","April","May","June","July","August","September","October","November","December"];

arrayC.push("NewFinalElement");
arrayC.unshift("NewFirstElement");

console.log("Excercise 03C Result: ", arrayC);

//
console.log("--------------------------------------------");

// EXCERCISE 03D
var arrayD = ["January","February","March","April","May","June","July","August","September","October","November","December"];

arrayD.pop();
arrayD.shift();

console.log("Excercise 03D Result: ", arrayD);

//
console.log("--------------------------------------------");

// EXCERCISE 03E
var arrayE = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("Excercise 03E Result: ", arrayE.reverse());

//
console.log("--------------------------------------------")

// EXCERCISE 03F
var arrayF = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("Excercise 03F Result: ", arrayF.join('-'));

//
console.log("--------------------------------------------");

// EXCERCISE 03G
var arrayG = ["January","February","March","April","May","June","July","August","September","October","November","December"];
copyArray = arrayG.slice(4,11);

console.log("Excercise 03G Result: ", copyArray);




