/*---###############################################################---*/
/*---Task 3: Simple Programs todo for Condition , Looping and Arrays---*/
/*---###############################################################---*/

// NOTE : Not all the program is printed in the console...


// Write a loop that makes seven calls to console.log to output the following triangle:
        // #
        // ##
        // ###
        // ####
        // #####
        // ######
        // #######

for (var i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}

/*--------------------------------------------------------------------------------------------------------------------*/

// 2. Iterate through the string array and print it contents.
        // var strArray= ["<option>Jazz</option>",
        // ,"<option>Blues</option>",
        // ,"<option>New Age</option>",
        // ,"<option>Classical</option>",
        // ,"<option>Opera</option>"]

var strArray= ["<option>Jazz</option>", "<option>Blues</option>", 
"<option>New Age</option>", "<option>Classical</option>", "<option>Opera</option>"];

var contentArray = [];

for (var i = 0; i < strArray.length; i++) {
    contentArray.push(strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</")));
}
// console.log(contentArray); // => [ 'Jazz', 'Blues', 'New Age', 'Classical', 'Opera' ]

/*--------------------------------------------------------------------------------------------------------------------*/



/*---Arrays:---*/


// var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don"t use length property

var myarray=[11,22,33,44,55];
var length = 0;

while (myarray[length] !== undefined)
    length++;

// console.log(length); // => 5

/*--------------------------------------------------------------------------------------------------------------------*/

// Declare an empty array;

var emptyArray = [];

/*--------------------------------------------------------------------------------------------------------------------*/

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

var foods = ["Chappathi", "Sandwich", "Burger", "Pizza", "Biriyani", "Parotta", "Fried rice", "Noodles", "Malai kofta", 
"Aaloo kulcha", "Pani poori", "Vada paav", "pulav", "Ghee rice", "Poori", "Spanish maccaroni", "Thandoori", "Fish fry", "Tomato rice", "Kakra"];

/*--------------------------------------------------------------------------------------------------------------------*/

// Foods variable holds the names of your top 20 favorite foods, starting with the best food. 
// How can you find your fifth favorite food?

var fifthFavouriteFood = foods[4]; // 4 => Since the index starts at 0.
// console.log(fifthFavouriteFood);

/*--------------------------------------------------------------------------------------------------------------------*/

// Find the length of your foods array

var length_ = foods.length;

/*--------------------------------------------------------------------------------------------------------------------*/

// Starting from the existing friends variable below, 
// change the element that is currently "Mari" to "Munnabai".

var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];


function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if (friends[i] === "Mari") {
            friends[i] = "Munnabai";
        }
    }
}
    
dataHandling(friends);

/*--------------------------------------------------------------------------------------------------------------------*/

// Starting from the friends variable below, 
// Loop and Print the names till you meet CaptianAmerica.


const friendsList = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];

function dataHandling2(input){
    for (var i = 0; i < input.length; i++) {
        if (input[i] == "CaptianAmerica") {
            break;
        }
        console.log(input[i]);
    }
}

dataHandling2(friendsList);

/*--------------------------------------------------------------------------------------------------------------------*/

// Find the person is ur friend or not.

// const friendsList is declared in the above block.

function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if (input.includes(name)) {
            return true;
        }else{
            return false;
        }
    }
}

var found = dataHandling(friends,"Jeff");

// console.log(found);

/*--------------------------------------------------------------------------------------------------------------------*/

// We have two lists of friends below. 
// Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];

function dataHandling3(input1, input2){
    var friends = input1.concat(input2);
    friends.sort();
    return friends;
}
var friends = dataHandling3(friends1, friends2);

// console.log(friends) // Combined sorted array.

/*--------------------------------------------------------------------------------------------------------------------*/


// 1. Get the first item, the middle item and the last item of the array

// consider the array friends in the above block.

var firstItem = friends[0];
var middleItem = friends[(friends.length / 2) - 1];
var lastItem = friends[friends.length - 1];

/*--------------------------------------------------------------------------------------------------------------------*/

// 2. Add your name to the end of the friends array, and add another name to beginning.

friends.push("Anandha Narayanan");

friends.unshift("Ajay");


/*--------------------------------------------------------------------------------------------------------------------*/

// 3. Add Mr or Ms to the names in the friends array.

