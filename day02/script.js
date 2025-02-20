
// ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language. 

let name, age, isStudentStatus, favorieProgramingLanguage;

name = "Md Khabbab Hossen";
age = 24;
isStudentStatus= true;
favorieProgramingLanguage= "javaScript";

// ✅ Task 2: Print the values to the console. 

console.log(`My Name is: ${name}`);
console.log(`My age: ${age} years old`);
console.log(`I am a Student: ${isStudentStatus}`);
console.log(`My Favorite programming Language is: ${favorieProgramingLanguage} `);

// ✅ Task 3: Try reassigning values to let and const variables and observe errors. 

let language = "javaScript";
language = "java";
console.log(language);

// const favoritLanguage = "Paython";
// favoritLanguage = "PHP"
// console.log(favoritLanguage)

// ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

const person = {
    name: "khabbab",
    age: 24,
    isStudent: true,
    programmingLanguage: "javaScirpt"
}
console.log(person)
person.age = 25
console.log(person)

const personDetails = ["khabbab", 24, "javaScript"]
console.log(personDetails)
personDetails[1]=25
console.log(personDetails)

