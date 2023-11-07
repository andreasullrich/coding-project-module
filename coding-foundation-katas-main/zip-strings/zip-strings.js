//my test solution:-----------------------------------
function zipStrings(strA, strB) {
  let newArray = [];

  for (let i = 0; i < strA.length; i++) {
    if (strA[i] === strB[i]) {
      newArray.push(strA[i] + strB[i]).join("");
    }
  }

  return newArray;
}
//my test solution------------------------------------

//final solution:-------------------------------------
function zipStrings(strA, strB) {
  const maxLength = Math.max(strA.length, strB.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    if (i < strA.length) {
      result += strA[i];
    }
    if (i < strB.length) {
      result += strB[i];
    }
  }

  return result;
}

console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
