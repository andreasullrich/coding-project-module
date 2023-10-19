/*Copy the following complete code block to your script.js file and try 
to spot and fix the errors.
Returns Greater than 10 but should return Greater than 20*/

//more than one solution possible.... not clearly defined
const size = 25;
let result;

if (size < 10) {
  /*sign ">" rotated*/
  result = "Greater than 10";
} // also && size > 30 would work or some other statements
else if (size > 20) {
  result = "Greater than 20";
  // same here -> exchange to top / other variants would work too / different variants would work
} else {
  result = "Lower than 10";
}

console.log(result);

//--------------------------------------------------------------------------------

// TODO: Implement the oddEven function

let oddEven = function (x) {
  if (x % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

//ODER:
function oddEven(x) {
  if (x % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
oddEven(4);

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//-------------------------------------------------------------------------------

// TODO: Implement the oldYoung function

function oldYoung(x) {
  if (!Number.isInteger(x) == true || x < 0) {
    return "invalid parameter";
  }

  if (x < 16) {
    return "children";
  } else if (x < 50) {
    return "young person";
  } else if (x > 50) {
    return "elder person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
