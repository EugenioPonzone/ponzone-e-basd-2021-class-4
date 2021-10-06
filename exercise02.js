console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");


// Exercise 02A
var string = "this is the second Exercise a";

console.log("Exercise 02A  Normal String: " + string);
console.log("Exercise 02A  Result: " + string.toUpperCase());

//
console.log("--------------------------------------------")

// Exercise 02B
var stringB = "thiis is the second Exercise b";
fractionString = stringB.substring(0,5);

console.log("Exercise 02B  Normal String: " + stringB);
console.log("Exercise 02B  Result: " + fractionString);

//
console.log("--------------------------------------------")

// Exercise 02C
var stringC = "this is the second Exercise c";
fractionStringC = stringC.substring(stringC.length-3,stringC.length);

console.log("Exercise 02C  Normal String: " + stringC);
console.log("Exercise 02C  Result: " + fractionStringC);

//
console.log("--------------------------------------------")

// Exercise 02D
var stringD = "this Is the sEcoNd Exercise D";
transformedD = stringD.toLocaleLowerCase();             // transform the entire string to LowerCase into a new var
firstLetter = transformedD.substring(0,1);              // copy the first letter of the string into a new var
firstLetter = firstLetter.toUpperCase();                // transforme the first letter to UpperCase
transformedD = transformedD.substring(1,transformedD.length);  // remove the first letter of the string
transformedD = firstLetter+transformedD;                // concatenate the fisrt letter with the rest of the string

console.log("Exercise 02D  Normal String: " + stringD);
console.log("Exercise 02D  Result: " + transformedD);

//
console.log("--------------------------------------------")

// Exercise 02E
var stringE = "this is the second Exercise e";
firstSpace = stringE.indexOf(' ');

console.log("Exercise 02E  Normal String: " + stringE);
console.log("Exercise 02E  Result: " + firstSpace);


//
console.log("--------------------------------------------")

// Exercise 02F
var stringF = "thisIsTheSecond ExerciseF";     
transformedF = stringF.toLocaleLowerCase();                 // transform the entire string to LowerCase into a new var
positionSpace = transformedF.indexOf(' ');                  // search the position of the word separator

firstWord = transformedF.substring(0,positionSpace);         // copy the first word into a new var
secondWord = transformedF.substring(positionSpace+1, transformedF.length);   // copy the second word into a new var

firstLetterA = firstWord.substring(0,1);                 // copy the first letter of the first word into a new var
firstLetterA = firstLetterA.toUpperCase();              // transforme the first letter to UpperCase
firstLetterB = secondWord.substring(0,1);               // copy the first letter of the Second word into a new var
firstLetterB = firstLetterB.toUpperCase();              // transforme the first letter to UpperCase

firstWord = firstWord.substring(1,firstWord.length);        // remove the first letter of the string
secondWord = secondWord.substring(1,secondWord.length);

transformedF = firstLetterA+firstWord+" "+firstLetterB+secondWord;

console.log("Exercise 02F  Normal String: " + stringF);
console.log("Exercise 02F  Result: " + transformedF);



