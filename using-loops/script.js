//Implement a oddNumbers function.

//solange i kleiner ist als der Wert, solange wird i um eins erhöht
//die Schleife läuft so lange, bis die Bedingung erfüllt ist

//------------------------------Lösung 1----------------------------------------------
function oddNumbers(numZero, numMax) {
  let result = "";
  if (numZero % 2 === 0) {
    numZero = numZero + 1;
  }

  for (let i = numZero; i < numMax; i++) {
    if (i % 2 !== 0) {
      if (i === numZero) {
        result = result + i;
      } else {
        result = result + "," + i;
      }
    }
  }
  return result;
}

//---------------------------------Lösung 2-------------------------------------------

let firstNmbr;
let secondNmbr;
function oddNumbers(firstNmbr, secondNmbr) {
  if (firstNmbr < 0 || secondNmbr < 0) {
    return "negative numbers not allowed";
  }
  von = Math.min(firstNmbr, secondNmbr);
  bis = Math.max(firstNmbr, secondNmbr);
  let s = "";
  for (let i = von; i <= bis; i++) {
    if (i % 2 == 1) {
      s = s + i.toString() + ",";
    }
  }
  if (s.length > 0) {
    s = s.substring(0, s.length - 1);
  }
  return s;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3
console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33
console.log(oddNumbers(9, 12));
// result should be: 9,11

//----------------------------------------------------------------------------------

// TODO: Implement the charCount function

function charCount(word, char) {
  let count = 0;
  if (char.length > 1) {
    return "not allowed";
  }
  for (i = 0; i < word.length; i++) {
    if (word[i] == char) {
      count++;
    }
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2
console.log(charCount("mama", "m"));
// result should be: 2
console.log(charCount("Resümee", "e"));
// result should be: 3
