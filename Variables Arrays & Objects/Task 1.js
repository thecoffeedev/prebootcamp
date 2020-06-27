/*---##########################################---*/
/*---Task 1: Simple Programs todo for variables---*/
/*---##########################################---*/

// NOTE : Not all the program is printed in the console...

// 1. Declare four variables without assigning values and print them in console.

var a, b, c, d;
console.log(a, b, c, d);

/*--------------------------------------------------------------------------------------------------------------------*/

// 2. How to get value of the variable myvar as output
        // var myvar= 1;
        // console.log("myvar");

var myvar= 1;
console.log(myvar);

/*--------------------------------------------------------------------------------------------------------------------*/

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines.

var first_name;
var last_name;
var marital_status;
var country;
var age;

/*--------------------------------------------------------------------------------------------------------------------*/

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line.

var first_name, last_name, marital_status, country, age;

/*--------------------------------------------------------------------------------------------------------------------*/

// 5. Declare variables and assign string, boolean, undefined and null data types.
        
        // I am 25 years old.    
        // You are 30 years old. // I think these two strings has nothing to do with question.

var first_name = 'pling'; // String
var last_name = null;     // null
var marital_status = true;// Boolean
var country;              // Undefined  (its not necessary to give - var country = undefined;)
var age = 30;             // Number / Integer

/*--------------------------------------------------------------------------------------------------------------------*/

// 6. Convert the string to integer
        // parseInt()
        // Number()
        // Plus sign(+)

var string = "56";

var number1 = parseInt(string);
var number2 = Number(string);
var number3 = +string;

/*--------------------------------------------------------------------------------------------------------------------*/

// 7. Write 6 statement which provide truthy & falsy values.

function truthyFalsy (val) {
        if (val) {
            console.log("Truthy!");
        } else {
            console.log("Falsy.");
        }
    }

// Truthy - true, "string", [], 1234, {}
// Falsy - false, null, undefined, NaN, 0, ""

