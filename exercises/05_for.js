console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
/*
Exercise 05A
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
*/
var array = ["first", "second", "third", "forth", "fifth"];

for (var i = 0; i < array.length; i++) {
    console.log("Exercise 05A Result: " + array[i]);
}

//
console.log("--------------------------------------------");

/*
Exercise 05B
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
*/
var transform = firstLetter = "";

for (var i = 0; i < array.length; i++) {
    transform = array[i];
    firstLetter = transform.substring(0, 1);
    firstLetter = firstLetter.toUpperCase();
    transform = transform.substring(1, transform.length);
    transform = firstLetter + transform;

    console.log("Exercise 05B Result: " + transform);
}

//
console.log("--------------------------------------------");

/*
Exercise 05C
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
*/
var sentence = "";

for (var i = 0; i < array.length; i++) {
    sentence += array[i];
}
console.log("Exercise 05C Result: " + sentence);

//
console.log("--------------------------------------------");

/*
Exercise 05D
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/
var arrayD = [];

for (var i = 0; i < 10; i++) {
    arrayD[i] = i;
}
console.log("Exercise 05D Result: ", arrayD);