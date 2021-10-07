console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
/*
Exercise 04A
Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/
var numRandom = Math.random();
console.log("Exercise 04A Random Number: " + numRandom);

if (numRandom >= 0.5) {
    console.log("Exercise 04A Result: Greater than 0,5");
} else {
    console.log("Exercise 04A Result: Less than 0,5");
}


//
console.log("--------------------------------------------");

/*
Exercise 04B
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Nino” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/
var typesAge = ["Baby", "Kid", "Teen", "Young Person", "Adult", "Elderly", "Old Person"];

var age = Math.round(Math.random() * 100);
console.log("Exercise 04B Random Age: " + age);

if (age < 2) {
    console.log("Exercise 04B Result: " + typesAge[0]);
} else if (age <= 12) {
    console.log("Exercise 04B Result: " + typesAge[1]);
} else if (age <= 19) {
    console.log("Exercise 04B Result: " + typesAge[2]);
} else if (age <= 30) {
    console.log("Exercise 04B Result: " + typesAge[3]);
} else if (age <= 60) {
    console.log("Exercise 04B Result: " + typesAge[4]);
} else if (age <= 75) {
    console.log("Exercise 04B Result: " + typesAge[5]);
} else {
    console.log("Exercise 04B Result: " + typesAge[6]);
}