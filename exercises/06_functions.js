console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


// Exercise 06A

function sum(a, b) {
    return a + b;
}
var randomA = Math.round(Math.random() * 100);
var randomB = Math.round(Math.random() * 100);
var resultA = sum(randomA, randomB);
console.log("Exercise 06A Number1: ", randomA);
console.log("Exercise 06A Number2: ", randomB);
console.log("Exercise 06A Result: ", resultA);


//
console.log("--------------------------------------------");

// Exercise 06B
function sumB(a, b) {

    if (typeof a != 'number' || typeof b != 'number') {
        console.log("Exercise 06B ¡ERROR! PARAMETERS ARENT A NUMBER");
        return NaN;
    } else {
        return a + b;
    }
}
var valueA = 2;   //CHANGE THESE VALUES TO TEST THE FUNCTION
var valueB = 3;

var resultB = sumB(valueA, valueB);
console.log("Exercise 06B Number1: ", valueA);
console.log("Exercise 06B Number2: ", valueB);
console.log("Exercise 06B Result: ", resultB);


//
console.log("--------------------------------------------");

// Exercise 06C
function validateInteger(a) {
    if (typeof a != 'number') {
        console.log("Exercise 06C The value isnt a number");
        return false;
    } else if (a !== parseInt(a)) {
        console.log("Exercise 06C The value isnt an integer");
        return false;
    } else {
        return true;
    }
}

var value = 3;  //CHANGE THIS VALUE TO TEST THE FUNCTION

var resultC = validateInteger(value);
console.log("Exercise 06C Number:", value);
console.log("Exercise 06C Result:", resultC);

//
console.log("--------------------------------------------");

// Exercise 06D
function sumD(a, b) {

    if (typeof a != 'number' || typeof b != 'number') {
        console.log("Exercise 06D ¡ERROR! PARAMETERS ARENT A NUMBER");
        return NaN;
    } else if (a !== parseInt(a) && b !== parseInt(b)) {
        console.log("Exercise 06D ¡ERROR! BOTH PARAMETERS ARENT AN INTEGER");
        return [Math.round(a), Math.round(a)];
        // according to the Exercise statement ask for round the number but not the sum
    } else if (a !== parseInt(a)) {
        console.log("Exercise 06D ¡ERROR! THE FIRST PARAMETER ISNT AN INTEGER");
        return Math.round(a);
        // according to the Exercise statement ask for round the number but not the sum
    } else if (b !== parseInt(b)) {
        console.log("Exercise 06D ¡ERROR! THE SECOND PARAMETER ISNT AN INTEGER");
        return Math.round(b);
        // according to the Exercise statement ask for round the number but not the sum
    } else {
        return a + b;
    }
}
var dvalueA = 3.2;   //CHANGE THESE VALUES TO TEST THE FUNCTION
var dvalueB = 3;

var resultD = sumD(dvalueA, dvalueB);
console.log("Exercise 06D Number1: ", dvalueA);
console.log("Exercise 06D Number2: ", dvalueB);
console.log("Exercise 06D Result: ", resultD);

//
console.log("--------------------------------------------");

// Exercise 06E

function sumE(a, b) {
    if (validate(a, b)) {
        return a + b;
    } else {
        return NaN;
    }
}

function validate(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        console.log("Exercise 06E ¡ERROR! PARAMETERS ARENT A NUMBER");
        return false;
    } else {
        return true;
    }
}

var evalueA = 2;   //CHANGE THESE VALUES TO TEST THE FUNCTION
var evalueB = 5;

var resultE = sumE(evalueA, evalueB);
console.log("Exercise 06E Number1: ", evalueA);
console.log("Exercise 06E Number2: ", evalueB);
console.log("Exercise 06E Result: ", resultE);

