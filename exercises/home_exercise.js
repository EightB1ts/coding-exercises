export class HomeExercise {
    
    aboveBelow(unsortedIntegers = [], comparisonInteger = 0) {

        /**
         * Use filter method to identify the records in unsortedIntegers that are 
         * greater or less than comparisonInteger. Return object
         */
        return {
            above: unsortedIntegers.filter(value => value > comparisonInteger).length, 
            below: unsortedIntegers.filter(value => value < comparisonInteger).length
        }

    }

    stringRotation(userString = "", rotationInteger = 0) {

        /**
         * Use slice method to determine rotatedString and remainingString. Return concatenated string
         */
        const rotatedString = userString.slice(rotationInteger * -1);
        const remainingString = userString.slice(0, rotationInteger * -1);

        return rotatedString + remainingString;
    } 
}
