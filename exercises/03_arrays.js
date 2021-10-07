console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


// Exercise 03A
var array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log("Exercise 03A  Result  Month5: "+array[4]+"\t Month11: "+array[10]);

//
console.log("--------------------------------------------");

// Exercise 03B
console.log("Exercise 03B Result: ", array.sort());

//
console.log("--------------------------------------------");

// Exercise 03C
var arrayC = ["January","February","March","April","May","June","July","August","September","October","November","December"];

arrayC.push("NewFinalElement");
arrayC.unshift("NewFirstElement");

console.log("Exercise 03C Result: ", arrayC);

//
console.log("--------------------------------------------");

// Exercise 03D
var arrayD = ["January","February","March","April","May","June","July","August","September","October","November","December"];

arrayD.pop();
arrayD.shift();

console.log("Exercise 03D Result: ", arrayD);

//
console.log("--------------------------------------------");

// Exercise 03E
var arrayE = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("Exercise 03E Result: ", arrayE.reverse());

//
console.log("--------------------------------------------")

// Exercise 03F
var arrayF = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("Exercise 03F Result: ", arrayF.join('-'));

//
console.log("--------------------------------------------");

// Exercise 03G
var arrayG = ["January","February","March","April","May","June","July","August","September","October","November","December"];
copyArray = arrayG.slice(4,11);

console.log("Exercise 03G Result: ", copyArray);