var friendLi = [...friends]; // Just for future Purpose.
for (var i = 0; i < friends.length; i++) {
    if(friends[i] === "MaryJane"){
        var title = ["Ms.", friends[i]];
        friends[i] = title.join(" ");
        continue;
    }
    var title = ["Mr.", friends[i]];
    friends[i] = title.join(" ");
}
// console.log(friends);
friends = [...friendLi]; // Converting back without titles.

/*--------------------------------------------------------------------------------------------------------------------*/

// 4. Concat all the names the friends array and return as comma "," seperated string.

var namesJoin = friends.join(",");

/*--------------------------------------------------------------------------------------------------------------------*/

// 5. Find the friends names who has letter "a" and return the list.

var aNames = [];
for (var i = 0; i < friends.length; i++) {
    if (friends[i].includes("a")) {
        aNames.push(friends[i]);
    }
}
// console.log(aNames);

/*--------------------------------------------------------------------------------------------------------------------*/

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

var namesLength = {};
var sum = 0;
for (var i = 0; i < friends.length; i++) {
    namesLength[friends[i]] = friends[i].length;
    sum += namesLength[friends[i]];
}
var average = sum / friends.length;
// console.log(average);

/*--------------------------------------------------------------------------------------------------------------------*/

// 7. Find the names and return the list starting with letter M.

mNames = [];

for (var i = 0; i < friends.length; i++) {
    if (friends[i][0] == "M"){
        mNames.push(friends[i]);
    }
}
// console.log(mNames);

/*--------------------------------------------------------------------------------------------------------------------*/

// 8. Find the name with max characters and return the name.

// We use objects "namesLength" of names ad its length declared before.


var arr = Object.values(namesLength);
var max = Math.max(...arr);

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var name = getKeyByValue(namesLength, max); // Name with max characters.

// console.log(name);

/*--------------------------------------------------------------------------------------------------------------------*/

// 9. Find the name with min characters and return the name.

// We use objects "namesLength" of names ad its length declared before.

var arr = Object.values(namesLength);
var min = Math.min(...arr);

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var name = getKeyByValue(namesLength, min); // Name with min characters.

// console.log(name);

/*--------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------*/


// Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];

var sum = 0;
var count = 0;
for (let i = 0; i < friendsInfo.length; i++) {
    if (typeof(friendsInfo[i]) == typeof(6)) {
        sum += friendsInfo[i];
        count += 1;
    }
}
var average = sum / count;
// console.log(average)

/*--------------------------------------------------------------------------------------------------------------------*/

// Print the contents of the input variable.

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];

function data_Handling(input){
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            console.log(input[i][j]);
        }
    }
}
data_Handling(input);

/*--------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------*/

/*---Objects:---*/

// What the output?

// var myobject = {1:one,"11":1,"name":"arun"} // Given & error. the one* should be inside "this" => "one"
var myobject = {1:"one","11":1,"name":"arun"}; // Given & error. the one* should be inside "this" => "one"

// console.log(myobject.11); //We will get error when we call number literal in dot notation even if it is a string.
console.log(myobject[11]); // So here we use bracket notation.

console.log(myobject.name);

/*--------------------------------------------------------------------------------------------------------------------*/

// Add a new key value pair to myobject
// key : ten
// value : ten

myobject = {1:"one","11":1,"name":"arun"};

myobject.ten = "ten";

console.log(myobject);

// {"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.

/*--------------------------------------------------------------------------------------------------------------------*/

// Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.

var thisObject = {"Guvi" : ["Guvi", "Geek", 6, "IIT-M RP","Chennai"]}

/*--------------------------------------------------------------------------------------------------------------------*/

// How would you represent the following data using a combination of object literals and arrays? 
// (You can describe a strategy without typing or writing out the whole thing.)
        // Guvi, Geek, 6, IIT-M RP,Chennai.
        // Amazon, Inc, 31, SP Infocity, Chennai.
        // Google, Alphabet, 34 Amphitheater Parkway, MountainView.
        // Tesla, Inc , 32, 333 Santana Row,San Jose.


// Adding the items as a list in a string literal that best describes the whole line of data.

var thisObject = {
"Guvi" : ["Guvi", "Geek", 6, "IIT-M RP", "Chennai"], 
"Amazon" : ["Amazon", "Inc", 31, "SP Infocity", "Chennai"],
"Google": ["Google", "Alphabet", 34, "Amphitheater Parkway", "MountainView"],
"Tesla" : ["Tesla", "Inc", 32, "333 Santana Row", "San Jose"]
}