// Copy the following complete code block to your script.js file and try to spot and fix the errors.
/*

const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true

*/

//result
let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return (userName = userName.length);
}

console.log(getUserNameLength(userName) > 4);

/*------------------------------------------------
 TODO: Implement the isString function*/

let isString = function (object) {
  return typeof object == "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
