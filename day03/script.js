// 1. Odd or Even?
// Take a number and find if the number is an odd or even number.
// Print the number and result in the console.

console.log("=========1. even of odd number finder=========");
let sumNumber = 10;
console.log(sumNumber);
let evenNumber =
  sumNumber % 2 === 0 ? "this number is even" : "this number is odd";
console.log(evenNumber);

// ===================================================

let sumNumber2 = 15;
console.log(sumNumber2);

let oddNumber =
  sumNumber2 % 2 === 0 ? "this number is even" : "this number is odd";
console.log(oddNumber);

// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.
console.log("========2. find Driving License age==========");
let drivingLicenseAge = 18;
console.log("Driving License Age is " + drivingLicenseAge);
let khabbAge = 24;
console.log("Khabbab is getting old " + khabbAge);
let licenseElligibleAge =
  drivingLicenseAge <= khabbAge
    ? "Is of legal age for a license"
    : "Not old enough for a license";
console.log(licenseElligibleAge);

// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.
//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?
console.log("========3. Calculate CTC with a Bonus==========");
let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let bonusAmount = (annualSalary / 100) * 20;
let annualSalaryWithBonus = annualSalary + bonusAmount;
console.log("money make per annum as a CTC " + annualSalaryWithBonus);

// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!
//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
console.log("========4. program for the Traffic Light Simulation==========");
let color = "red";
let trafficLight = color === "red" ? "Stop" : "Go";
console.log("Travelers " + trafficLight);

// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.
//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
console.log("========5. Electricity Bill Calculator==========");
let unit = 20;
let perUnitAmount = 150;
let monthlyEB = unit * perUnitAmount;
let yearlyEB = monthlyEB * 12;
let discount = (yearlyEB / 100) * 20;
let discountYearlyEB = yearlyEB - discount;
console.log("Permonth Electriciry bill ", monthlyEB);
console.log("Reguler Yearly Electricity bill ", yearlyEB);
console.log("20% off annual Electriciry bill ", discountYearlyEB);


// 6. Leap Year Checker
// Is 2025 a Leap Year?
//  Take year as input.
//  Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
console.log("========6. Leap Year Checker==========");
let year = 2025; 
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
                 ? "Leap Year" 
                 : "Not a Leap Year";

console.log(isLeapYear);



// 7. Max of Three Numbers
//  Find the max number from the lot.
//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.
console.log("========7. Max of Three Numbers==========");
let p = 46;
let q = 95;
let r = 37;

let maxNumber =
  p < q
    ? q
    : p && p < r
    ? r
    : p && p < p
    ? p
    : q && q < r
    ? r
    : q && r < p
    ? p
    : r && r < q
    ? q
    : r;
console.log("Max number of ", maxNumber);


// 8. Biwise Doubling
// A tricky one for you
//  Create a variable count and assign a value, say, 5.
//  Now use the Bitwise shift operator to make the number double.
//  Print it on the console.
console.log("========8. tricky quasion==========");
let count = 5
count = count << 1; 
console.log(count);

