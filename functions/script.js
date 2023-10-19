//Implement a welcomeMsg function.
function welcomeMsg(name) {
  return "Willkommen " + name;
}
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

//Implement a calcGrossPrice function.
function calcGrossPrice(price, tax) {
  return price * tax + price;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

//Implement a addPositive function.
function addPositive(nmbr1, nmbr2) {
  return Math.abs(nmbr1) + Math.abs(nmbr2);
}
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
