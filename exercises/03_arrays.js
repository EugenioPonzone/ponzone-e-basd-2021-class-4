console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
/*
Exercise 03A
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
var array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log("Exercise 03A  Result  Month5: "+array[4]+"\t Month11: "+array[10]);

//
console.log("--------------------------------------------");

/*
Exercise 03B
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
console.log("Exercise 03B Result: ", array.sort());

//
console.log("--------------------------------------------");

/*
Exercise 03C
Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
var arrayC = ["January","February","March","April","May","June","July","August","September","October","November","December"];

arrayC.push("NewFinalElement");
arrayC.unshift("NewFirstElement");

console.log("Exercise 03C Result: ", arrayC);

//
console.log("--------------------------------------------");

/*
Exercise 03D
Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
var arrayD = ["January","February","March","April","May","June","July","August","September","October","November","December"];

arrayD.pop();
arrayD.shift();

console.log("Exercise 03D Result: ", arrayD);

//
console.log("--------------------------------------------");

/*
Exercise 03E
Invertir el orden del array (utilizar reverse).
*/
var arrayE = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("Exercise 03E Result: ", arrayE.reverse());

//
console.log("--------------------------------------------")

/*
Exercise 03F
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
var arrayF = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("Exercise 03F Result: ", arrayF.join('-'));

//
console.log("--------------------------------------------");

/*
Exercise 03G
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
var arrayG = ["January","February","March","April","May","June","July","August","September","October","November","December"];
copyArray = arrayG.slice(4,11);

console.log("Exercise 03G Result: ", copyArray);




