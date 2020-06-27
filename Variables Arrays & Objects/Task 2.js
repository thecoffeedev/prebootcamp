/*---##########################################---*/
/*---Task 2: Simple Programs todo for Operators---*/
/*---##########################################---*/

// NOTE : Not all the program is printed in the console...

// 1. Square of a number.

var number = 5;
var squared_number = Math.pow(number, 2);

/*--------------------------------------------------------------------------------------------------------------------*/

// 2. Swapping 2 numbers.

var a = 1;
var b = 2;

a = a + b;
b = a - b;
a = a - b;

// a => 2
// b => 1

/*--------------------------------------------------------------------------------------------------------------------*/

// 3. Addition of 3 numbers.

var a = 1;
var b = 2;
var sum = a + b;

/*--------------------------------------------------------------------------------------------------------------------*/

// 4. Celsius to Fahrenheit conversion.

var celsius = 23;
var fahrenheit = (celsius * (9 / 5)) + 32; // => 73.4

/*--------------------------------------------------------------------------------------------------------------------*/

// 5. Meter to miles.

var meter = 1;
var miles = meter / 1609;

/*--------------------------------------------------------------------------------------------------------------------*/

// 6. Pounds to kg.

var pound = 5;
var kg = pound / 2.205;

/*--------------------------------------------------------------------------------------------------------------------*/

// 7. Calculate Batting Average.

var hits = 165;
var atBats = 232;
var BattingAverage = hits / atBats;

/*--------------------------------------------------------------------------------------------------------------------*/

// 8. Calculate five test scores and print their average.

var testScore1 = 246;
var testScore2 = 312;
var testScore3 = 199;
var testScore4 = 223;
var testScore5 = 204;

var testAverage = (testScore1 + testScore2 + testScore3 + testScore4 + testScore5) / 5;

/*--------------------------------------------------------------------------------------------------------------------*/

// 9. Power of any number x ^ y.

var x = 3;
var y = 4;
var power = Math.pow(x, y);

/*--------------------------------------------------------------------------------------------------------------------*/

// 10. Calculate Simple Interest.

var principal = 100000;
var interest = 0.08;
var time = 5;

var simpleInterest = principal * time * interest / 100;

/*--------------------------------------------------------------------------------------------------------------------*/

// 11. Calculate area of an equilateral triangle.

var side = 5.6;
var area = Math.sqrt(3) / 4 * (side * side);

/*--------------------------------------------------------------------------------------------------------------------*/

// 12. Area Of Isosceles Triangle.

var base = 13;
var height = 7;
var area = (base * height) / 2;

/*--------------------------------------------------------------------------------------------------------------------*/

// 13. Volume Of Sphere.

var radius = 6.3;
var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

/*--------------------------------------------------------------------------------------------------------------------*/

// 14. Volume Of Prism.

var sideLength = 9;
var sideWidth = 7;
var height = 13;

var baseArea = sideLength * sideWidth;
var volume = baseArea * height;

/*--------------------------------------------------------------------------------------------------------------------*/

// 15. Find area of a triangle.

var base = 9;
var height = 7;
var area = (base * height) / 2;

/*--------------------------------------------------------------------------------------------------------------------*/

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product.

var actualCost = 15;
var soldCost = 13;

var discount = (1 - (soldCost / actualCost)) * 100 + "%";

/*--------------------------------------------------------------------------------------------------------------------*/

// 17. Given their radius of a circle and find its diameter, circumference and area.

var radius = 7;

var diameter = radius * 2;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * (radius * radius);

/*--------------------------------------------------------------------------------------------------------------------*/

// 18. Given two numbers and perform all arithmetic operations.

var a = 5;
var b = 6;

var plus = a + b;
var minus = a - b;
var divide = a / b;
var multiply = a * b;
var modulus = a % b;
a++;
var increment_a = a;
a--;
var decrement_b = b;

/*--------------------------------------------------------------------------------------------------------------------*/

// 19. Display the asterisk pattern as shown below(No loop needed):
        // *****
        // *****
        // *****
        // *****
        // *****

var star = "*****\n";
var fiveTimes = star.repeat(5);
// console.log(fiveTimes);

/*--------------------------------------------------------------------------------------------------------------------*/

// 20. Calculate electricity bill?
        // For example, a consumer consumes 100 watts per hour daily for one month.
        // Calculate the total energy bill of that consumer if per unit rate is 10?

var unitRate = 10;
var dailyWPH = 100;

var monthlyWPH = dailyWPH * 30;
var unit = monthlyWPH / 1000;
var energyBill = unit * unitRate;
// console.log(energyBill);

/*--------------------------------------------------------------------------------------------------------------------*/

// 21. Program To Calculate CGPA.

var subject1 = 9; // value is grade points
var subject2 = 8;
var subject3 = 7;
var subject4 = 8;
var subject5 = 8;

var totalSubjects = 5;

var total = subject1 + subject2 + subject3 + subject4 + subject5;
var cgpa = total / totalSubjects;
// console.log(cgpa);
