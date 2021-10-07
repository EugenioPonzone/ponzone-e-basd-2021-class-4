/* 
Exercise 01A
Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
*/
var firstVarA = 1;
var secondVarA = 2;

var thirdVarA = firstVarA + secondVarA;

console.log("Exercise 01A FirstVar: ", firstVarA);
console.log("Exercise 01A SecondVar: ", secondVarA);
console.log("Exercise 01A Result: ", thirdVarA);

//
console.log("--------------------------------------------");

/* 
Exercise 01B
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
*/
var firstVarB = "Eugenio";
var secondVarB = "Ponzone";

var thirdVarB = firstVarB + secondVarB;

console.log("Exercise 01B FirstVar: " + firstVarB);
console.log("Exercise 01B SecondVar: " + secondVarB);
console.log("Exercise 01B Result: " + thirdVarB);

//
console.log("--------------------------------------------");

/*
Exercise 01C
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
*/
var firstVarC = "Eugenio";
var secondVarC = "Ponzone";

var thirdVarC = firstVarC.length + secondVarC.length;
console.log("Exercise 01C FirstVar: " + firstVarC + "\t Length:" + firstVarC.length);
console.log("Exercise 01C SecondVar: " + secondVarC + "\t Length:" + secondVarC.length);
console.log("Exercise 01C Result: " + thirdVarC);