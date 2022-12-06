import { HomeExercise } from "./exercises/home_exercise.js";
const home_exercise = new HomeExercise();

console.log("/***** Testing aboveBelow *****/");
for(var i = 1; i < 4; i++) {

    // Generate random integer between 0 and 10
    const comparisonInteger = Math.floor(Math.random() * 10);

    // Generate a 6 item array containing integers between 0 and 10
    const unsortedIntegers = Array.from(Array(6)).map(value => Math.floor(Math.random() * 10));

    console.log("Test "+i+":" +
    "\n unsortedIntegers = " + unsortedIntegers + 
    "\n comparisonInteger = " + comparisonInteger + 
    "\n result = " + JSON.stringify(home_exercise.aboveBelow(unsortedIntegers, comparisonInteger)))
}  

console.log("\n/***** Testing stringRotation *****/");
for(var i = 1; i < 4; i++) {

    // Generate a random 10 character string
    const userString = generateString(10);

    // Generate amount to rotate by between 0 and 10
    const rotationInteger = Math.floor(Math.random() * 10);

    console.log("Test "+i+":" +
    "\n userString = " + userString + 
    "\n rotationInteger = " + rotationInteger + 
    "\n result = " + home_exercise.stringRotation(userString, rotationInteger))
}

function generateString(length = 0) {

    const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

    var response = "";
    while(response.length < length) {
        response += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return response;
}