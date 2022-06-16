"use strict;"

// exercise 1
let fourNamesArray = ['Groucho', 'Chico', 'Harpo', 'Zeppo'];
for (let i =0; i < fourNamesArray.length; i++){
    console.log(fourNamesArray[i]);

}
// exercise 2

let fiveNumberArray = [1,2,3,4,5];
for (let j = 0; j<fiveNumberArray.length; j++){
    console.log(fiveNumberArray[j]);
}

// exercise 3

let fourNamesArray2 = ['Matthew', 'Mark', 'Luke', 'John'];
console.log(fourNamesArray2[2]);
let newfourNamesArray2 = fourNamesArray2.splice(1);
console.log(newfourNamesArray2[1]);

// ### Exercise 4 

// Print the array.
let exerciseFourArray = [5,3,7,4]
console.log(exerciseFourArray);
// Print the 3rd element of the numberList.
console.log(exerciseFourArray[2]);
// Delete the second element.
let newExerciseFourArray = exerciseFourArray.splice(2);
// Print the 3rd index element.
console.log(newExerciseFourArray[2]);

